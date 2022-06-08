import { SocialButton, SocialButtonContainer } from "../styles";

import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export function IconsRow() {
  return (
    <SocialButtonContainer>
      <SocialButton
        label="Github"
        onClick={() => {
          window.open("https://github.com/trpiano/", "_blank");
        }}
      >
        <FaGithub />
      </SocialButton>
      <SocialButton
        label="LinkedIn"
        onClick={() => {
          window.open("https://www.linkedin.com/in/timoteopiano/", "_blank");
        }}
      >
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton
        label="Instagram"
        onClick={() => {
          window.open("https://instagram.com/timoteopiano.dev", "_blank");
        }}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton
        label="WhatsApp"
        onClick={() => {
          window.open("https://wa.me/message/Z4NS6IN6UUL5M1", "_blank");
        }}
      >
        <FaWhatsapp />
      </SocialButton>
      <SocialButton
        label="Telegram"
        onClick={() => {
          window.open("https://t.me/trpiano", "_blank");
        }}
      >
        <FaTelegramPlane />
      </SocialButton>
    </SocialButtonContainer>
  );
}
