import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: calc(100vh - 105px);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 450px;
    height: 600px;
  }
`;

export const BoxContainer = styled.div`
  h1 {
    color: var(--white);

    font-size: 55px;
    font-weight: 700;

    margin: 1.5rem 0;
  }

  p {
    color: var(--white);

    font-size: 30px;
    font-weight: 300;

    margin: 1.5rem 0;
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
  border: 1px solid var(--red-500);

  color: var(--red-500);

  font-size: 1rem;
  font-weight: 700;

  padding: 1rem;

  transition: 0.2s;

  :hover {
    background: var(--red-500);
    color: var(--black);
  }
`;

export const VideoButton = styled.button`
  height: 54px;

  background: var(--red-500);

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
    background: var(--red-500-filter);
  }
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SocialButton = styled.button`
  border-radius: 50%;
  border: 1px solid var(--red-500);

  background: transparent;

  padding: 0.75rem;

  svg {
    height: 20px;
    width: 20px;

    color: var(--red-500);
  }

  transition: 0.2s;

  :hover {
    svg {
      color: var(--black);
    }

    background: var(--red-500);
  }
`;