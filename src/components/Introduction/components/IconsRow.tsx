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
          window.open(process.env.NEXT_PUBLIC_GITHUB_URL , "_blank");
        }}
      >
        <FaGithub />
      </SocialButton>
      <SocialButton
        label="LinkedIn"
        onClick={() => {
          window.open(process.env.NEXT_PUBLIC_LINKEDIN_URL , "_blank");
        }}
      >
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton
        label="Instagram"
        onClick={() => {
          window.open(process.env.NEXT_PUBLIC_INSTAGRAM_URL , "_blank");
        }}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton
        label="WhatsApp"
        onClick={() => {
          window.open(process.env.NEXT_PUBLIC_WHATSAPP_URL , "_blank");
        }}
      >
        <FaWhatsapp />
      </SocialButton>
      <SocialButton
        label="Telegram"
        onClick={() => {
          window.open(process.env.NEXT_PUBLIC_TELEGRAM_URL , "_blank");
        }}
      >
        <FaTelegramPlane />
      </SocialButton>
    </SocialButtonContainer>
  );
}
