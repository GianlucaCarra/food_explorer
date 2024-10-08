import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMeal, Ingredient, useAuth } from "../../hooks/auth";
import { Container, Content, Back, Info, Tags } from "./style"
import  USER_ROLE  from "../../utils/roles";
import  api  from "../../services/api";
import  Header  from "../../components/Header";
import  Footer  from "../../components/Footer";
import  Button  from "../../components/Button";
import  Tag  from "../../components/Tag";
import  ButtonQuant  from "../../components/ButtonQuant";
import  Loader  from "../../components/Loader";
import  SideMenu  from "../../components/SideMenu";
import caretLeft from "../../assets/CaretLeft.svg";
import receipt from "../../assets/Receipt.svg";

function Meal() {
  const [data, setData] = useState<IMeal>();
  const [loading, setLoading] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const { role } = useAuth();
  const { id } = useParams();
  
  const handleFetch = async () => {
    try {
      const response = await api.get(`/meals/${id}`, { 
        withCredentials: true 
      });
      const data: IMeal = response.data;

      setData(data);
    } catch(error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }

      throw error;
    }
  }

  useEffect(() => {
    setLoading(true);

    handleFetch()
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return(
      <Loader />
    );
  }
  
  if (data) return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <Back onClick={() => navigate("/")} >
          <img src={caretLeft} />

          <span className="poppins-300-bold" >back</span>
        </Back>

        <Info>
          <img src={data.imageURL} alt="Meal photo" />

          <div className="meal-infos">
            <div className="text">
              <h1 className="poppins-500-medium" >{data.name}</h1>

              <h2 className="poppins-300-regular" >{data.desc}</h2>
            </div>

            <Tags>
              {
                data.ingredients ? data.ingredients.map((ingredient: Ingredient) => {
                  return(
                    <Tag key={ingredient.id} text={ingredient.name} />
                  );
                }) : undefined
              }
            </Tags>

            {
              role === USER_ROLE.ADMIN ?
              <div className="quant-add-admin">
                <Button 
                  text={`Edit meal`} 
                  onClick={() => navigate(`/update-meal/${id}`)}
                />
              </div> :

              <div className="quant-add">
                <ButtonQuant />
                
                <Button className="mobile" filepath={receipt} text={`add ∙ $ ${data.price}`} />
              </div>
            }
          </div>
        </Info>
      </Content>
      
      <Footer />
    </Container>
  );
}

export default Meal;