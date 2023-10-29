import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import chatAppImg from '../assets/images/chatapp.png'
import blogSiteImg from '../assets/images/blogsite.png'

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
    githubRepo: 'https://github.com/kartikjoshi267/BlogSite',
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
]

const experiences = [
  {
    designation: 'Open Source Contributor',
    organization: 'HacktoberFest 2022',
    start: 'OCT 2022',
    end: 'OCT 2022',
    description: `Open source contribution encourages collaboration among developers around the world. Contributing to open source projects is an excellent way to enhance your programming skills. Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.`,
  },
  {
    designation: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code 2023',
    start: 'MAY 2023',
    end: 'JUL 2023',
    description: `Open source contribution encourages collaboration among developers around the world. Contributing to open source projects is an excellent way to enhance your programming skills. Potential employers or clients often look for evidence of your ability to work in a team, write quality code, and contribute to open source projects.`,
  },
]

experiences.reverse()
export { experiences }
