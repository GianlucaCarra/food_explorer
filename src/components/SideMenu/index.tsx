import { useNavigate } from "react-router-dom";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Container, Content, SearchBar, Results, Header, Actions } from "./style"; 
import { useAuth } from "../../hooks/auth";
import USER_ROLE from "../../utils/roles";
import api from "../../services/api";
import debounce from "lodash.debounce";
import ResultItem, { IResultItemProps } from "../ResultItem/index";
import Footer from "../Footer/index";
import search from "../../assets/Search.svg";
import Close from "../../assets/Close";

interface ISideMenuProps {
  menuIsOpen: boolean;
  onCloseMenu: () => void;
}

function SideMenu({ menuIsOpen, onCloseMenu }: ISideMenuProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IResultItemProps[]>([]);
  const { signOut, role } = useAuth();
  const navigate = useNavigate();

  const debouncedSearch = useCallback(
    debounce(async (term) => {
      if (term.length > 0) {
        try {
          const response = await api.get(`/meals/search?query=${term}`, {
            withCredentials: true
          });
          setSearchResults(response.data);
        } catch (error) {
          setSearchResults([]);
          throw error
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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <button onClick={onCloseMenu}>
          <Close />
        </button>

        <span>Menu</span>
      </Header>

      <Content>
        <SearchBar>
          <div className="search">
            <img src={search} alt="Magnify glass" />

            <input 
              id="search-mobile" 
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
              searchResults.map(({ imageUrl, name, desc, id }: IResultItemProps) => {
                return(
                  <ResultItem key={id} imageUrl={imageUrl} name={name} desc={desc} id={id}/>
                );
              })
            }
          </Results>
        </SearchBar>

        <Actions>
        {
          role === USER_ROLE.ADMIN ?
          <div className="list">
            <button onClick={() => navigate("/new-meal")}>
              New Meal
            </button>

            <button onClick={signOut}>
              Exit
            </button>
          </div> :

          <div className="list">
            <button onClick={signOut}>
              Exit
            </button>
          </div>
        }
        </Actions>
      </Content>

      <Footer />
    </Container>
  );
}

export default SideMenu;