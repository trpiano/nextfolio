import { GiBrazilFlag } from "react-icons/gi";
import { RiArrowDownSFill } from "react-icons/ri";

import { FlagLanguageSelector, OptionButton } from "./styles";

export function LangPicker() {
  const handleSelectLanguage = (event) => {
    const I18N_STORAGE_KEY = "i18nextLng";

    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location.reload();
  };

  return (
    <>
      <FlagLanguageSelector onChange={handleSelectLanguage}>
        <OptionButton>
          <GiBrazilFlag />
        </OptionButton>
      </FlagLanguageSelector>
    </>
  );
}
