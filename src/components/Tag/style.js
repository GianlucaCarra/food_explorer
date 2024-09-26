import styled from "styled-components";

export const Container = styled.span`
  text-align: center;

  width: fit-content;

  padding: 4px 8px;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLOR.LIGHT_100};
  background-color: ${({ theme }) => theme.COLOR.DARK_1000};
`;