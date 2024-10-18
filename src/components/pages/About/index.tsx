import { useEffect, useState } from "react";
import axios from "axios";

import { i18next } from "../../../translate/i18n";
import { motion } from "framer-motion";

// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Container,
  MainContent,
  HeaderContainer,
  ContentContainer,
  TextContainer,
  // AnimationContainer,
} from "./styles";

export function About() {
  // const [animationData, setAnimationData] = useState("")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://nextfolio-db.vercel.app/api/animations"
  //       );

  //       setAnimationData(response.data.about.aboutAnimation)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
          {/* <AnimationContainer>
          <DotLottieReact
              src={animationData ?? ''}
              loop
              autoplay
            />
          </AnimationContainer> */}
          <TextContainer>
            <p>{i18next.t("about.content")}</p>
          </TextContainer>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}
