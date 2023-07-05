import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.section`
  padding: 4rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 80%;

  gap: 3rem;

  h2 {
    color: var(--blue-500);
    letter-spacing: 0.5px;
    line-height: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 0,875rem;

    font-weight: bold;
    font-size: 3.5rem;

    text-align: center;
  }

  button {
    background: transparent;
    border: none;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ExperiencesContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    width: fit-content;
  }
`;

export const AcademicExperiences = styled.div`
  width: 100%;
  height: 300px;

  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; 

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1,875rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

export const WorkExperiences = styled.div`
  width: 100%;
  height: 300px;

  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1,875rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`
