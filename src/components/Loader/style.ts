import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    height: 60px;
    width: 60px;

    border: 2px solid ${({ theme }) => theme.COLOR.LIGHT_600};
    border-top: 2px solid ${({ theme }) => theme.COLOR.LIGHT_200};
    border-radius: 50%;

    animation: spin .6s linear infinite;
    transform-origin: center;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
