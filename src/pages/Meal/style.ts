import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../style/deviceBreakpoints";

export const Container = styled.main`
  width: 100%;
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
  max-width: 1122px;
  width: 100%;

  grid-area: content;

  margin: 32px auto 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 316px;
  }
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  margin: 0 0 0 10px;

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

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  gap: 24px;

  width: 100%;

  margin-top: 42px;

  > img {
    align-self: flex-start;
    width: 390px;
    height: 390px;

    border-radius: 50%;

    object-fit: cover;
    object-position: center;
  }

  .meal-infos {
    max-width: 670px;
    width: 100%;

    .text {
      display: flex;
      flex-direction: column;
      gap: 24px;

      color: ${({ theme }) => theme.COLOR.LIGHT_300};
    }
  }

  .quant-add {
    display: flex;
    gap: 34px;

    max-width: 50%;
  }

  .quant-add-admin {
    display: flex;
    gap: 34px;

    max-width: 25%;
  }

  .mobile {
      > img {
        display: none;
      }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-top: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      align-self: center;
      height: 264px;
      width: 264px;
    }

    .text {
      h1, h2 {
        text-align: center;
      }

      h1 {
        font-size: 27px;
      }

      h2 {
        font-size: 16px;
        font-weight: 400;
      }
    }

    .quant-add,
    .quant-add-admin {
      max-width: 100%;
      width: 100%;

      gap: 16px;

      align-items: center;
    }

    .mobile {
      > img {
        display: block;
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  margin: 24px 0 48px 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 24px 0;
    justify-content: center;
    gap: 24px;
  }
`;