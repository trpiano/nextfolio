import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { FlagLanguageSelector } from "./styles";

import { i18next } from "../../../../../translate/i18n";

export function LangPicker() {
  const { locale, push } = useRouter();

  const handleChangeLanguage = () => {
    locale === "enUs"
      ? (i18next.changeLanguage("ptBr"),
        Cookies.set("i18nextLng", "ptBr"),
        push(`/`, undefined, { locale: "ptBr" }))
      : (i18next.changeLanguage("enUs"),
        Cookies.set("i18nextLng", "enUs"),
        push(`/`, undefined, { locale: "enUs" }));
  };

  return (
    <FlagLanguageSelector>
      <Image
        onClick={handleChangeLanguage}
        src={
          i18next.t("navbar.language") === "english"
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
