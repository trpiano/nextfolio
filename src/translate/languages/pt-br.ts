const messages = {
  ptBr: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        career: "Carreira",
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
        title: 'Sobre mim',
        content: "Prazer, me chamo Timóteo, tenho 23 anos e sou natural de Paraguaçu Paulista, mas atualmente moro em Presidente Prudente, interior de São Paulo. Sou formado em Sistema de Informação de Universidade Anhanguera, onde conclui o curso por uma bolsa integrar do PROUNI. Atuo como desenvolvedor front-end, utilizando ReactJS, NextJS, Styled-Components e outros libs. Sempre buscando me aprimorar em relação às ferramentas que trabalho e também a descobrir e aprender novas ferramentas.",
      },
      skills: {
        title: 'Habilidades',
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        hostingPlatforms: 'Plataformas de hospedagem',
        languages: 'Linguagens de programação',
        dataBases: 'Banco de dados',
        versionControl: 'Controle de versão'
      },
      career: {
        title: "Carreira",
        present: "Presente",
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
                      name: "Desenvolvedor Full-Stack na ",
                      organization: " KOR Solutions",
                      startDate: "Mai 2023",
                      endDate: "Jun 2023",
                      isFinished: true,
                      activityDescription: [
                        "Desenvolvimento de back-end com NodeJs;",
                        "Lambda e ecossistema AWS;",
                        "Implementação de infra-estrutura utilizando TerraForm.",
                        "Desenvolvimento de novas features para o sistema usando ReactJS e NextJS;",
                        "Integração com APIs Rest;",
                        "Aprimoramento do sistema legado;",
                        "Correção de bugs e melhorias de arquitetura;",
                        "Metodologia SCRUM para desenvolvimento das atividades;",
                        "Deploy utilizando Vercel e AWS Amplify",
                      ],
                    },
                  },
                  {
                    name: "Desenvolvedor Front-end",
                    description: {
                      name: "Desenvolvedor Front-end na",
                      organization: " KOR Solutions",
                      startDate: "Abr 2022",
                      endDate: "Mai 2023",
                      isFinished: true,
                      activityDescription: [
                        "Desenvolvimento de novas features para o sistema usando ReactJS e NextJS;",
                        "Integração com APIs Rest;",
                        "Aprimoramento do sistema legado;",
                        "Correção de bugs e melhorias de arquitetura;",
                        "Metodologia SCRUM para desenvolvimento das atividades;",
                        "Deploy utilizando Vercel e AWS Amplify",
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
                  startDate: "Jul 2018",
                  endDate: "Jul 2022",
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
      projects:{
        title: 'Projetos',
        viewMore: 'Ver Mais',
        isInDevelopment: 'Em desenvolvimento!'
      },
      contact: {
        title: 'Contato',
        form: {
          namePlaceholder: 'Nome',
          nameRequiredMessage: 'Nome é obrigatório',
          emailPlaceholder: 'E-mail',
          emailRequiredMessage: 'E-mail é obrigatório',
          subjectPlaceholder: 'Assunto',
          subjectRequiredMessage: 'Assunto é obrigatório',
          messagePlaceholder: 'Mensagem',
          messageRequiredMessage: 'Mensagem é obrigatória',
          sendButton: 'Enviar agora',
        },
      }
    },
  },
};

export { messages };
