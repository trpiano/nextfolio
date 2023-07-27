import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .containerStyles{
    display: flex;
    align-items: center;
    position: relative;

    width: 100%;
    height: 300px;

    .repoImage {
        position: absolute;
        width: 60%;
        height: 300px;
    
        object-fit: cover;
        border-radius: 1rem;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
      height: 10.25rem;

      .repoImage {
        width: 100%;
        height: 10.25rem;
      }
    }
  }

  .textGroup {
    display: flex;
    align-items: center;    

    gap: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 450px) {
    .textGroup:first-child{
      display: none;
    }
  }
`

export const RepoData = styled.section`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.75rem;

  position: absolute;
  width: 60%;
  height: fit-content;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1,875rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid var(--black);;

  span,
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: var(--black);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 10.25rem;

    background-color: var(--gray-200-80);
  }
`;

interface TitleProps {
  isInDevelopment: boolean
}

export const Title = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.isInDevelopment ? 'space-between' : 'flex-end'};

  width: 100%;

  gap: 1rem;

  transition: all 0.4s;

  .elementsGroup{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 1rem;

    @media screen and (max-width: 500px) {
      gap: 0.5rem;
    }
  }

  svg{
    color: #000;
  }

  a:hover, a:focus-visible {
    transition: all 0.2s;

    svg {
      color: var(--blue-500);
    }
  }


  @media screen and (max-width: 768px) {
    svg{
      color: var(--white)
    }
  }
`;

export const IsInDevelopment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  border-radius: 0.5rem;

  *{
    color: var(--yellow-500) !important;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  gap: 1rem;

  transition: all 0.4s;

  svg{
    color: #000;
  }

  a:hover,a:focus-visible {
    transition: all 0.4s;

    svg {
      color: var(--blue-500);
    }
  }

  @media screen and (max-width: 800px) {
    svg{
      color: var(--white)
    }
  }
`
