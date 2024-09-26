import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../style/deviceBreakpoints";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  max-width: 2000px;

  padding: 0 100px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLOR.DARK_400};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 73px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > img {
    height: 50px;
    width: 50px;
  }

  > h1 {
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h1 {
      font-size: 37px;
      white-space: nowrap;
    }

    > img {
      height: 43px;
      width: 43px;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 64px;
  border-radius: 16px;

  width: 476px;

  background-color: ${({ theme }) => theme.COLOR.DARK_700};

  > h2 {
    width: 100%;

    text-align: center;

    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background-color: transparent;

    max-width: 100vw;
    padding: 0 46px 46px;

    h2 {
      display: none;
    }
  }
`;

export const ButtonText = styled.a`
  align-self: center;

  color: ${({ theme }) => theme.COLOR.LIGHT_100};

  transition: .4s;

  &:hover {
    cursor: pointer;

    text-decoration: underline;
  }
`;