import { RiMailFill } from "react-icons/ri";
import { Menu } from "react-feather";
import { motion } from "framer-motion";

import {
  Container,
  HeaderButton,
  ButtonContainer,
  ContactButton,
} from "./styles";

import { LangPicker } from "./components/LanguagePicker";

import { i18next } from "../../../translate/i18n";
import { menuItems } from "../../../constants/menuItems";
import { MenuSideBar } from "./components/MenuSideBar";

import { useAppContext } from "../../../context/AppContext";

export function Header() {
  const { setMenuIsOpen, menuIsOpen } = useAppContext();

  return (
    <>
      <Container style={menuIsOpen ? { filter: "blur(0.5rem)" } : {}}>
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

        <motion.button
          className="menuButton"
          onClick={() => setMenuIsOpen(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Menu />
        </motion.button>
      </Container>

      <MenuSideBar />
    </>
  );
}
