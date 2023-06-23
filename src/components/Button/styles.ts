export const Container = `
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  height: fit-content;
  width: fit-content;

  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;

  &:focus-visible {
    filter: brightness(0.7);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`