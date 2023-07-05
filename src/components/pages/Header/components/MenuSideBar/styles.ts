import styled from 'styled-components'

export const MenuContainer = styled.aside`
    display: flex;
    flex-direction: column;

    position: fixed;

    width: max(50%, 300px);
    height: 100vh;

    padding: 1rem 2.5rem;
    gap: 2.5rem;

    right: min(-55%, -310px);
    top: 0;

    z-index: 2;

    background: linear-gradient(0deg, rgba(61,90,128,1) 14%, rgba(33,37,41,1) 100%);
    box-shadow: -0.25rem 0px 0.25rem rgba(0, 0, 0, 0.25);

    transition: all 0.2s ease-in;

    @media screen and (max-width: 960px) {
        padding: 1.25rem 2.5rem;
    }

    @media screen and (max-width: 450px) {
        padding: 0.875rem 1.5rem;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    height: fit-content;

    button {
      height: 2rem;

      border: none;
      background: transparent;

      color: var(--blue-500);
    }

    img {
      width: 2rem;
      height: 2rem;

      border-radius: 50%;
    }

    .onCloseButton {
      svg {
        height: 2rem;
        width: 2rem;
      }
    }

    button:focus-visible {
      box-shadow: 0px 0px 0.25rem 2px var(--green-500);
      border-radius: 50%;
    }
`

export const ButtonList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    width: fit-content;
    height: fit-content;

    button {
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 150%;
      text-decoration: none;

      color: var(--white);

      transition: all 0.2s ease-in;
    }

    button:hover,
    button:focus-visible {
      color: var(--green-500);
    }
`

export const HeaderButton = styled.a`
  background: transparent;
  border: none;
  border-radius: 0.5rem;

  text-decoration: none;

  padding: 0 0.5rem;
  margin: 0 0.5rem;

  color: var(--white);

  user-select: none;

  font-size: 1.075rem;
  font-weight: 700;

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.875rem;

  text-decoration: none;

  svg, span{
    color: var(--blue-500);
  }

  transition: all 0.2s;

  :hover {
    background: var(--blue-500);
    border-radius: 0.5rem;

    svg, span{
      color: var(--white);
    }
  }

  @media screen and (max-width: 950px) {
    gap: 0.5rem;
  }
`;