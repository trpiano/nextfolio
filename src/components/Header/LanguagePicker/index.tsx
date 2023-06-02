import Image from "next/image";

import { FlagLanguageSelector } from "./styles";

import { i18next } from "../../../translate/i18n";

export function LangPicker() {
  const handleSelectLanguage = () => {
    const I18N_STORAGE_KEY = "i18nextLng";

    if (i18next.t("navbar.language") === "english") {
      localStorage.setItem(I18N_STORAGE_KEY, "ptBr");
    } else {
      localStorage.setItem(I18N_STORAGE_KEY, "enUs");
    }

    window.location.reload();
  };

  return (
    <>
      <FlagLanguageSelector>
        <Image
          onClick={handleSelectLanguage}
          src={
            i18next.t("navbar.language") === "english"
              ? "/images/icons/united-states-icon.svg"
              : "/images/icons/brazilian-icon.svg"
          }
          width={30}
          height={30}
        />
      </FlagLanguageSelector>
    </>
  );
}
