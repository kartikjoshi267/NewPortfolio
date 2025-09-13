import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import chatAppImg from '../assets/images/chatapp.png'
import blogSiteImg from '../assets/images/blogsite.png'
import discordImg from '../assets/images/discord.png'
import myKhataImg from '../assets/images/mykhata.png'
import * as skillIcons from './skills'

export const skills = Object.values(skillIcons);

export const navLinks = [
  {
    name: 'ABOUT',
    path: ['/#about', '/'],
  },
  {
    name: 'EXPERIENCE',
    path: ['/#experience'],
  },
  {
    name: 'SKILLS',
    path: ['/#skills'],
  },
  {
    name: 'PROJECTS',
    path: ['/#projects'],
  },
  {
    name: 'CONTACT',
    path: ['/#contact'],
  },
]

export const socialHandles = [
  {
    name: 'github',
    url: 'https://github.com/kartikjoshi267',
    icon: faGithub,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/kartik-joshi-364b59225/',
    icon: faLinkedinIn,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/KartikJ74422563',
    icon: faTwitter,
  },
]

export const projects = [
  {
    name: 'MyKhata',
    image: myKhataImg,
    url: 'https://expense-tracker-frontend-production-cd49.up.railway.app/',
    githubRepo: 'https://github.com/kartikjoshi267/expense-tracker',
    description: `An expense tracker utility for creating and managing your expenses. It is a full stack web application built using M E R N stack. It allows users to add, delete and update their expenses. The application also provides a graphical representation of the expenses in the form of a pie chart. (The web application is hosted on a free server so it takes a lot of time to load)`,
    languages: [
      'React.js',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Express',
      'TailwindCSS',
      'Apache ECharts',
    ],
  },
  {
    name: 'BlogSite',
    image: blogSiteImg,
    url: 'https://blogsite-server-aauw.onrender.com',
    githubRepo: 'https://github.com/kartikjoshi267/BlogSite',
    description: `A blogging website, built using M E R N stack, is a platform where people can write blogs and share their experiences and ideas with other people in the community. The editor in the application is a rich text editor that makes the writing experience more efficient. (The web application is hosted on a free server so it takes a lot of time to load)`,
    languages: [
      'React.js',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Express',
      'TailwindCSS',
    ],
  },
  {
    name: 'ChatApp',
    image: chatAppImg,
    url: 'https://chat-app-service-fjeh.onrender.com',
    githubRepo: 'https://github.com/kartikjoshi267/mern-chat-app',
    description: `This real-time chat application is a web application built using M E R N stack. It offers real time chatting functionality with friends along with searching other users. (The web application is hosted on a free server so it takes a lot of time to load)`,
    languages: [
      'React.js',
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Express',
      'Chakra-UI',
      'Socket.IO',
    ],
  },
  {
    name: 'Discord Clone',
    image: discordImg,
    url: '',
    githubRepo: 'https://github.com/kartikjoshi267/discord-clone',
    description: `This real-time chat application is a web application built using Next.js. It offers real time chatting functionality with friends and also allows users to create servers and channels and manage them. Also there is a functionality for video and voice calls.`,
    languages: [
      'React.js',
      'Next.js',
      'TypeScript',
      'MySQL',
      'Prisma',
      'Tailwind CSS',
      'Socket.IO',
    ],
  },
]

const experiences = [
  // {
  //   designation: 'Open Source Contributor',
  //   organization: 'HacktoberFest 2022',
  //   start: 'OCT 2022',
  //   end: 'OCT 2022',
  //   description: `Open source contribution encourages collaboration among developers around the world. Contributing to open source projects is an excellent way to enhance your programming skills. Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.`,
  // },
  // {
  //   designation: 'Open Source Contributor',
  //   organization: 'GirlScript Summer of Code 2023',
  //   start: 'MAY 2023',
  //   end: 'JUL 2023',
  //   description: `Open source contribution encourages collaboration among developers around the world. Contributing to open source projects is an excellent way to enhance your programming skills. Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.`,
  // },
  {
    designation: 'Web Development Intern',
    organization: 'Seequenze Technologies Pvt. Ltd.',
    start: 'JAN 2024',
    end: 'MAR 2024',
    description: `Addressed bugs and introduced new features like integration of GitHub and Google OAuth. Worked on error handling tasks. Worked on AWS S3 to optimize data storage and retrieval processes within Necleo. Worked with DynamoDB to store some essential details with varied schema. Worked on code generation figma plugin for Necleo. Helped in re-designing the UI of the plugin. Involved in development of a Jenkins pipeline.`,
  },
  {
    designation: 'Graduate Engineer Trainee',
    organization: 'Yamaha Motor Solutions India Ltd.',
    start: 'JAN 2025',
    end: 'JUL 2025',
    description: ``,
  },
  {
    designation: 'Associate Software Engineer',
    organization: 'Yamaha Motor Solutions India Ltd.',
    start: 'JUL 2025',
    end: 'PRESENT',
    description: `Working on SAP ABAP development including RICEFW, ALV, OOABAP, OData, RAP, and Fiori. Developed ABAP reports for business requirements of Yamaha Motor Co. Ltd.`,
  },
]

experiences.reverse()
export { experiences }

export const resumeLink = "https://drive.google.com/file/d/1WiapBjZh2Rn0kEjgv84Y5w_QTPE6-gnk/view?usp=drive_link";