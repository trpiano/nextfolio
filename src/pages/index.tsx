import Head from "next/head";

import { Introduction } from "../components/pages/Introduction";
import { About } from "../components/pages/About";
import { Skills } from "../components/pages/Skills";
import { Career } from "../components/pages/Career";
import { Projects } from "../components/pages/Projects";
import { Contact } from "../components/pages/Contact";

import { useAppContext } from "../context/AppContext";

import { Container } from "../styles/global";

export default function App() {
  const { menuIsOpen } = useAppContext();


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
