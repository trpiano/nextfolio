import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

import { motion } from "framer-motion";

import { ICareer, IList } from "../../../constants/career";
import ExpCard from "./components/experiencesItem";

import { i18next } from "../../../translate/i18n";

import {
  AcademicExperiences,
  Container,
  ExperiencesContainer,
  MainContainer,
  WorkExperiences,
} from "./styles";

export function Career() {
  const careerObject = Array.from(
    i18next.t("career.activities", {
      returnObjects: true,
    }) as ArrayLike<ICareer>
  );

  const experienceObject = careerObject[0].list;
  const educationObject = careerObject[1].list;

  return (
    <>
      <MainContainer>
        <Container>
          <motion.h2
            id="career"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {i18next.t("career.title")}
          </motion.h2>

          <ExperiencesContainer>
            <AcademicExperiences>
              {educationObject.map((item: IList, index) => {
                return (
                  <ExpCard
                    key={index}
                    icon={<FaGraduationCap />}
                    startDate={item.description.startDate}
                    endDate={
                      item.description.isFinished
                        ? item.description.endDate
                        : i18next.t("career.present")
                    }
                    url={item.url}
                    name={item.name}
                    organization={item.description.organization}
                    description={item.description.activityDescription}
                  />
                );
              })}
            </AcademicExperiences>
            <WorkExperiences>
              {experienceObject.map((item: IList) => {
                return item.subItems.map((subItem, index) => {
                  return (
                    <ExpCard
                      key={index}
                      icon={<FaBriefcase />}
                      startDate={subItem.description.startDate}
                      endDate={
                        subItem.description.isFinished
                          ? subItem.description.endDate
                          : i18next.t("career.present")
                      }
                      url={subItem.url}
                      name={subItem.name}
                      organization={subItem.description.organization}
                      description={subItem.description.activityDescription}
                    />
                  );
                });
              })}
            </WorkExperiences>
          </ExperiencesContainer>
        </Container>
      </MainContainer>
    </>
  );
}
