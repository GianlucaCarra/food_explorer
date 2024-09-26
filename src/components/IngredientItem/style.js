import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLOR.LIGHT_500};
  color: ${({ theme, $isnew }) => $isnew ? theme.COLOR.LIGHT_500 : theme.COLOR.LIGHT_100};
  
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLOR.LIGHT_500}` : "1px dashed transparent"};
  border-radius: 8px;
  padding: 4px 16px;

  > input {
    background-color: transparent;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLOR.LIGHT_500 : theme.COLOR.LIGHT_100};
    width: 60px;
  }

  > button {
    background-color: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  svg {
    height: 8px;
    width: 8px
  }
`
