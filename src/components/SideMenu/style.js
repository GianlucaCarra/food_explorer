import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakpoints";

export const Header = styled.div`
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 56px 28px 24px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLOR.DARK_600};

    display: flex;
    align-items: center;
    gap: 16px;

    button {
      display: grid;
      place-items: center;
      background-color: transparent;
    }
    
    span {
      font-family: "Roboto", sans-serif;
      font-size: 21px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLOR.LIGHT_100};
    }
  }
`

export const Container = styled.menu`
  display: none;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    grid-area: header;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLOR.DARK_400};

    max-width: 100vw;

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
      transition: transform 0.3s ease;
      overflow: hidden;
      max-height: 100vh;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  padding: 36px 28px 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    align-items: center;
    gap: 16px;

    width: 100%;
    height: 100%;

    .button-mobile {
      display: grid;
      place-items: center;
    }

    .button-w,
    #exit {
      display: none;
    }
  }
`

export const SearchBar = styled.div`
  width: 100%;
  max-width: 580px;

  display: none;
  flex-direction: column;

  position: relative;

  .search {
    display: flex;
    align-items: center;

    width: 100%;

    position: relative;

    > img {
      position: absolute;

      height: 24px;
      width: 24px;

      margin: 10px;
    }

    > input {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 12px 16px 12px 44px;
      border-radius: 5px;
      width: 100%;

      color: ${({ theme }) => theme.COLOR.LIGHT_200};

      background-color: ${({ theme }) => theme.COLOR.DARK_900};
    }

    .withResults {
      border-radius: 5px 5px 0 0; 
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
  }
`;

export const Results = styled.div`
  width: 100%;
  max-height: 400px;
  height: max-content;

  overflow: scroll;
  position: absolute;
  top: 100%;

  border-radius: 0 0 5px 5px;

  background-color: ${({ theme }) => theme.COLOR.DARK_900};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  button {
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.COLOR.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 200;
    text-align: left;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLOR.DARK_1000};
  }
`;