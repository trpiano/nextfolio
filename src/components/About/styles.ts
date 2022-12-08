import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HeaderContainer = styled.div`
  h2 {
    color: var(--white);

    font-weight: bold;
    font-size: 74px;

    padding: 1rem 0 0 0;
  }

  span {
    color: var(--red-450);
    letter-spacing: 1px;
    line-height: 14px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
`;

export const CardsContainer = styled.div`
    width: 100%;

    padding: 2rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
`