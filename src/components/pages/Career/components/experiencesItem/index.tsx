import Link from "next/link";
import {
  Container,
  ContentContainer,
  DescriptionContent,
  MainContainer,
  TitleContainer,
} from "./styles";
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface ExpCardProps {
  icon: ReactElement;
  startDate: Date;
  endDate: Date;
  url: string;
  name: string;
  organization: string;
  description: string[];
}

export default function ExpCard({
  icon,
  startDate,
  endDate,
  url,
  name,
  organization,
  description,
}: ExpCardProps) {
  return (
    <Container>
      <MainContainer>
        {icon}
        <ContentContainer>
          <TitleContainer>
            <span>
              {startDate} - {endDate}
            </span>
            <h3>{name}</h3>
            {
              <Link href={url || ""}>
                <a target="_blank" rel="noopener noreferrer">
                  {organization}
                </a>
              </Link>
            }
          </TitleContainer>
          <DescriptionContent>
            <ul>
              {description.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    variants={{
                      hidden: { opacity: 1 },
                    }}
                  >
                    <p>{item}</p>
                  </motion.li>
                );
              })}
            </ul>
          </DescriptionContent>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}
