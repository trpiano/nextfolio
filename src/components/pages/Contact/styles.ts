import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 100px 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;

    width: 80%;

    gap: 1.5rem;

    text-align: center;

    h2 {
        color: var(--blue-500);
        letter-spacing: 0.5px;
        line-height: 100%;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;

        font-weight: bold;
        font-size: 3.5rem;
    }

    button{
        border-radius: 0.5rem;
        padding: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    gap: 1rem;

    .row {
      display: flex;

      width: 100%;

      gap: 1rem;
    }

@media screen and (max-width: 768px) {
    width: 100%;

    h2 {
        font-size: 1.75rem;
    }


    .row {
        flex-direction: column;
    }
    
  }

  @media screen and (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`