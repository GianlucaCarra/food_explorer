import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  width: fit-content;

  button {
    background-color: transparent;

    transition: .4s;

    &:hover {
      cursor: pointer;

      filter: brightness(.8);

      transition: .4s;
    }
  }

  span {
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }
`
