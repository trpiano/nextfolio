import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;

    gap: 2rem;

    padding: 1rem 1.5rem;

    svg{
        position: absolute;

        top: 0.75rem;
        left: 0.95rem;

        height: 1.25rem;
        width: 1.25rem;
        color: var(--white);
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 0.25rem;
`

export const MainContainer = styled.div`
    width: 100%;

    padding: 1.5rem 0 0 0;
`

export const ContentContainer = styled.div`
    width: 100%;

    border-left: 2px solid var(--white);

    padding: 0 0 0 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 0.75rem;

    a {
        color: var(--blue-500);

        text-decoration: none;

        :focus-visible {
          box-shadow: 0 0 0.25rem 2px var(--blue-500);
        }
    }

   span{
    color: var(--white-text);
    font-size: 0.875rem;
   } 

   h3{
    font-size: 1.25rem;
    color: var(--white);
   }

   p{
    color: var(--white);
   }
`

export const DescriptionContent = styled.div`
    width: 100%;
    padding: 0 0 0 1rem;

    text-align: justify;

    ul {
        display: flex;
        flex-direction: column;

        gap: 0.25rem;

        list-style-type: disc; 
        color: var(--white); 
    }
`