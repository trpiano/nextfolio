import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";

import { Clock, GitBranch, GitHub, Star, Loader } from "react-feather";

import { motion } from "framer-motion";

//types
import { IGithubRepository } from "../../models";
import useSWR from "swr";

import { Container, Footer, Main, RepoData, Title, IsInDevelopment } from "./styles";
import { githubColorLanguages } from "../../constants";
import i18next from "i18next";

export const RepoCards = () => {
  const [githubReposData, setGithubReposData] = useState<IGithubRepository[]>(
    []
  );

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
      .reverse()
      .slice(0, 3);
  };

  const githubRepos = useMemo(() => filterAndOrderRepos(data), [data]);

  useEffect(() => {
    setGithubReposData(githubRepos);
  }, [githubRepos]);

  return (
    <>
      {githubReposData?.map((repo, index: number) => {
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
                src={`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/main/.github/img_1.png`}
                width={600}
                height={300}
                alt={repo.name}
                style={index % 2 === 0 ? { left: 0 } : { right: 0 }}
                onError={(e) => {
                  const imageElement = e.target as HTMLImageElement;
                  imageElement.src = `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/main/.github/img_1.jpeg`;
                }}
              />

              <RepoData style={index % 2 === 0 ? { right: 0 } : { left: 0 }}>
                <Title isInDevelopment={repo.topics.includes("in-development")}>
                  {repo.topics.includes("in-development") ? (
                    <IsInDevelopment>
                      <Loader />

                      <span>{i18next.t('projects.isInDevelopment')}</span>
                    </IsInDevelopment>
                  ) : <></>}
                  <div className="elementsGroup">
                    <div className="textGroup">
                      <Clock />

                      <span>
                        {format(new Date(repo.updated_at), "MMM dd, yyyy")}
                      </span>
                    </div>

                    <Link href={repo.html_url}>
                      <a target="_blank">
                        <GitHub />
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
                    <Star />

                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="textGroup">
                    <GitBranch />

                    <span>{repo.forks_count}</span>
                  </div>
                </Footer>
              </RepoData>
            </motion.section>
          </Container>
        );
      })}
    </>
  );
};
