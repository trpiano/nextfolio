import Lottie from "react-lottie";

import animationComputer from "../../assets/animations/computer.json";

import {
  Container,
  MainContent,
  HeaderContainer,
  ContentContainer,
  TextContainer,
  AnimationContainer,
} from "./styles";

export function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationComputer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animationWidth = "100%";
  const animationHeight = "100%";

  return (
    <Container>
      <MainContent>
        <HeaderContainer>
          <h2>About Me</h2>
        </HeaderContainer>
        <ContentContainer>
          <AnimationContainer>
            <Lottie
              options={defaultOptions}
              height={animationHeight}
              width={animationWidth}
            />
          </AnimationContainer>
          <TextContainer>
            <p>
              Prazer, me chamo Timóteo, tenho 23 anos e sou natural de Paraguaçu
              Paulista, mas atualmente moro em Presidente Prudente, interior de
              São Paulo. Sou formado em Sistema de Informação de Universidade
              Anhanguera, onde conclui o curso por uma bolsa integrar do PROUNI.
              Atuo como desenvolvedor front-end, utilizando ReactJS, NextJS,
              Styled-Components e outros libs. Sempre buscando me aprimorar em
              relação às ferramentas que trabalho e também a descobrir e
              aprender novas ferramentas.
            </p>
          </TextContainer>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}
