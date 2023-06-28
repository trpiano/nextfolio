import { useEffect } from "react";
import Image from "next/image";

import { FlagLanguageSelector } from "./styles";

import { useTranslation } from "../../../../../context/TranslateContext";
import { i18next } from "../../../../../translate/i18n";

export function LangPicker() {
  const { getLanguageFromCookie, setLanguageCookie } = useTranslation();

  useEffect(() => {
    const savedLanguage = getLanguageFromCookie();
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  const handleSelectLanguage = () => {
    const newLanguage = i18next.language === "pt-BR" ? "en-US" : "pt-BR";
    i18next.changeLanguage(newLanguage).then(() => window.location.reload());
    setLanguageCookie(newLanguage);
  };

  // function handleSelectLanguage() {
  //   const language = i18next.language === "pt-BR" ? "en-US" : "pt-BR";
  //   i18next.changeLanguage(language).then(() => window.location.reload());
  // }

  console.log(i18next.language);

  return (
    <FlagLanguageSelector>
      <Image
        onClick={handleSelectLanguage}
        src={
          i18next.language === "en-US"
            ? "/images/icons/united-states-icon.svg"
            : "/images/icons/brazilian-icon.svg"
        }
        alt="Flag Icon"
        width={30}
        height={30}
      />
    </FlagLanguageSelector>
  );
}
