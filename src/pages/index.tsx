import { Introduction } from "../components/pages/Introduction";
import { Header } from "../components/pages/Header";
import { About } from "../components/pages/About";
import { Skills } from "../components/pages/Skills";
import { Career } from "../components/pages/Career";
import { Projects } from "../components/pages/Projects";
import { Contact } from "../components/pages/Contact";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Timóteo | Personal Portfolio</title>
      </Head>

      <Header />
      <Introduction />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </>
  );
}
