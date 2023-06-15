const messages = {
    enUs: {
        translation: {
            navbar: {
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                blog: "Blog",
                contact: "Contact",
                language: 'english'
            },
            home: {
                title: "Hi, I am Timóteo Piano",
                description: "Front-End | Full-Stack Developer 👨‍💻👋",
                portfolioButton: "My Portfolio",
            },
            about: {
                title: ""
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
        }
    }
}

export { messages }