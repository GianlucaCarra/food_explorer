import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type=number] {
      -moz-appearance: textfield;
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLOR.LIGHT_400};
`;

export const InputField = styled.input`
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
`;
