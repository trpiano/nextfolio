import { RiMailFill } from "react-icons/ri";

import {
  Container,
  HeaderButton,
  ButtonContainer,
  ContactButton,
} from "./styles";

import { LangPicker } from "./LanguagePicker";

import { i18next } from "../../../translate/i18n";
import { menuItems } from "../../../constants/menuItems";

export function Header() {
  return (
    <Container>
      <p>
        Timóteo<span>.</span>dev
      </p>

      <ButtonContainer>
        {menuItems.map((item, index) => {
          return (
            <HeaderButton key={index} href={`#${item.href}`}>
              {item.icon}
              <span>{i18next.t(`navbar.${item.name}`)}</span>
            </HeaderButton>
          );
        })}

        <ContactButton href="#contactMe">
          <RiMailFill />
          <span>{i18next.t("navbar.contact")}</span>
        </ContactButton>

        {/* <LangPicker /> */}
      </ButtonContainer>
    </Container>
  );
}
