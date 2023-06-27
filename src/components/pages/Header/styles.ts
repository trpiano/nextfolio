import styled from "styled-components";

export const Container = styled.header`
  max-height: 80px;
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

  .menuButton {
    display: none;
  }

  @media screen and (max-width: 950px) {
    justify-content: space-between;

    padding: 2rem;

    .menuButton {
      display: flex;

      height: 2rem;

      border: none;
      background: transparent;

      color: var(--blue-500);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;


  @media screen and (max-width: 950px) {
    display: none;

    justify-content: space-between;
  }
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

  gap: 0.875rem;

  text-decoration: none;

  svg, span{
    color: var(--blue-500);
  }

  transition: all 0.2s;

  :hover {
    background: var(--blue-500);
    border-radius: 0.5rem;

    svg, span{
      color: var(--white);
    }
  }

  @media screen and (max-width: 950px) {
    gap: 0.5rem;
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

  gap: 0.875rem;

  text-decoration: none;

  svg, span{
    color: var(--white);
  }

  transition: all 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  @media screen and (max-width: 950px) {
    gap: 0.5rem;
  }
`;