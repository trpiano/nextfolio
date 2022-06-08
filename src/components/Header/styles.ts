import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px #fff;

  p {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);

    span {
      color: var(--pink-500);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;

  color: var(--white);

  display: flex;
  align-items: center;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  svg {
    margin-right: 0.875rem;
  }

  transition: background 0.2s;

  :hover {
    background: var(--red-500);
    border-radius: 0.5rem;
  }
`;

export const ContactButton = styled.button`
  background: var(--red-500);
  border: none;
  border-radius: 0.5rem;

  color: var(--white);

  display: flex;
  align-items: center;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  svg {
    margin-right: 0.875rem;
  }

  transition: background 0.2s;

  :hover {
    background: var(--red-500-08filter);
  }
`;

export const FlagLanguageSelector = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;

  color: var(--white);

  display: flex;
  align-items: center;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  svg {
    margin-right: 0.875rem;
  }

  svg:last-child {
    margin-right: 0;
  }

  transition: background 0.2s;

  :hover {
    background: var(--red-500);
    border-radius: 0.5rem;
  }
`;
