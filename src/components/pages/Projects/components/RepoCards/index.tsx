import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { Clock, GitBranch, GitHub, Star, Loader } from "react-feather";

import { motion } from "framer-motion";

//types
import { IGithubRepository } from "../../models";
import useSWR from "swr";

import { Container, Footer, Main, RepoData, Title, IsInDevelopment, UsedTechs, TechCard } from "./styles";
import { githubColorLanguages } from "../../constants";
import i18next from "i18next";
import axios from "axios";

export const RepoCards = () => {
  const [githubReposData, setGithubReposData] = useState<IGithubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState<any>([])

  const REFRESH_INTERVAL = 1000 * 60 * 60; // 1 hora

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data } = useSWR(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`,
    fetcher,
    {
      refreshInterval: REFRESH_INTERVAL,
    }
  );

  const filterAndOrderRepos = (repos: IGithubRepository[]): IGithubRepository[] => {
    return repos
      ?.filter((repo) => repo.description !== null && repo.topics.includes("project-image"))
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .reverse()
      .slice(0, 4);
  };

  const githubRepos = useMemo(() => filterAndOrderRepos(data), [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://nextfolio-db.vercel.app/api/skills"
      );

      const groupedSkills = Object.values(response.data).flat()

      setSkills(groupedSkills)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    setGithubReposData(githubRepos);
  }, [githubRepos, skills]);

  return (
    <>
      {loading ? (
        <div>
          <Loader size={50} />
        </div>
      ) : (
        skills && githubReposData?.map((repo, index: number) => {
          const filteredTechs = skills.length > 0 && skills.filter(tecnologia => {
            return repo.topics.includes(tecnologia.imgId);
          });

          return (
            <Container key={repo.name}>
              <motion.section
                className="containerStyles"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  width: `calc(100% - 100px)`,
                }}
                whileInView={{ opacity: 1, x: 0, width: `100%` }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="repoImage"
                  src={`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/refs/heads/${repo.default_branch}/.github/img_1.png`}
                  width={600}
                  height={300}
                  alt={repo.name}
                  style={index % 2 === 0 ? { left: 0 } : { right: 0 }}
                />

                <RepoData style={index % 2 === 0 ? { right: 0 } : { left: 0 }}>
                  <Title isInDevelopment={repo.topics.includes("in-development")}>
                    {repo.topics.includes("in-development") ? (
                      <IsInDevelopment>
                        <Loader color="#27272A"/>
                        <span>{i18next.t('projects.isInDevelopment')}</span>
                      </IsInDevelopment>
                    ) : <></>}
                    <div className="elementsGroup">
                      <div className="textGroup">
                        <Clock color="#27272A" />
                        <span>
                          {format(new Date(repo.created_at), "MMM dd, yyyy")}
                        </span>
                      </div>

                      <Link href={repo.html_url}>
                        <a target="_blank">
                          <GitHub color="#27272A" />
                        </a>
                      </Link>
                    </div>
                  </Title>

                  <Main>
                    <span>
                      <strong>{repo.name}</strong>
                    </span>
                    <p title={repo.description ?? ""}>{repo.description}</p>
                  </Main>

                  <UsedTechs>
                    {filteredTechs.map((tech, index: number) => {
                      return(
                        <TechCard key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                            <Image src={tech.imgSrc} alt={tech.imgAltText} height={30} width={30} />
                            <p>{tech.imgAltText}</p>
                        </TechCard>
                      )
                    })}
                  </UsedTechs>

                  <Footer>
                    <div className="textGroup">
                      <div
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          borderRadius: "50%",
                          backgroundColor: (githubColorLanguages as any)[
                            repo.language
                          ]?.color,
                        }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="textGroup">
                      <Star color="#27272A"/>
                      <span>{repo.stargazers_count}</span>
                    </div>

                    <div className="textGroup">
                      <GitBranch color="#27272A"/>
                      <span>{repo.forks_count}</span>
                    </div>
                  </Footer>
                </RepoData>
              </motion.section>
            </Container>
          );
        })
      )}
    </>
  );
};
