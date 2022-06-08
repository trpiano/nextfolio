import Head from "next/head";

import { FaPlay } from "react-icons/fa";
import { IconsRow } from "./components/IconsRow";

import {
  Container,
  BoxContainer,
  ButtonsContainer,
  PortfolioButton,
  VideoButton,
} from "./styles";

export function About() {
  return (
    <>
      <Head>
        <title>Timóteo | Personal Portfolio</title>
      </Head>

      <Container>
        <BoxContainer>
          <IconsRow />

          <h1>Oi, sou Timóteo Piano</h1>
          <p>Desenvolvedor Front-End Junior 👨‍💻👋</p>

          <ButtonsContainer>
            <PortfolioButton onClick={() => {}}>Meu Portfolio</PortfolioButton>
            <VideoButton>
              <FaPlay />
            </VideoButton>
          </ButtonsContainer>
        </BoxContainer>

        <img src="/images/profile.png"/>
      </Container>
    </>
  );
}
