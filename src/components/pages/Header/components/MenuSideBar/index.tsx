import { X } from "react-feather";
import i18next from "i18next";

import { LangPicker } from "../LanguagePicker";

import { ButtonList, HeaderButton, MenuContainer, Row } from "./styles";
import { menuItems } from "../../../../../constants/menuItems";

import { useAppContext } from "../../../../../context/AppContext";

export function MenuSideBar() {
  const { menuIsOpen, setMenuIsOpen } = useAppContext();

  return (
    <MenuContainer style={menuIsOpen ? { right: 0 } : {}}>
      <Row>
        {/* <LangPicker /> */}

        <button
          tabIndex={menuIsOpen ? 0 : -1}
          className="onCloseButton"
          onClick={() => setMenuIsOpen(false)}
        >
          <X />
        </button>
      </Row>

      <ButtonList>
        {menuItems.map((item, index) => {
          return (
            <HeaderButton
              key={index}
              href={`#${item.href}`}
              onClick={() => setMenuIsOpen(false)}
            >
              {item.icon}
              <span>{i18next.t(`navbar.${item.name}`)}</span>
            </HeaderButton>
          );
        })}
      </ButtonList>
    </MenuContainer>
  );
}
