import Link from "next/link";

import { motion } from "framer-motion";

import { i18next } from "../../../translate/i18n";
import { useEffect, useRef, useState } from "react";

import {
  ButtonsContainer,
  Container,
  DetailsContainer,
  ExperiencesContainer,
  List,
  MainContainer,
  SubList,
} from "./styles";

import { ICareer } from "../../../constants/career";

export function Career() {
  const careerObject = Array.from(
    i18next.t("career.activities", {
      returnObjects: true,
    }) as ArrayLike<ICareer>
  );

  const buttonsContainerRef = useRef(null);

  const [currentTab, setCurrentTab] = useState(0);
  const [selectedListItem, setSelectedListItem] = useState(0);
  const [selectedListSubItem, setSelectedListSubItem] = useState(0);
  const [descriptionData, setDescriptionData] = useState<any | undefined>(
    careerObject[0].list[0].subItems?.[0].description ??
      careerObject[0].list[0].description
  );
  const [buttonStyles, setButtonStyles] = useState<
    { width: string; left: string }[]
  >([]);

  useEffect(() => {
    if (buttonsContainerRef) {
      let leftArray: string[] = ['0rem'];
      let widthArray: string[] = [];

      careerObject.forEach((item) => {
        widthArray.push(
          `${
            (document.getElementById(item.optionName)?.offsetWidth ?? 0) / 16
          }rem`
        );

        if (widthArray.length > leftArray.length) {
          let left = 0;

          widthArray.forEach((item, i) => {
            if (widthArray.length !== i + 1) {
              left = left + Number(item.replace('rem', '')) + 0.75;
            }
          });

          leftArray.push(`${left}rem`);
        }
      });

      setButtonStyles(
        careerObject.map((_, i) => {
          return {
            width: widthArray[i],
            left: leftArray[i],
          };
        })
      );
    }
  }, [buttonsContainerRef]);

  useEffect(() => {
    setSelectedListItem(0);
    setSelectedListSubItem(0);
    setDescriptionData(
      careerObject[currentTab].list[0].subItems?.[0].description ??
      careerObject[currentTab].list[0].description
    );
  }, [currentTab, setSelectedListItem]);

  return (
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

        <ButtonsContainer ref={buttonsContainerRef}>
          <div className="backgroundButton" style={buttonStyles[currentTab]} />

          {careerObject.map((item, index) => {
            return (
              <motion.button
                className="buttonItem"
                key={item.optionName}
                id={item.optionName}
                onClick={() => {
                  setCurrentTab(index),
                  setSelectedListSubItem(0),
                  setSelectedListItem(0)
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={{
                  hidden: { opacity: 1 },
                }}
              >
                {item.optionName}
              </motion.button>
            );
          })}
        </ButtonsContainer>

        <ExperiencesContainer>
          <List>
            {careerObject[currentTab].list.map((item, index) => {
              return (
                <motion.li
                  key={item.name}
                  className={`listItem ${
                    selectedListItem === index ? "activeItem" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={{
                    hidden: { opacity: 1 },
                  }}
                >
                  <button
                    title={item.name}
                    onClick={() => {
                      setSelectedListItem(index);
                      !item?.subItems && setDescriptionData(item.description);
                    }}
                  >
                    {item.name}
                  </button>

                  {item?.subItems && selectedListItem === index ? (
                    <SubList>
                      {item?.subItems.map((subItem, subItemIndex) => (
                        <motion.li
                          key={subItem.name}
                          className={`subListItem ${
                            selectedListSubItem === subItemIndex
                              ? "activeSubItem"
                              : ""
                          }`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: subItemIndex * 0.1,
                          }}
                          variants={{
                            hidden: { opacity: 1 },
                          }}
                        >
                          <button
                            title={subItem.name}
                            onClick={() => {
                              setSelectedListSubItem(subItemIndex);
                              setDescriptionData(subItem.description);
                            }}
                          >
                            {subItem.name}
                          </button>
                        </motion.li>
                      ))}
                    </SubList>
                  ) : null}
                </motion.li>
              );
            })}
          </List>

          <DetailsContainer>
            <motion.div
              className="detailsTitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 1 },
              }}
            >
              <h3>
                {descriptionData?.name}

                {descriptionData?.organization &&
                careerObject[currentTab].list[selectedListItem]?.url ? (
                  <Link
                    href={careerObject[currentTab].list[selectedListItem]?.url}
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      {descriptionData?.organization}
                    </a>
                  </Link>
                ) : null}
              </h3>

              <span>
                {descriptionData?.startDate ? descriptionData?.startDate : ""}
                {" - "}
                {descriptionData?.isFinished
                  ? descriptionData.endDate
                  : i18next.t("career.present")}
              </span>
            </motion.div>

            <ul className="detailsDescription">
              {descriptionData?.activityDescription.map((item, index) => {
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
          </DetailsContainer>
        </ExperiencesContainer>
      </Container>
    </MainContainer>
  );
}
