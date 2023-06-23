import { motion } from "framer-motion";

import { i18next } from "../../../translate/i18n";
import { RepoCards } from "./components/RepoCards";
import { Container, ContentContainer } from "./styles";

export function Projects() {
  return (
    <Container>
      <motion.h2
        id="projects"
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

      {/* <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <ButtonLink
          color="white"
          href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
          }}
        >
          {i18next.t("projects.viewMore")}
        </ButtonLink>
      </div> */}
    </Container>
  );
}
