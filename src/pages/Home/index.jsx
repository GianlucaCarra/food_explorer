import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, Banner } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Loader } from "../../components/Loader";
import { SideMenu } from "../../components/SideMenu";

import foodsBanner from "../../assets/FoodsBanner.png";

export function Home() {
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const index = await api.get("/meals/index", {
          withCredentials: true
        });
        
        const filteredMeals = index.data.filter(item => item.type === "meal");
        const filteredDesserts = index.data.filter(item => item.type === "dessert");
        const filteredDrinks = index.data.filter(item => item.type === "drink");

        setMeals(filteredMeals);
        setDesserts(filteredDesserts);
        setDrinks(filteredDrinks);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(error.message);
        }
  
        throw error;
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if(loading) {
    return(
      <Loader />
    )
  }

  return(
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <Banner>
          <img src={foodsBanner} alt="" />

          <div className="text">
            <h1 className="poppins-500-medium" >Unmatched tastes</h1>

            <span className="roboto-300-regular" >
              Feel the care of preparation with selected ingredients
            </span>
          </div>
        </Banner>

        <section className="sliders">
          <Slider title="Meals" data={meals} />

          <Slider title="Desserts" data={desserts} />

          <Slider title="Drinks" data={drinks} />
        </section>
      </Content>
      
      <Footer />
    </Container>
  );
}