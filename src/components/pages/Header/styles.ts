import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  position: fixed;

  padding: 2rem 0;

  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px #fff;

  background: var(--background);

  a {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);

    text-decoration: none;

    user-select: none;

    span {
      color: var(--blue-500);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  color: var(--white);

  user-select: none;

  display: flex;
  align-items: center;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  svg {
    margin-right: 0.875rem;
  }

  transition: all 0.2s;

  :hover {
    background: var(--blue-500);
    border-radius: 0.5rem;
  }
`;

export const ContactButton = styled.button`
  background: var(--blue-500);
  border: none;
  border-radius: 0.5rem;

  user-select: none;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  color: var(--white);

  display: flex;
  align-items: center;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  svg {
    margin-right: 0.875rem;
  }

  transition: all 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;