import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import { i18next } from "../../../translate/i18n";

import {
  Card,
  CardContainer,
  CardContent,
  Container,
  ContentContainer,
  HeaderContainer,
  MainContent,
} from "./styles";

export function Skills() {
  const [frontEndSkillsData, setFrontEndSkillsData] = useState([]);
  const [backEndSkillsData, setBackEndSkillsData] = useState([]);
  const [hostingPlatformsSkillsData, setHostingPlatformsSkillsData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [versionData, setVersionData] = useState([]);
  const [IaCData, setIaCData] = useState([])
  const [cloudPlatformsData, setCloudPlatformsData] = useState([])

  function setValuesOnState(response) {
    setFrontEndSkillsData(response.frontend);
    setBackEndSkillsData(response.backend);
    setHostingPlatformsSkillsData(response.hostingPlatforms);
    setLanguages(response.programmingLanguages);
    setDatabases(response.databases);
    setVersionData(response.versionControl);
    setIaCData(response.IaC)
    setCloudPlatformsData(response.cloudPlatforms)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nextfolio-db.vercel.app/api/skills"
        );

        setValuesOnState(response.data)
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
          <h2>{i18next.t('skills.title')}</h2>
        </HeaderContainer>

        <ContentContainer>
          <Card>
            <span>Front-end</span>
            <hr />
            <CardContainer>
              {frontEndSkillsData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Plataformas de hospedagem</span>
            <hr />
            <CardContainer>
              {hostingPlatformsSkillsData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Linguagens de programação</span>
            <hr />
            <CardContainer>
              {languages.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Banco de dados</span>
            <hr />
            <CardContainer>
              {databases.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Back-end</span>
            <hr />
            <CardContainer>
              {backEndSkillsData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Controle de versão</span>
            <hr />
            <CardContainer>
              {versionData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>IaC (Infraestrutura como código)</span>
            <hr />
            <CardContainer>
              {IaCData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
          <Card>
            <span>Provedores Cloud</span>
            <hr />
            <CardContainer>
              {cloudPlatformsData.map((item) => {
                return (
                  <CardContent key={item.skillName} href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image src={item.imgSrc} alt={item.imgAltText} height={40} width={40} />
                    <p>{item.skillName}</p>
                  </CardContent>
                );
              })}
            </CardContainer>
          </Card>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}
