import { AppProps } from "next/app";

import { Header } from "../components/pages/Header";

import { AppContextProvider } from "../context/AppContext";
import { TranslateContextProvider } from "../context/TranslateContext";

import GoogleAnalytics from "../components/GoogleAnalytics/googleAnalytics";

import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''} />
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
