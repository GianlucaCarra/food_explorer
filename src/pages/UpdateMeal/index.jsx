import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Content, Back, Section, Select, List } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";
import { Loader } from "../../components/Loader";
import { SideMenu } from "../../components/SideMenu";

import caretLeft from "../../assets/CaretLeft.svg";
import upload from "../../assets/Upload.svg";

export function UpdateMeal() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [img, setImg] = useState(null);
  const [isModified, setIsModified] = useState(false);
  const [loadig, setLoading] = useState(true);
  const [loadingPatch, setLoadingPatch] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateMeal } = useAuth();

  const handleFieldChange = () => {
    setIsModified(true); 
  }

  useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
      const response = await api.get(`/meals/${id}`, {
        withCredentials: true
      });
      
      setName(response.data.name);
      setType(response.data.type);
      setDesc(response.data.desc);
      setPrice(response.data.price);

      const ingredientNames = response.data.ingredients.map(ingredient => ingredient.name);
      setIngredients(ingredientNames);
    }
    
    fetchData()
    .finally(() => {
      setLoading(false);
    });
  }, []);
  
  function handleAddIngredient(e) {
    e.preventDefault();

    if(newIngredient === "") {
      return;
    }

    if(ingredients.includes(newIngredient)) {
      return;
    }

    setIngredients(prevState => [...prevState, newIngredient]);
    setIsModified(true);
    setNewIngredient("");
  }

  function handleRemoveIngredient(event, deleted) {
    event.preventDefault();

    const deletedList = () => ingredients.filter(ingredient => ingredient != deleted);
    setIngredients(deletedList());
    setIsModified(true);
  }  

  const handlePatch = () => {
    setLoadingPatch(true);

    updateMeal({ name, desc, price, type, ingredients, img, id })
      .then(() => {
        setLoadingPatch(false);
        setIsModified(false);
      });
  }
  
  async function handleDelete() {
    try {
      await api.delete(`/meals/delete/${id}`, {
        withCredentials: true
      });
    } catch(error) {
      alert(error.response.data.message);
    } finally {
      navigate(-1);
    }
  }
  
  const handleImg = (e) => {
    const file = e.target.files[0];
    
    setImg(file);
    setIsModified(true); 
  }

  if(loadig) {
    return(
      <Loader />
    );
  }

  return(
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <Back onClick={() => navigate("/")} >
          <img src={caretLeft} />

          <span className="poppins-300-bold">back</span>
        </Back>

        <h1 className="poppins-400-medium">Update meal</h1>

        <Section>
          <div className="line">
            <div className="upload">
              <span className="roboto-300-regular">Meal image</span>

              <label htmlFor="image">
                { !img ? <div id="textUp">
                    <img src={upload} alt="" />

                    <span className="poppins-100-medium">Select image</span>
                  </div> :

                  <div id="textUp">
                    <span className="poppins-100-medium">{img.name}</span>
                  </div>
                }

                <input 
                  id='image' 
                  accept="image/*" 
                  type="file" 
                  onChange={handleImg}
                />
              </label>
            </div>

            <div className="wrapper">
              <label htmlFor="name" className="roboto-300-regular">
                Name
              </label>

              <input 
                onChange={e => { 
                  setName(e.target.value); 
                  handleFieldChange();
                }} 
                value={name}
                placeholder="name" 
                id="name" 
                type="text" 
              />
            </div>

            <div className="selection">
              <label htmlFor="meal-opt" className="roboto-300-regular" >
                Category
              </label>

              <Select 
                value={type} 
                onChange={e => { 
                  setType(e.target.value); 
                  handleFieldChange();
                }}  
                id="meal-opt" 
                className="roboto-200-regular"
              >
                <option value="meal" className="roboto-200-regular">Meal</option>

                <option value="dessert" className="roboto-200-regular">Dessert</option>
                
                <option value="drink" className="roboto-200-regular">Drink</option>
              </Select>
            </div>
          </div>

          <div className="line">
            <div className="ingredients">
              <span className="poppins-100-medium ing">Ingredients</span>

              <List>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem 
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(event, ingredient)}
                    />
                  ))
                }
                <IngredientItem 
                  $isnew="true"
                  placeholder="New Item"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </List>
            </div>

            <div id="price">
              <Input 
                label="Price" 
                type="number"
                id="price"
                step="0.01" 
                value={price}
                placeholder="$ 00.00"
                onChange={e => { 
                  setPrice(e.target.value); 
                  handleFieldChange();
                }} 
              />
            </div>
          </div>

          <div className="line">
            <div className="textarea-wrapper">
              <label htmlFor="desc" className="roboto-300-regular">Description</label>

              <textarea 
                placeholder="Briefly talk about the meal, its ingredients, and composition."
                name="desc" 
                id="desc" 
                value={desc}
                onChange={e => { 
                  setDesc(e.target.value); 
                  handleFieldChange();
                }} 
              />
            </div>
          </div>

          <div className="line">
            <div className="buttons">
              <button 
                onClick={handleDelete} 
                className="poppins-100-medium delete-meal"
              >
                Delete meal
              </button>

              <Button 
                disabled={!isModified}
                onClick={handlePatch} 
                type="submit" 
                text={loadingPatch ? "Loading..." : "Update meal"} 
              />
            </div>
          </div>
        </Section>
      </Content>
      
      <Footer />
    </Container>
  );
}