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
        curriculumButton: "Meu Currículo",
        curriculumLink: process.env.NEXT_PUBLIC_CURRICULUM_PT_URL,
        presentationVideo: process.env.NEXT_PUBLIC_PRESENTATION_VIDEO_PT_URL
      },
      about: {
        title: 'Sobre mim',
        content: "Prazer, me chamo Timóteo, tenho 23 anos e sou natural de Paraguaçu Paulista, mas atualmente moro em Presidente Prudente, interior de São Paulo. Sou formado em Sistema de Informação de Universidade Anhanguera, onde conclui o curso por uma bolsa integrar do PROUNI. Atuo como desenvolvedor front-end, utilizando ReactJS, NextJS, Styled-Components e outros libs. Sempre buscando me aprimorar em relação às ferramentas que trabalho e também a descobrir e aprender novas ferramentas.",
      },
      skills: {
        title: 'Habilidades',
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        hostingPlatforms: 'Plataformas de Hospedagem',
        languages: 'Linguagens de Programação',
        dataBases: 'Banco de Dados',
        testingLibs: 'Ferramentas de Teste',
        versionControl: 'Controle de Versão',
        IACPlatforms: 'Infraestrutura',
        cloudProviders: 'Provedores Cloud'
      },
      career: {
        title: "Carreira",
        present: "Presente",
        activities: [
          {
            optionName: "Experiência",
            list: [
              {
                name: "Marcenaria Diferente",
                subItems: [
                  {
                    name: "Desenvolvedor Full-Stack",
                    url: "https://app.marcenariadiferente.com/",
                    description: {
                      name: "Desenvolvedor Full-Stack na ",
                      organization: " Marcenaria Diferente",
                      startDate: "Aug 2023",
                      endDate: "Fev 2024",
                      isFinished: true,
                      activityDescription: [
                        "Desenvolvimento de novas funcionalidades para o sistema utilizando VueJS e ReactJS;",
                        "Desenvolvimento back-end com NodeJs, TypeScript e POO;",
                        "Integração com APIs Rest;",
                        "Correções de bugs;",
                        "Metodologia SCRUM para desenvolvimento de atividades;",
                        "Construindo modelos 3D usando ThreeJS;",
                        "Uso de bancos de dados relacionais e não relacionais.",
                      ],
                    },
                  },
                ],
              },
              {
                name: "KOR Solutions",
                subItems: [
                  {
                    name: "Desenvolvedor Full-Stack",
                    url: "https://kor.solutions/",
                    description: {
                      name: "Desenvolvedor Full-Stack na ",
                      organization: " KOR Solutions",
                      startDate: "Mai 2023",
                      endDate: "Jun 2023",
                      isFinished: true,
                      activityDescription: [
                        "Desenvolvimento de back-end com NodeJs;",
                        "Lambda e ecossistema AWS;",
                        "Implementação de infra-estrutura utilizando TerraForm;",
                        "Desenvolvimento de novas features para o sistema usando ReactJS e NextJS;",
                        "Integração com APIs Rest;",
                        "Aprimoramento do sistema legado;",
                        "Correção de bugs e melhorias de arquitetura;",
                        "Metodologia SCRUM para desenvolvimento das atividades;",
                        "Deploy utilizando Vercel e AWS Amplify.",
                      ],
                    },
                  },
                  {
                    name: "Desenvolvedor Front-end",
                    url: "https://kor.solutions/",
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
                        "Deploy utilizando Vercel e AWS Amplify.",
                      ],
                    },
                  },
                ],
              },
              {
                name: "Grupo TB",
                subItems: [
                  {
                    name: "Estagiário de Suporte Técnico",
                    url: "https://grupotb.com.br/",
                    description: {
                      name: "Estagiário de Suporte Técnico no ",
                      organization: " Grupo TB",
                      startDate: "Abr 2019",
                      endDate: "Nov 2021",
                      isFinished: true,
                      activityDescription: [
                        "Suporte técnico ao usuário em N1, N2 e N3. Atuando discretamente e presencialmente;",
                        "Execução de projetos de melhoria de sistemas e ferramentas internas e externas;",
                        "Adequação de rede e infraestrutura;",
                        "Manutenção de equipamentos de TI;",
                        "Gerenciamento de usuários via ambiente Active Directory;",
                        "Gerenciamento de acesso em Linux: dhcp, squid, samba.",
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
                    "Sou bacharel em Sistemas de Informação, onde tive meus primeiros passo em programação estrutura de dados e gestão de projetos de software;",
                    "Tive contato com varias linguagens de programação de diferentes area dentro de tecnologia, desde linguagens de código mais baixo ou alto nível;",
                    "Ao longo do curso tive também contato com outras areas de tecnologia como redes, segurança da informação, gerenciamento e processamento de dados e etc.",
                  ],
                },
              },
            ],
          },
        ],
      },
      projects: {
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
          companyPlaceholder: 'Empresa',
          sendButton: 'Enviar agora',
        },
      }
    },
  },
};

export { messages };
