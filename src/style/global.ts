import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLOR.DARK_400};
  }

  *:focus {
    outline: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  .poppins-100-medium {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .poppins-200-medium {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 160%;
    font-weight: 500;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .poppins-300-bold {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 140%;
    font-weight: 700;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .poppins-300-regular {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 140%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .poppins-400-medium {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 140%;
    font-weight: 500;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .poppins-500-medium {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    line-height: 140%;
    font-weight: 500;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-100-regular {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 160%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-200-regular {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 160%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-200-bold {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 160%;
    font-weight: 700;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-300-spaced {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 160%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-300-regular {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-400-bold {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 160%;
    font-weight: 700;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-500-bold {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    line-height: auto;
    font-weight: 700;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-600-regular {
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    line-height: 160%;
    font-weight: 400;
    letter-spacing: 0%;
    text-decoration: none;
  }

  .roboto-700-bold {
    font-family: "Roboto", sans-serif;
    font-size: 42px;
    line-height: auto;
    font-weight: 700;
    letter-spacing: 0%;
    text-decoration: none;
  }
`;