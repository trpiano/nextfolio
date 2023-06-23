import styled from "styled-components";

export const Container = styled.header`
  max-height: 100px;
  width: 100%;

  position: fixed;

  padding: 2rem 0;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px #fff;

  background: var(--background);

  p {
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

export const HeaderButton = styled.a`
  background: transparent;
  border: none;
  border-radius: 0.5rem;

  text-decoration: none;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  color: var(--white);

  user-select: none;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  svg, span{
    color: var(--blue-500);
  }

  svg {
    margin-right: 0.875rem;
  }

  transition: all 0.2s;

  :hover {
    background: var(--blue-500);
    border-radius: 0.5rem;

    svg, span{
      color: var(--white);
    }
  }
`;

export const ContactButton = styled.a`
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

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  svg, span{
    color: var(--white);
  }

  svg {
    margin-right: 0.875rem;
  }

  transition: all 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;