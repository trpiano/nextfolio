import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/global";
import { TranslateContextProvider } from "../context/TranslateContext";
import { Header } from "../components/pages/Header";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <TranslateContextProvider>

        <Header />

        <Component {...pageProps} />
      </TranslateContextProvider>
    </>
  );
}

export default MyApp;
