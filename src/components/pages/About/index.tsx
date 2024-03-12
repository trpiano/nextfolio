import * as LottiePlayer from "@lottiefiles/lottie-player";

import animationComputer from "../../../assets/animations/computer.json";

import {
  Container,
  MainContent,
  HeaderContainer,
  ContentContainer,
  TextContainer,
  AnimationContainer,
} from "./styles";

import { i18next } from "../../../translate/i18n";
import { motion } from "framer-motion";

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
    <Container id="about">
      <MainContent>
        <HeaderContainer>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {i18next.t("about.title")}
          </motion.h2>
        </HeaderContainer>
        <ContentContainer>
          <AnimationContainer>
            <lottie-player
              options={defaultOptions}
              height={animationHeight}
              width={animationWidth}
            />
          </AnimationContainer>
          <TextContainer>
            <p>{i18next.t("about.content")}</p>
          </TextContainer>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}
