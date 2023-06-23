import { AppProps } from "next/app";

import { GlobalStyle } from "../styles/global";
import { TranslateContextProvider } from "../context/TranslateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <TranslateContextProvider>
        <Component {...pageProps} />
      </TranslateContextProvider>
    </>
  );
}

export default MyApp;
