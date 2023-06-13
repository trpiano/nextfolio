import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;

  width: 100%;

  gap: 1.5rem;

  h2 {
    color: var(--blue-500);
    letter-spacing: 0.5px;
    line-height: 14px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    font-weight: bold;
    font-size: 3.5rem;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  width: fit-content;

  gap: 0.75rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.5rem;

    border: none;

    background: transparent;

    z-index: 1;

    width: fit-content;
    height: fit-content;

    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;

    &:focus-visible {
      box-shadow: 0 0 0.25rem 2px var(--blue-500);
      border-radius: 2.5rem;
    }
  }
`;

export const ExperiencesContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .list {
      width: 100%;
      max-width: 100%;
    }

    .details {
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  width: 40%;
  max-width: 350px;

  .listItem {
    width: 100%;
    height: fit-content;

    list-style: none;

    border-left: 2px solid var(--gray-500);

    > button {
      width: fit-content;

      padding: 0.5rem 1.5rem;

      font-weight: 500;
      font-size: 1rem;
      line-height: 140%;

      text-align: start;

      transition: all 0.2s ease-in;

      &:focus-visible {
        box-shadow: 0 0 0.25rem 2px var(--green-500);
      }
    }
  }

  .activeItem {
    border-left: 2px solid var(--green-500);

    > button:first-child {
      color: var(--green-500);
    }
  }
`;

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 60%;

  .detailsTitle {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 150%;

      a {
        color: var(--green-500);

        &:focus-visible {
          box-shadow: 0 0 0.25rem 2px var(--green-500);
        }
      }
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;

      color: var(--gray-500);
    }
  }

  .detailsDescription {
    li {
      margin-left: 1rem;
      list-style: disc;
      color: var(--green-500);

      + li {
        margin-top: 0.75rem;
      }

      p {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 150%;

        color: var(--white);
      }
    }
  }
`;

export const SubList = styled.ul`
  .subListItem {
    width: calc(100% - 3rem);
    height: fit-content;

    list-style: circle;
    margin: 0 3rem;

    transition: all 0.2s ease-in;

    > button {
      display: flex;
      justify-content: flex-start;

      width: 100%;

      padding: 0.5rem 0;

      text-align: start;

      font-weight: 500;
      font-size: 1rem;
      line-height: 140%;

      transition: all 0.2s ease-in;

      &:focus-visible {
        box-shadow: 0 0 0.25rem 2px var(--green-500);
      }
    }
  }

  & .activeSubItem {
    color: var(--green-500);

    > button:first-child {
      color: var(--green-500);
    }
  }
`;

export const BackGroundButton = styled.div`
  transition: all 0.2s ease-in;
  position: absolute;
  height: 100%;

  background: var(--blue-500);

  border-radius: 2.5rem;
`;
