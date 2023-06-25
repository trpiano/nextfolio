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
  HeroContainer,
} from "./styles";

export function Introduction() {
  return (
    <Container id="introduction">
      <BoxContainer>
        <IconsRow />

        <h1>{i18next.t("home.title")}</h1>
        <p>{i18next.t("home.description")}</p>

        <ButtonsContainer>
          <PortfolioButton
            onClick={() => {
              window.open(i18next.t("home.curriculumLink"), "_blank");
            }}
          >
            {i18next.t("home.curriculumButton")}
          </PortfolioButton>
          {i18next.t("home.presentationVideo") ? (
            <VideoButton>
              <FaPlay />
            </VideoButton>
          ) : (
            <></>
          )}
        </ButtonsContainer>
      </BoxContainer>

      <HeroContainer>
        <Image
          src="/images/profile.png"
          alt="Profile Image"
          width={450}
          height={600}
          className="hero"
        />
      </HeroContainer>
    </Container>
  );
}
