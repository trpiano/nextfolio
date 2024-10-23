import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [mobileSkillsData, setMobileSkillsData] = useState([]);
  const [hostingPlatformsSkillsData, setHostingPlatformsSkillsData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [versionData, setVersionData] = useState([]);
  const [IaCData, setIaCData] = useState([])
  const [cloudPlatformsData, setCloudPlatformsData] = useState([])
  const [testingLibs, setTestingLibs] = useState([])

  function setValuesOnState(response) {
    setFrontEndSkillsData(response.frontend);
    setBackEndSkillsData(response.backend);
    setMobileSkillsData(response.mobile);
    setHostingPlatformsSkillsData(response.hostingPlatforms);
    setLanguages(response.programmingLanguages);
    setDatabases(response.databases);
    setVersionData(response.versionControl);
    setIaCData(response.IaC)
    setCloudPlatformsData(response.cloudPlatforms)
    setTestingLibs(response.testingLibs)
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
          <h2 id="skills">{i18next.t('skills.title')}</h2>
        </HeaderContainer>

        <ContentContainer>
          <Card>
            <span>{i18next.t('skills.frontEnd')}</span>
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
            <span>{i18next.t('skills.backEnd')}</span>
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
            <span>{i18next.t('skills.mobile')}</span>
            <hr />
            <CardContainer>
              {mobileSkillsData && mobileSkillsData.map((item) => {
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
            <span>{i18next.t('skills.languages')}</span>
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
            <span>{i18next.t('skills.testingLibs')}</span>
            <hr />
            <CardContainer>
              {testingLibs.map((item) => {
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
            <span>{i18next.t('skills.dataBases')}</span>
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
            <span>{i18next.t('skills.hostingPlatforms')}</span>
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
            <span>{i18next.t('skills.versionControl')}</span>
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
            <span>{i18next.t('skills.IACPlatforms')}</span>
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
            <span>{i18next.t('skills.cloudProviders')}</span>
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
