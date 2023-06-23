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
                title: 'About me',
                content: "Nice to meet you, my name is Timóteo, I'm 23 years old and I'm from Paraguaçu Paulista, but I currently live in Presidente Prudente, in the interior of São Paulo. I graduated in Information System from Anhanguera University, where I completed the course through a PROUNI scholarship. I work as a front-end developer, using ReactJS, NextJS, Styled-Components and other libs. Always looking to improve myself in relation to the tools I work with and also to discover and learn new tools."
            },
            skills: {
                frontEnd: 'Front-end',
                backEnd: 'Back-end',
                hostingPlatforms: 'Hosting Platforms',
                languages: 'Programming Languages',
                dataBases: 'DataBase',
                versionControl: 'Version Control'
            },
            career: {
                title: "Career",
                present: "Present",
                activities: [
                    {
                        optionName: "Experience",
                        list: [
                            {
                                name: "KOR Solutions",
                                url: "https://kor.solutions/",
                                subItems: [
                                    {
                                        name: "Full Stack Developer",
                                        description: {
                                            name: "Full-Stack Developer at ",
                                            organization: " KOR Solutions",
                                            startDate: "May 2023",
                                            endDate: "Jun 2023",
                                            isFinished: true,
                                            activityDescription: [
                                                "Back-end development with NodeJs;",
                                                "Lambda and AWS ecosystem;",
                                                "Infrastructure implementation using TerraForm;",
                                                "Development of new features for the system using ReactJS and NextJS;",
                                                "Integration with Rest APIs;",
                                                "Improvement of the legacy system;",
                                                "Bug fixes and architecture improvements;",
                                                "SCRUM methodology for the development of activities;",
                                                "Deploy using Vercel and AWS Amplify.",
                                            ],
                                        },
                                    },
                                    {
                                        name: "Front End Developer",
                                        description: {
                                            name: "Front End Developer at",
                                            organization: " KOR Solutions",
                                            startDate: "Apr 2022",
                                            endDate: "May 2023",
                                            isFinished: true,
                                            activityDescription: [
                                                "Development of new features for the system using ReactJS and NextJS;",
                                                "Integration with Rest APIs;",
                                                "Improvement of the legacy system;",
                                                "Bug fixes and architecture improvements;",
                                                "SCRUM methodology for the development of activities;",
                                                "Deploy using Vercel and AWS Amplify.",
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },

                    {
                        optionName: "Education",
                        list: [
                            {
                                name: "Bachelor of Information Systems",
                                url: "https://www.anhanguera.com/",
                                description: {
                                    name: "Bachelor of Information Systems at ",
                                    organization: "Anhanguera UniABC - Santo André",
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
            projects: {
                title: 'Projetos',
                viewMore: 'Ver Mais'
            }
        }
    }
}

export { messages }