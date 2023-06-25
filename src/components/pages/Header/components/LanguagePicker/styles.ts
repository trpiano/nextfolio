import styled from "styled-components";

export const FlagLanguageSelector = styled.div`
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 40px;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  transition: background 0.2s;

  cursor: pointer;

  svg{
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
`;