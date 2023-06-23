import { createContext, useContext, useState } from "react";

const TranslateContext = createContext({} as any);

function TranslateContextProvider({ children }: any) {
  const [language, setLanguage] = useState("ptBr");

  return (
    <TranslateContext.Provider
      value={{
        language,
        setLanguage,
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
