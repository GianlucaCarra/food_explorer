import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../style/deviceBreakpoints";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 32px;
  border-radius: 5px;

  width: 100%;
  height: fit-content;
  white-space: nowrap;

  color: ${({ theme }) => theme.COLOR.LIGHT_100};
  background-color: ${({ theme }) => theme.COLOR.TOMATO_100};

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

  .loading {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  &.disabled {
    background-color: ${({ theme }) => theme.COLOR.TOMATO_400};
    cursor: not-allowed;

    &:hover {
      cursor: not-allowed;
      filter: none;
      transition: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 12px 16px;

    > img {
      width: 20px;
      height: 20px;
    }
  }
`
