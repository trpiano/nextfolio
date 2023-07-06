import styled from 'styled-components'

export const Container = styled.div`
    z-index: 9999999999999;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    @media screen and (max-width: 850px) {
        img{
            padding: 0 1rem;

            width: 80%;
        }
    }

    @media screen and (max-width: 500px) {
        img{
            padding: 0 1.5rem;

            width: 100%;
        }
    } 
`