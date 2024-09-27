import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../style/deviceBreakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  h2 {
    color: ${({ theme }) => theme.COLOR.LIGHT_300};
    margin-bottom: 24px;
  }

  .slider-wrapper {
    position: relative;
    width: 100%;
  }

  #left {
    position: absolute;
    top: 50%;
    left: 28px;
    transform: translateY(-50%);
    z-index: 2;

    padding: 16px;

    &:hover {
      cursor: pointer;

      transition: .4s;
    }
  }

  #right {
    position: absolute;
    top: 50%;
    right: 28px;
    transform: translateY(-50%);
    z-index: 3;

    padding: 16px;

    &:hover {
      cursor: pointer;
    }
  }

  .shadow-left {
    position: absolute;
    height: 100%;
    width: 20%;

    pointer-events: none;

    z-index: 1;

    left: 0;

    background: linear-gradient(to right, rgba(0,10,15,1), transparent);
  }

  .shadow-right {
    position: absolute;
    height: 100%;
    width: 20%;

    pointer-events: none;

    z-index: 1;

    right: 0;

    background: linear-gradient(to left, rgba(0,10,15,1), transparent);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .shadow-right,
    .shadow-left,
    #right,
    #left {
      display: none;
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      line-height: 160%;
      font-weight: 500;
      letter-spacing: 0%;
      text-decoration: none;
    }

    margin-left: 24px;
  }
`;

export const SliderSec = styled.div`
  display: flex;
  gap: 28px;

  width: 100%;

  overflow-x: auto; 
  overflow-y: hidden; 
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 16px;
  }
`;

export const SlideCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  width: 304px;
  height: 462px;

  overflow: hidden;

  padding: 16px;
  border-radius: 8px;

  position: relative;

  background-color: ${({ theme }) => theme.COLOR.DARK_200};
  
  img.fav,
  img.favFill,
  img.pencil {
    height: 24px;
    width: 24px;

    position: absolute;
    right: 16px;
    top: 16px;

    transition: .4s;

    cursor: pointer;
  }

  .meal-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }

  img.meal {
    width: 176px;
    height: 176px;

    object-fit: cover;
    object-position: center;

    border-radius: 50%;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    cursor: pointer;

    text-align: center;

    color: ${({ theme }) => theme.COLOR.LIGHT_300};
  }

  span.desc {
    text-align: center;
    max-width: 210px;

    height: 44px;

    color: ${({ theme }) => theme.COLOR.LIGHT_400};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.price {
    color: ${({ theme }) => theme.COLOR.CAKE_200};
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: grid;
    place-items: center;
    width: 210px;
    height: 292px;

    gap: 12px;
    
    img.meal {
      width: 88px;
      height: 88px;
    }

    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      letter-spacing: 0%;
      text-decoration: none;
    }

    span.desc {
      display: none;
    }

    span.price {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      line-height: 100%;
      font-weight: 400;
      letter-spacing: 0%;
      text-decoration: none;
    }

    .buttons {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }
`;