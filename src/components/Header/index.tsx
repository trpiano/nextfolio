import {
  RiHome2Fill,
  RiUser2Fill,
  RiCodeBoxFill,
  RiBookmark3Fill,
  RiFocus2Line,
  RiMailFill,
  RiArrowDownSFill,
  RiBook2Fill,
} from "react-icons/ri";
import { GiBrazilFlag } from "react-icons/gi";

import {
  Container,
  HeaderButton,
  ButtonContainer,
  ContactButton,
  FlagLanguageSelector,
} from "./styles";

export function Header() {
  return (
    <Container>
      <p>
        Timóteo<span>.</span>dev
      </p>
      <ButtonContainer>
        <HeaderButton>
          <RiHome2Fill />
          Início
        </HeaderButton>
        <HeaderButton>
          <RiFocus2Line />
          Serviços
        </HeaderButton>
        <HeaderButton>
          <RiUser2Fill />
          Sobre
        </HeaderButton>
        <HeaderButton>
          <RiBookmark3Fill />
          Habilidades
        </HeaderButton>
        <HeaderButton>
          <RiCodeBoxFill />
          Portfolio
        </HeaderButton>
        <HeaderButton>
          <RiBook2Fill />
          Blog
        </HeaderButton>
        <ContactButton>
          <RiMailFill />
          Contatar
        </ContactButton>
        <FlagLanguageSelector onClick={() => {}}>
          <GiBrazilFlag />
          <RiArrowDownSFill />
        </FlagLanguageSelector>
      </ButtonContainer>
    </Container>
  );
}
