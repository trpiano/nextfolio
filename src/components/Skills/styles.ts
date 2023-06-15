import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  text-align: center;

  h2 {
    color: var(--blue-500);
    letter-spacing: 0.5px;
    line-height: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    font-weight: bold;
    font-size: 3.5rem;
  }
`;

export const MainContent = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 4rem;
`;

export const ContentContainer = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 1rem;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap:1rem;

  width: 90%;
  max-width: 440px;
  color: #fff;
  text-align: center;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  span{
    font-size: 1.65rem;
    font-weight: 700;
    font-family: 'Roboto' ,sans-serif;
  }

  hr{
    width: 100%;
  }

  transition: all 0.3s;

  :hover{
    transform: scale(1.05);
  }
`

export const CardContent = styled.a`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`