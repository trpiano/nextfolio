import Head from "next/head";

import { FaPlay } from "react-icons/fa";
import { i18next } from "../../translate/i18n";
import { IconsRow } from "./components/IconsRow";

import {
  Container,
  BoxContainer,
  ButtonsContainer,
  PortfolioButton,
  VideoButton,
} from "./styles";

export function Home() {
  return (
    <>
      <Head>
        <title>Timóteo | Personal Portfolio</title>
      </Head>

      <Container>
        <BoxContainer>
          <IconsRow />

          <h1>{i18next.t('home.title')}</h1>
          <p>{i18next.t('home.description')}</p>

          <ButtonsContainer>
            <PortfolioButton onClick={() => {}}>{i18next.t('home.portfolioButton')}</PortfolioButton>
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
