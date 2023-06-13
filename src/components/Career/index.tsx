import Link from "next/link";

import { motion } from "framer-motion";

import { i18next } from "../../translate/i18n";
import { useRef, useState } from "react";

import {
  BackGroundButton,
  ButtonsContainer,
  Container,
  DetailsContainer,
  ExperiencesContainer,
  List,
} from "./styles";

import { ICareer, IDescription } from "../../constants/career";
import { format } from "date-fns";

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
  const [descriptionData, setDescriptionData] = useState<
    IDescription | undefined
  >(
    careerObject[0].list[0].subItems?.[0].description ??
      careerObject[0].list[0].description
  );

  return (
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
        <BackGroundButton/>

        {careerObject.map((item, index) => {
          return (
            <motion.button
              key={item.optionName}
              id={item.optionName}
              onClick={() => setCurrentTab(index)}
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
                  <ul className="subList">
                    {item?.subItems.map(
                      (subItem, subItemIndex) => (
                        console.log("Subtitle:", subItem),
                        (
                          <motion.li
                            key={subItem.name}
                            className={`subListIte ${
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
                        )
                      )
                    )}
                  </ul>
                ) : null}
              </motion.li>
            );
          })}
        </List>
      </ExperiencesContainer>

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

            {descriptionData?.description?.organization &&
            careerObject[currentTab].list[selectedListItem]?.url ? (
              <Link href={careerObject[currentTab].list[selectedListItem]?.url}>
                <a target="_blank" rel="noopener noreferrer">
                  {descriptionData?.description?.organization}
                </a>
              </Link>
            ) : null}
          </h3>

          <span>
            {descriptionData?.description?.startDate
              ? format(descriptionData.description.startDate, "MMM yyyy")
              : ""}
            {" - "}
            {descriptionData?.description?.isFinished
              ? format(descriptionData.description.endDate, "MMM yyyy")
              : i18next.t("career.present")}
          </span>
        </motion.div>

        <ul className="detailsDescription">
          {descriptionData?.description?.activityDescription.map((item, index) => {
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
    </Container>
  );
}
