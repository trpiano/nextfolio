const birthYear: number = 1999;
const birthDate: Date = new Date(birthYear, 10, 30);

function getCurrentAge(): number {
  const currentDate: Date = new Date();
  const birthDateCopy: Date = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (currentDate < birthDateCopy) {
    birthDateCopy.setFullYear(birthDateCopy.getFullYear() - 1);
  }
  const age: number = currentDate.getFullYear() - birthDateCopy.getFullYear();
  const monthDiff: number = currentDate.getMonth() - birthDateCopy.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateCopy.getDate())) {
    return age - 1;
  } else {
    return age;
  }
}


const messages = {
  enUs: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        career: "Career",
        blog: "Blog",
        contact: "Contact",
        language: "english",
      },
      home: {
        title: "Hi, I'm Timoteo Piano",
        description: "Front End | Full stack Developer 👨‍💻👋",
        curriculumButton: "My CV",
        curriculumLink: process.env.NEXT_PUBLIC_CURRICULUM_EN_URL,
        presentationVideo: process.env.NEXT_PUBLIC_PRESENTATION_VIDEO_EN_URL
      },
      about: {
        title: 'About me',
        content: `Nice to meet you, my name is Timóteo, I'm ${getCurrentAge()} years old and I'm from Paraguaçu Paulista, I currently live in Presidente Prudente, in the interior of São Paulo. I graduated from the Information System at Universidade Anhanguera, where I completed the course with a full scholarship from PROUNI. I work as a front-end developer | full-stack, using ReactJS, NextJS, VueJS, NodeJS, AWS and others. Always looking to improve myself in relation to the tools I work with and also to discover and learn new tools.`,
      },
      skills: {
        title: 'Skills',
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        mobile: 'Mobile',
        hostingPlatforms: 'Hosting Platforms',
        languages: 'Programming Languages',
        dataBases: 'Database',
        testingLibs: 'Testing Tools',
        versionControl: 'Version Control',
        IACPlatforms: 'Infrastructure',
        cloudProviders: 'Cloud Providers'
      },
      career: {
        title: "Career",
        present: "Present",
        activities: [
          {
            optionName: "Experience",
            list: [
              {
                name: "Marcenaria Diferente",
                subItems: [
                  {
                    name: "Full Stack Developer",
                    url: "https://app.marcenariadiferente.com/",
                    description: {
                      name: "Full-Stack Developer at ",
                      organization: " Marcenaria Diferente",
                      startDate: "Aug 2023",
                      endDate: "Feb 2024",
                      isFinished: true,
                      activityDescription: [
                        "Development of new features for the system using VueJS and ReactJS;",
                        "Back-end development with NodeJs, TypeScript and OOP;",
                        "Integration with Rest APIs;",
                        "Bug fixes;",
                        "SCRUM methodology for the development of activities;",
                        "Building 3D models using ThreeJS;",
                        "Use of relational and non-relational data bases.",
                      ],
                    },
                  },
                ],
              },
              {
                name: "KOR Solutions",
                subItems: [
                  {
                    name: "Full Stack Developer",
                    url: "https://kor.solutions/",
                    description: {
                      name: "Full-Stack Developer at ",
                      organization: " KOR Solutions",
                      startDate: "May 2023",
                      endDate: "Jun 2023",
                      isFinished: true,
                      activityDescription: [
                        "Backend development with NodeJs;",
                        "Lambda and the AWS Ecosystem;",
                        "Infrastructure implementation using TerraForm;",
                        "Development of new features for the system using ReactJS and NextJS;",
                        "Integration with Rest APIs;",
                        "Legacy system enhancement;",
                        "Bug fixes and architecture improvements;",
                        "SCRUM methodology for the development of activities;",
                        "Deploy using Vercel and AWS Amplify.",
                      ],
                    },
                  },
                  {
                    name: "Front End Developer",
                    url: "https://kor.solutions/",
                    description: {
                      name: "Front End Developer at",
                      organization: " KOR Solutions",
                      startDate: "Apr 2022",
                      endDate: "May 2023",
                      isFinished: true,
                      activityDescription: [
                        "Development of new features for the system using ReactJS and NextJS;",
                        "Integration with Rest APIs;",
                        "Legacy system enhancement;",
                        "Bug fixes and architecture improvements;",
                        "SCRUM methodology for the development of activities;",
                        "Deploy using Vercel and AWS Amplify.",
                      ],
                    },
                  },
                ],
              },
              {
                name: "Grupo TB",
                subItems: [
                  {
                    name: "Technical Support Intern",
                    url: "https://grupotb.com.br/",
                    description: {
                      name: "Technical Support Intern at ",
                      organization: " Grupo TB",
                      startDate: "Apr 2019",
                      endDate: "Nov 2021",
                      isFinished: true,
                      activityDescription: [
                        "User technical support at N1, N2 and N3. Acting discreetly and in person;",
                        "Execution of projects to improve systems and internal and external tools;",
                        "Network and infrastructure adequacy;",
                        "IT equipment maintenance;",
                        "User management via Active Directory environment;",
                        "Access management on Linux: dhcp, squid, samba.",
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
                  organization: "Anhanguera UniABC - Santo Andre",
                  startDate: "Jul 2018",
                  endDate: "Jul 2022",
                  isFinished: true,
                  activityDescription: [
                    "I have a bachelor's degree in Information Systems, where I took my first steps in data structure programming and software project management;",
                    "I had contact with several programming languages from different areas within technology, from lower or high level code languages;",
                    "Throughout the course, I will have contact with several areas of computing, such as web development, mobile development, game development, artificial intelligence, among others.",
                  ],
                },
              },
            ],
          },
        ],
      },
      projects: {
        title: 'Projects',
        viewMore: 'View more',
        isInDevelopment: 'In development!'
      },
      contact: {
        title: 'Contact',
        form: {
          namePlaceholder: 'Name',
          nameRequiredMessage: 'Name is required',
          emailPlaceholder: 'E-mail',
          emailRequiredMessage: 'E-mail is required',
          subjectPlaceholder: 'Subject',
          subjectRequiredMessage: 'Subject is required',
          messagePlaceholder: 'Message',
          messageRequiredMessage: 'Message is required',
          companyPlaceholder: 'Company',
          sendButton: 'Send now',
        },
      }
    },
  },
};

export { messages };
