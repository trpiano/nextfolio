import axios from "axios";
import Image from "next/image";

import {
  Card,
  CardContent,
  Container,
  ContentContainer,
  HeaderContainer,
  MainContent,
} from "./styles";
import { useEffect, useState } from "react";

export function Skills() {
  const [frontEndSkillsData, setFrontEndSkillsData] = useState([]);
  const [backEndSkillsData, setBackEndSkillsData] = useState([]);
  const [hostingPlatformsSkillsData, setHostingPlatformsSkillsData] =
    useState([]);
  const [languages, setLanguages] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [versionData, setVersionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nextfolio-db.vercel.app/api/skills"
        );

        setFrontEndSkillsData(JSON.parse(response.data.frontend));
        setBackEndSkillsData(JSON.parse(response.data.backend));
        setHostingPlatformsSkillsData(
          JSON.parse(response.data.hostingPlatforms)
        );
        setLanguages(JSON.parse(response.data.programmingLanguages));
        setDatabases(JSON.parse(response.data.databases));
        setVersionData(JSON.parse(response.data.versionControl));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <MainContent>
        <HeaderContainer>
          <h2>Skills</h2>
        </HeaderContainer>

        <ContentContainer>
          <Card>
            <span>Front-end</span>
            <hr />
            {frontEndSkillsData.map((item) => {
              return(
                <CardContent href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} /> {item.skillName}
                </CardContent>
              );
            })}
          </Card>
          <Card>
            <span>Back-end</span>
            <hr />
          </Card>
          <Card>
            <span>Linguagens de programação</span>
            <hr />
          </Card>
          <Card>
            <span>Banco de dados</span>
            <hr />
          </Card>
          <Card>
            <span>Plataformas de hospedagem</span>
            <hr />
          </Card>
          <Card>
            <span>Controle de versão</span>
            <hr />
          </Card>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}
