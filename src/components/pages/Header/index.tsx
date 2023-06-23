import { RiMailFill } from "react-icons/ri";

import {
  Container,
  HeaderButton,
  ButtonContainer,
  ContactButton,
} from "./styles";

import Link from "next/link";

import { LangPicker } from "./LanguagePicker";

import { i18next } from "../../../translate/i18n";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { menuItems } from "../../../constants/menuItems";

export function Header() {
  const MotionLink = useMemo(() => {
    return motion(Link);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const href = link.getAttribute("href");
        const target = document.querySelector(href ?? "");

        if (target) {
          const targetScroll =
            target.getBoundingClientRect().top + window.scrollY;

          console.log(targetScroll);

          window.scrollTo({
            top:
              targetScroll -
              (document.querySelector("#header")?.clientHeight ?? 0) -
              16,
            behavior: "smooth",
          });

          window.history.pushState(null, "", href ?? "");
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  console.log(menuItems);

  return (
    <Container>
      <a href="#introduction">
        Timóteo<span>.</span>dev
      </a>

      {menuItems.map((item, index) => {
        return (
          <MotionLink
            href={`#${item.name}`}
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: (menuItems.length - index) * 0.1,
            }}
          >
            <>
              {item.icon}
              {i18next.t(`navbar.${item.name}`)}
            </>
          </MotionLink>
        );
      })}

      <ButtonContainer>
        <ContactButton href="#contact">
          <RiMailFill />
          {i18next.t("navbar.contact")}
        </ContactButton>
        <LangPicker />
      </ButtonContainer>
    </Container>
  );
}
