import { motion } from "framer-motion";

import { i18next } from "../../../translate/i18n";
import { RepoCards } from "./components/RepoCards";
import { Container, ContentContainer, SeeMoreContainer } from "./styles";
import { Button } from "../../Button";

export function Projects() {
  return (
    <Container id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {i18next.t("projects.title")}
      </motion.h2>

      <ContentContainer>
        <RepoCards />
      </ContentContainer>

      <SeeMoreContainer>
        <Button
          onClick={() => {
            window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank");
          }}
          color="blue"
        >
          {i18next.t("projects.viewMore")}
        </Button>
      </SeeMoreContainer>
    </Container>
  );
}
