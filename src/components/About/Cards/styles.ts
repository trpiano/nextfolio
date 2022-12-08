import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  background: linear-gradient(145deg, #1e2024, #23272b);
  width: 100%;
  height: 400px;
  transition: 0.5s padding-bottom;

  z-index: 1;
  border-radius: 10px;

  cursor: pointer;

  .animatedImage {
    display: none;
  }

  :hover {
    padding-bottom: 4rem;

    .animatedImage {
      display: inherit;
    }

    .staticImage {
      display: none;
    }
  }
`;

export const MainContent = styled.div`
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    max-width: 60px;
  }

  h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: var(--white-text);
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    color: var(--white-text);
  }
`;
