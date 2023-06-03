import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 4rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  text-align: center;

  h2 {
    color: var(--blue-500);
    letter-spacing: 0.5px;
    line-height: 14px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    font-weight: bold;
    font-size: 3.5rem;

    padding: 1rem 0 0 0;
  }
`;

export const AnimationContainer = styled.div`
  min-width: 30%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  padding: 0 6rem;

  width: 100%;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const TextContainer = styled.div`
  width: 50%;

  color: #fff;

  text-align: justify;
  font-size: 1.2rem;

  padding: 4rem 0;

  font-family: 'Roboto', sans-serif;
`
