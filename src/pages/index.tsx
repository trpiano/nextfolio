import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect } from "react";

import Cookies from "js-cookie";

import { Introduction } from "../components/pages/Introduction";
import { About } from "../components/pages/About";
import { Skills } from "../components/pages/Skills";
import { Career } from "../components/pages/Career";
import { Projects } from "../components/pages/Projects";
import { Contact } from "../components/pages/Contact";

import { useAppContext } from "../context/AppContext";

import { Container } from "../styles/global";
import { i18next } from "../translate/i18n";

export default function App() {
  const { menuIsOpen } = useAppContext();
  const { locale, push } = useRouter();

  useEffect(() => {
    Cookies.set("i18nextLng", locale)
  },[])

  useEffect(() => {
    const hasLanguageCookies = Cookies.get('i18nextLng')

    if(hasLanguageCookies){
      i18next.changeLanguage(hasLanguageCookies),
      push(`/`, undefined, { locale: hasLanguageCookies });
    }
  },[locale])

  return (
    <>
      <Head>
        <title>Timóteo Piano | Personal Portfolio</title>
      </Head>

      <Container style={menuIsOpen ? { filter: "blur(0.5rem)" } : {}}>
        <Introduction />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
