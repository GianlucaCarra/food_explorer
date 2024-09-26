import styled from "styled-components";
import CaretDown from "../../assets/CaretDown.svg";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakpoints";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
  overflow: scroll;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  max-width: 1122px;

  grid-area: content;

  margin: 32px auto 0;

  > h1 {
    color: ${({ theme }) => theme.COLOR.LIGHT_300};

    margin: 24px 0 32px 10px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 10px 32px 0;
    margin-top: 32px;
    width: 100vw;
    max-width: 100vw;

    > h1 {
      margin: 24px 0;
    }
  }
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  margin: 24px 0 0 10px;

  color: ${({ theme }) => theme.COLOR.LIGHT_300};

  transition: .4s;

  &:hover {
    cursor: pointer;

    filter: brightness(.8);

    transition: .4s;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0;
    gap: 8px;

    img {
      height: 16px;
      width: 16px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Section = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;

  width: 100%;

  .invalid {
    outline: 1px solid ${({ theme }) => theme.COLOR.TOMATO_200};
  }

  .line {
    display: flex;
    gap: 32px;
    justify-content: end;
  }

  label {
    margin-bottom: 8px;
  }

  .wrapper {
    display: flex;
    flex-direction: column; 
    gap: 8px;

    width: 100%;
    max-width: 530px;

    color: ${({ theme }) => theme.COLOR.LIGHT_400};

    input {
      width: 100%;

      padding: 16px 14px;
      border-radius: 8px;

      color: ${({ theme }) => theme.COLOR.LIGHT_200};

      background-color: ${({ theme }) => theme.COLOR.DARK_900};

      &::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 100%;
        font-weight: 400;
        letter-spacing: 0%;
        text-decoration: none;

        color: ${({ theme }) => theme.COLOR.LIGHT_500};
      }

      &:focus {
        outline: 1px solid ${({ theme }) => theme.COLOR.LIGHT_100};
      }

      &:invalid {
        outline: 1px solid ${({ theme }) => theme.COLOR.TOMATO_200};
      }
    }
  }

  .selection {
    display: flex;
    flex-direction: column;

    width: 364px;

    color: ${({ theme }) => theme.COLOR.LIGHT_400};

    label {
      margin-bottom: 16px;
    }
  }

  .upload {
    display: flex;
    flex-direction: column;

    > span {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.COLOR.LIGHT_400};
    }

    #textUp {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLOR.LIGHT_100};

      white-space: nowrap;

      > img {
        width: 24px;
        height: 24px;
      }
    }

    label {
      border-radius: 8px;
      padding: 12px 32px;

      cursor: pointer;

      color: ${({ theme }) => theme.COLOR.LIGHT_200};

      background-color: ${({ theme }) => theme.COLOR.DARK_900};

      > input {
        display: none;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 32px;
    align-self: end;
    width: 400px;

    white-space: normal;

    .delete-meal {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      height: fit-content;

      padding: 12px 32px;
      border-radius: 5px;

      width: 100%;

      color: ${({ theme }) => theme.COLOR.LIGHT_100};
      background-color: ${({ theme }) => theme.COLOR.DARK_800};

      transition: .4s;

      img {
        height: 32px;
        width: 32px;
      }

      &:hover {
        cursor: pointer;

        filter: brightness(.8);

        transition: .4s;
      }
    }
  }

  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
      color: ${({ theme }) => theme.COLOR.LIGHT_400};
    }

    textarea {
      width: 100%;  
      height: 172px;

      margin-top: 8px;

      resize: none;

      padding: 16px 14px;
      border-radius: 8px;

      color: ${({ theme }) => theme.COLOR.LIGHT_200};

      background-color: ${({ theme }) => theme.COLOR.DARK_900};

      &::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 100%;
        font-weight: 400;
        letter-spacing: 0%;
        text-decoration: none;

        color: ${({ theme }) => theme.COLOR.LIGHT_500};
      }

      &:focus {
        outline: 1px solid ${({ theme }) => theme.COLOR.LIGHT_100};
      }

      &:invalid {
        outline: 1px solid ${({ theme }) => theme.COLOR.TOMATO_200};
      }
    }
  }

  .ingredients {
    display: flex;
    flex-direction: column;
    width: 80%;

    overflow: hidden;

    > span {
      color: ${({ theme }) => theme.COLOR.LIGHT_400};
      margin-bottom: 8px;
    }
  }

  #price {
    width: 250px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    gap: 24px;

    .line {
      flex-direction: column;
      gap: 24px;
    }

    .upload,
    #name,
    .ingredients,
    #price,
    .textarea-wrapper,
    .selection,
    .buttons {
      max-width: 100%;
      width: 100%;
    }

    .buttons {
      flex-wrap: wrap;
      gap: 16px;
    }

    .buttons > button {
      white-space: nowrap;
      min-width: 130px;
      flex: 0 0 auto;
    }
  }
`;

export const Select = styled.select`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 16px;
  border-radius: 8px;

  height: 48px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  color: ${({ theme }) => theme.COLOR.LIGHT_400};
  background-color: ${({ theme }) => theme.COLOR.DARK_900};
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
`;

export const List = styled.section`
  display: flex;
  gap: 16px;

  width: 100%;
  overflow: scroll;

  padding: 8px;
  border-radius: 8px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLOR.DARK_900};

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0; /* Esconde a barra de rolagem vertical */
    height: 0; /* Esconde a barra de rolagem horizontal */
  }
`;