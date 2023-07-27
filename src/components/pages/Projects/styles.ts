import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 2rem 0 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  h2 {
    color: var(--blue-500);
    letter-spacing: 0.5px;
    line-height: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 0.875rem;

    font-weight: bold;
    font-size: 3.5rem;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  width: 80%;

  gap: 1.5rem;

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 150%;

    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const SeeMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button{
    color: var(--white);

    font-size: 1rem;

    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
  }
`