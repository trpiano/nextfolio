import Lottie from "react-lottie";

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
    <Container>
      <MainContent>
        <HeaderContainer>
          <motion.h2
            id="about"
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
            <Lottie
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
