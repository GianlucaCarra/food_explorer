import { createContext, useContext, useState, useEffect, ReactElement } from "react";
import api from "../services/api";

interface IChildren {
  children: ReactElement;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IMeal {
  id: number;
  name: string;
  desc: string;
  price: number;
  type: string; 
  ingredients: Array<string>;
  img: File
}

interface ILogin {
  name: string;
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser | object;
  role: string;
  signIn: (loginData: ILogin) => Promise<void>;
  signUp: (loginData: ILogin) => Promise<void>;
  signOut: () => Promise<void>;
  newMeal: (mealData: IMeal) => Promise<void>;
  updateMeal: (mealData: IMeal) => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

function AuthProvider({ children }: IChildren) {
  const [data, setData] = useState<IUser | object>({});
  const [role, setRole] = useState<string>("");

  async function signIn({ name, email, password }: ILogin) {
    try {
      await api.post("/user", { 
        name, 
        email, 
        password
      }, {
        withCredentials: true
      });
    } catch(error) {
    }
  }

  async function getRole() {
    try {
      const response = await api.get("/sessions/role", { 
        withCredentials: true 
      });

      setRole(response.data.role);
    } catch (error) {
    }
  }

  async function signUp({ email, password }: ILogin) {
    try {
      const response = await api.post("/sessions", { 
        email, 
        password 
      }, {
        withCredentials: true
      });
      
      const { user } = await response.data;
      
      delete user.role;
      
      localStorage.setItem("@food-explorer:user", JSON.stringify(user));

      setData({ user });
      await getRole();
    } catch(error) {
    }
  }

  async function signOut() {
    try {
      localStorage.removeItem("@food-explorer:user");
  
      await api.delete("/sessions/logout");
   
      setRole("");
      setData({});
    } catch(error) {
    }
  }

  async function newMeal({ name, desc, price, type, ingredients, img }: IMeal) {
    try {
      const formData = new FormData();
      const jsonData = {
        name: name,
        desc: desc,
        price: price,
        type: type,
        ingredients: ingredients,
      }
  
      formData.append('data', JSON.stringify(jsonData));
      formData.append('img', img);
  
      await api.post("/meals/create", formData, {
        withCredentials: true
      });
    } catch (error) {
    }
  }

  async function updateMeal({ name, desc, price, type, ingredients, img, id }: IMeal) {
    try {
      const formData = new FormData();
      const jsonData = {
        name: name || null,
        desc: desc || null,
        price: price || null,
        type: type || null,
        ingredients: ingredients || null
      }

      formData.append('data', JSON.stringify(jsonData));
      formData.append('img', img);

      await api.patch(`/meals/update/${id}`, formData, {
        withCredentials: true
      });
    } catch (error) {
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if(user) {
      setData({ user: JSON.parse(user) });
      getRole();
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user: data, 
      role, 
      signUp, 
      signIn, 
      signOut, 
      newMeal, 
      updateMeal 
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth }