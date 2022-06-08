import styled from "styled-components";

export const FlagLanguageSelector = styled.div`
  border-radius: 0.5rem;

  color: var(--white);

  display: flex;
  flex-direction: column;
  transform: scale(0.7);

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  transition: background 0.2s;

  svg{
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }

  :hover {
    background: var(--red-500);
    border-radius: 0.5rem;
  }
`;

export const OptionButton = styled.button`
  height: 40px;

  border: none;
  background: none;

  display: flex;
  align-items: center;

  color: var(--white);

  svg {
    height: 36px;
    width: 36px;
  }
`;
