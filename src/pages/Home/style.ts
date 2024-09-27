import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../style/deviceBreakpoints";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1122px;

  margin: 0 auto;
  grid-area: content;

  .sliders {
    display: flex;
    flex-direction: column;
    gap: 46px;

    width: 100%;

    margin-top: 64px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    max-width: 100vw;

    .sliders {
      gap: 24px;
    }
  }
`;

export const Banner = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;

  padding: 100px;
  margin-top: 190px;
  border-radius: 8px;

  width: 100%;

  color: ${({ theme }) => theme.COLOR.LIGHT_300};
  background: linear-gradient(to bottom left, #091E26, #00131C);

  img {
    position: absolute;
    bottom: -14px;
    left: -90px;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    position: relative;

    padding: 30px 20px;
    margin: 44px auto;
    border-radius: 8px;
    z-index: -2;
    width: 90%;

    img {
      position: absolute;
      height: 149px;
      width: 191px;
      object-fit: cover;
      object-position: bottom right;
      bottom: -5px;
      left: -15px;

      z-index: -1;
    }
    
    .text {
      display: flex;
      flex-direction: column;
      gap: 8px;

      max-width: 200px;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
      }

      span {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;