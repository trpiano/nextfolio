import { AppProps } from "next/app";

import { Header } from "../components/pages/Header";

import { AppContextProvider } from "../context/AppContext";
import { TranslateContextProvider } from "../context/TranslateContext";

import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
        <TranslateContextProvider>
          <AppContextProvider>
            <Header />

            <Component {...pageProps} />
          </AppContextProvider>
        </TranslateContextProvider>
    </>
  );
}

export default MyApp;
