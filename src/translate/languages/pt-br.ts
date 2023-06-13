const messages = {
  ptBr: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        blog: "Blog",
        contact: "Contatar",
        language: "portuguese",
      },
      home: {
        title: "Oi, sou Timóteo Piano",
        description: "Desenvolvedor Front-End | Full-Stack 👨‍💻👋",
        portfolioButton: "Meu Portfolio",
      },
      about: {
        title: "",
      },
      career: {
        title: "Carreira",
        activities: [
          {
            optionName: "Experiência",
            list: [
              {
                name: "KOR Solutions",
                url: "https://kor.solutions/",
                subItems: [
                  {
                    name: "Desenvolvedor Full-Stack",
                    description: {
                      name: "Desenvolvedor Full-Stack na",
                      organization: "KOR Solutions",
                      startDate: new Date('2023-05-15'),
                      endDate: new Date('2022-06-28'),
                      isFinished: true,
                      activityDescription: [
                        "• Desenvolvimento de back-end com NodeJs;",
                        "• Lambda e ecossistema AWS;",
                        "• Implementação de infra-estrutura utilizando TerraForm.",
                        "• Desenvolvimento de novas features para o sistema usando ReactJS e NextJS;",
                        "• Integração com APIs Rest;",
                        "• Aprimoramento do sistema legado;",
                        "• Correção de bugs e melhorias de arquitetura;",
                        "• Metodologia SCRUM para desenvolvimento das atividades;",
                        "• Deploy utilizando Vercel e AWS Amplify",
                      ],
                    },
                  },
                  {
                    name: "Desenvolvedor Front-end",
                    description: {
                      name: "Desenvolvedor Front-end na",
                      organization: "KOR Solutions",
                      startDate: new Date('2022-04-18'),
                      endDate: new Date('2022-05-15'),
                      isFinished: true,
                      activityDescription: [
                        "• Desenvolvimento de novas features para o sistema usando ReactJS e NextJS;",
                        "• Integração com APIs Rest;",
                        "• Aprimoramento do sistema legado;",
                        "• Correção de bugs e melhorias de arquitetura;",
                        "• Metodologia SCRUM para desenvolvimento das atividades;",
                        "• Deploy utilizando Vercel e AWS Amplify",
                      ],
                    },
                  },
                ],
              },
            ],
          },

          {
            optionName: "Formação",
            list: [
              {
                name: "Bacharelado em Sistemas de Informação",
                url: "https://www.anhanguera.com/",
                description: {
                  name: "Bacharelado em Sistemas de Informação na ",
                  organization: "Anhanguera UniABC - Santo Andre",
                  startDate: new Date('2018-08-01'),
                  endDate: new Date('2022-08-01'),
                  isFinished: true,
                  activityDescription: [
                    "Atualmente estou cursando o curso de Ciência da Computação, buscando me aprofundar cada vez mais na área de desenvolvimento de software.",
                    "Já tive contato com diversas áreas da computação, desde suas bases teóricas até o desenvolvimento em si",
                    "Ao longo do curso, terei contato com diversas áreas da computação, como desenvolvimento web, desenvolvimento mobile, desenvolvimento de jogos, inteligência artificial, entre outras.",
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  },
};

export { messages };
