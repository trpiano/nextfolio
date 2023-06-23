import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 0.5rem;

  input {
    display: flex;
    padding: 0.75rem 1rem;

    border: none;
    border-bottom: 2px solid transparent;

    width: 100%;
    height: fit-content;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: var(--white);

    &::placeholder {
      color: var(--white);
    }

    &:focus {
      border-bottom: 2px solid var(--blue-500);
    }
  }

  span {
    width: 100%;

    font-weight: 500;
    font-size: 0.75rem;
    line-height: 140%;
  }
`