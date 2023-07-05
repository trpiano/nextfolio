import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 10rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 950px) {
    height: 100%;

    padding: 15rem 2rem 0 2rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    width: fit-content;

    justify-content: center;
    flex-direction: column;

    gap: 6rem;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  width: 100%;

  h1 {
    color: var(--white);

    font-size: 3,4375rem;
    font-weight: 700;

    margin: 1.5rem 0;
  }

  p {
    color: var(--white);

    font-size: 1,875rem;
    font-weight: 300;

    margin: 1.5rem 0;
  }

  @media screen and (max-width: 500px) {
    h1{
      font-size: 3rem;
    }

    p{
      font-size: 1.75rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;
`;

export const PortfolioButton = styled.button`
  height: 54px;

  background: transparent;

  border-radius: 1.5rem;
  border: 1px solid var(--blue-500);

  font-size: 1rem;
  font-weight: 700;

  padding: 1rem;

  transition: all 0.2s;

  color: var(--blue-500);

  :hover {
    background: var(--blue-500);
    color: var(--white);
  }
`;

export const VideoButton = styled.button`
  height: 54px;

  background: var(--blue-500);

  border-radius: 1.5rem;
  border: none;

  display: flex;
  align-items: center;

  padding: 1rem 2rem;

  svg {
    height: 1rem;
    width: 1rem;
  }

  transition: 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid var(--blue-500);

  background: transparent;

  cursor: pointer;

  padding: 0.75rem;

  svg {
    height: 20px;
    width: 20px;

    color: var(--blue-500);
  }

  transition: 0.2s;

  :hover {
    svg {
      color: var(--white);
    }

    background: var(--blue-500);
  }
`;
