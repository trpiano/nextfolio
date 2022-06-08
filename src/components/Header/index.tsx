import {
  RiHome2Fill,
  RiUser2Fill,
  RiCodeBoxFill,
  RiBookmark3Fill,
  RiMailFill,
  RiBook2Fill,
} from "react-icons/ri";

import {
  Container,
  HeaderButton,
  ButtonContainer,
  ContactButton,
} from "./styles";

import { LangPicker } from './LanguagePicker'

import { i18next } from "../../translate/i18n";

export function Header() {
  return (
    <Container>
      <p>
        Timóteo<span>.</span>dev
      </p>
      <ButtonContainer>
        <HeaderButton>
          <RiHome2Fill />
          {i18next.t('navbar.home')}
        </HeaderButton>
        <HeaderButton>
          <RiUser2Fill />
          {i18next.t('navbar.about')}
        </HeaderButton>
        <HeaderButton>
          <RiBookmark3Fill />
          {i18next.t('navbar.skills')}
        </HeaderButton>
        <HeaderButton>
          <RiCodeBoxFill />
          {i18next.t('navbar.projects')}
        </HeaderButton>
        <HeaderButton>
          <RiBook2Fill />
          {i18next.t('navbar.blog')}
        </HeaderButton>
        <ContactButton>
          <RiMailFill />
          {i18next.t('navbar.contact')}
        </ContactButton>
        <LangPicker />
      </ButtonContainer>
    </Container>
  );
}
