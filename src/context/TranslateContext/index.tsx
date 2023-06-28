import { createContext, useContext } from "react";
import Cookies from "js-cookie";
import { i18next } from "../../translate/i18n";

const TranslateContext = createContext({} as any);

function TranslateContextProvider({ children }: any) {
  function setLanguageCookie(lang) {
    Cookies.set("i18nextLng", lang, { expires: 365 });
  }

  function getLanguageFromCookie() {
    return Cookies.get("i18nextLng");
  }

  i18next.on("languageChanged", (lang) => {
    setLanguageCookie(lang);
  });

  const savedLanguage = getLanguageFromCookie();
  if (savedLanguage) {
    i18next.changeLanguage(savedLanguage);
  }

  return (
    <TranslateContext.Provider
      value={{
        setLanguageCookie,
        getLanguageFromCookie,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

const useTranslation = () => {
  return useContext(TranslateContext);
};

export { useTranslation, TranslateContextProvider };
