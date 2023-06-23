import Image from "next/image";

import { FaPlay } from "react-icons/fa";
import { i18next } from "../../../translate/i18n";
import { IconsRow } from "./components/IconsRow";

import {
  Container,
  BoxContainer,
  ButtonsContainer,
  PortfolioButton,
  VideoButton,
} from "./styles";

export function Introduction() {
  return (
    <Container id="introduction">
      <BoxContainer>
        <IconsRow />

        <h1>{i18next.t("home.title")}</h1>
        <p>{i18next.t("home.description")}</p>

        <ButtonsContainer>
          <PortfolioButton onClick={() => {}}>
            {i18next.t("home.portfolioButton")}
          </PortfolioButton>
          <VideoButton>
            <FaPlay />
          </VideoButton>
        </ButtonsContainer>
      </BoxContainer>

      <Image
        src="/images/profile.png"
        alt="Profile Image"
        width={450}
        height={600}
      />
    </Container>
  );
}
