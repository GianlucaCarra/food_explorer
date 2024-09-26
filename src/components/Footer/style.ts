import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../style/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: footer;

  /* position: relative;
  bottom: 0;
  z-index: 3; */

  width: 100%;
  height: 77px;

  padding: 24px;
  margin-top: 54px;

  background-color: ${({ theme }) => theme.COLOR.DARK_600};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1122px;

  span {
    color: ${({ theme }) => theme.COLOR.LIGHT_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    span {
      font-size: 12px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${({ theme }) => theme.COLOR.LIGHT_700};

  img {
    height: 30px;
    width: 30px;
  }

  h3 {
    white-space: nowrap;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 6px;

    img {
      height: 22px;
      width: 22px;
    }

    h3 {
      font-size: 15px;
    }
  }
`;