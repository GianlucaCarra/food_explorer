import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Container, Content, Logo, SearchBar, Results } from "./style"; 
import { useAuth } from "../../hooks/auth";
import debounce from "lodash.debounce";
import api from "../../services/api";
import USER_ROLE from "../../utils/roles";
import ResultItem from "../ResultItem";
import Button from "../Button";
import logo from "../../assets/Logo.svg";
import search from "../../assets/Search.svg";
import receipt from "../../assets/Receipt.svg";
import signOutL from "../../assets/SignOut.svg";
import Menu from "../../assets/Menu";

interface IHeaderProps {
  onOpenMenu: () => void;
}

export function Header({ onOpenMenu }: IHeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { signOut, role } = useAuth();
  const orders = 0;
  const navigate = useNavigate();

  const debouncedSearch = useCallback(
    debounce(async (term) => {
      if (term.length > 0) {
        try {
          const response = await api.get(`/meals/search?query=${term}`, {
            withCredentials: true,
          });
          setSearchResults(response.data);
        } catch (error) {
        }
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return(
    <Container>
      <Content>
        <button className="menu-mobile" onClick={onOpenMenu}>
          <Menu />
        </button>

        {
          role === USER_ROLE.ADMIN ?
          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo of Food Explorer" />

            <div className="role">
              <h2 className="roboto-500-bold">food explorer</h2>
              <span className="roboto-100-regular">admin</span>
            </div>
          </Logo> :

          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo of Food Explorer" />

            <h2 className="roboto-500-bold">food explorer</h2>
          </Logo>
        }

        <SearchBar>
          <div className="search">
            <img src={search} alt="Magnify glass" />

            <input 
              id="search" 
              className={searchResults.length > 0 ? "withResults roboto-300-regular" : "roboto-300-regular"}
              type="text" 
              placeholder="Search for recipes or ingredients"
              autoComplete="off"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <Results>
            {
              searchResults.map(({ imageUrl, name, desc, id }) => {
                return(
                  <ResultItem key={id} img={imageUrl} name={name} desc={desc} id={id}/>
                );
              })
            }
          </Results>
        </SearchBar>

        {
          role === USER_ROLE.ADMIN ?
          <div className="button-w">
            <Button onClick={() => navigate("/new-meal")} text={"New meal"}/>
          </div> :

          <div className="button-w">
            <Button 
              onClick={() => navigate("/")} 
              filepath={receipt} 
              text={"Orders (" + orders + ")"}/>
          </div>
        }

        {
          role === USER_ROLE.USER &&
          <div className="button-mobile">
            <img src={receipt} alt="" />
          </div>
        }
        <img src={signOutL} alt="Exit" id="exit" onClick={signOut}/>
      </Content>
    </Container>
  );
}