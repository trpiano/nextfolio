import { i18next } from "../../../translate/i18n";
import { motion } from "framer-motion";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Container,
  MainContent,
  HeaderContainer,
  ContentContainer,
  TextContainer,
  AnimationContainer,
} from "./styles";

export function About() {
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
          <DotLottieReact
              src="https://lottie.host/embed/fa688dec-731a-4c13-a0b8-0b8af46af466/iKXyQEzyve.lottie"
              loop
              autoplay
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
