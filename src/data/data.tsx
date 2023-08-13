import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import percussionHero from '../images/portfolio/percussion_hero.png';
import chi2023 from '../images/portfolio/chi_2023.png';
import libemg from '../images/portfolio/libemg.png';
import profilepic from '../images/ethan.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'publications',
  Resume: 'resume',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ethan Eddy`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Ph.D. student in electrical and computer engineering at the University of New Brunswick. As part of the Institute of Biomedical Engineering, the Human-Computer Interaction (HCI) Lab, and the Spatial Computing Training and Research (SPECTRAL) Lab, my research interests include human-computer interaction, ubiquitous computing, mixed reality, machine learning, and myoelectric control.`,
  aboutItems: [
    {label: 'Location', text: 'Fredericton, NB', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'School', text: 'University of New Brunswick', Icon: AcademicCapIcon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    venue: 'IEEE Access (2023)',
    title: 'LibEMG',
    description: 'LibEMG: An Open Source Library to Facilitate the Exploration of Myoelectric Control',
    url: 'https://ieeexplore.ieee.org/document/10214558',
    image: libemg,
  },
  {
    venue: 'CHI (2023)',
    title: 'Future of EMG-Based Input',
    description: 'A Framework and Call to Action for the Future Development of EMG-Based Input in HCI',
    url: 'https://dl.acm.org/doi/abs/10.1145/3544548.3580962',
    image: chi2023,
  },
  {
    venue: 'CHI Play (2021)',
    title: 'Percussion Hero',
    description: 'Percussion Hero: A Chest Physical Therapy Game for People with Cystic Fibrosis and their Caregivers',
    url: 'https://dl.acm.org/doi/10.1145/3450337.3483508',
    image: percussionHero,
  },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'University of New Brunswick',
    title: 'P.h.D in Electrical and Computer Engineering',
    content: <div><p>Focusing on EMG-based input for general-purpose applications.</p><p></p><p>Cumulative GPA: 4.3 / 4.3</p></div>,
  },
  {
    date: 'April 2021',
    location: 'University of New Brunswick',
    title: 'Bachelor of Science in Software Engineering',
    content: <p>Cumulative GPA: 4.2 / 4.3</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2021 – August 2021',
    location: 'Human Computer Interaction Lab, University of New Brunswick',
    title: 'Research Assistant',
    content: (
      <ul>
        <li>- Developed a video game to assist adolescents with Cystic Fibrosis.</li>
        <li>- Primary tasks were C# development in Unity and technical research/writing for CHI Play 2021 conference paper.</li>
      </ul>
    ),
  },
  {
    date: 'May 2020 – August 2020',
    location: 'IBM Fredericton',
    title: 'Software Developer ',
    content: (
      <ul>
        <li>- Defect fixes and feature enhancements using Java, Bash, and Python.</li>
        <li>- Web development using React to create an ease-of-use application.</li>
      </ul>
    ),
  },
  {
    date: 'January 2019 – August 2019	',
    location: 'IBM Fredericton',
    title: 'Software Developer ',
    content: (
      <ul>
        <li>- Defect fixes and feature enhancements using Rust, Go, Groovy and Bash.</li>
        <li>- Integral part of the rewrite of a Linux system command line interface tool from Go to Rust. </li>
      </ul>
    ),
  },
  {
    date: 'June 2018 – August 2018	',
    location: 'Department of Transportation - GNB  ',
    title: 'Summer Student',
    content: (
      <ul>
        <li>- Developed excel macros using VBA to improve internal processes.</li>
        <li>- Participated and helped in improving processes for different government teams. </li>
      </ul>
    ),
  },
  {
    date: 'January 2018 – April 2018',
    location: 'IBM Fredericton',
    title: 'Quality Engineer',
    content: (
      <ul>
        <li>- Developed and implemented tests for new defect fixes and features.</li>
        <li>- Automation testing using Geb and Groovy. </li>
      </ul>
    ),
  },
];

export const awards: TimelineItem[] = [
  {
    date: '2021 ',
    location: 'CHI Play',
    title: 'Student Game Design Competition - Best Game',
    content: <p>Publication: “Percussion Hero: A Chest Physical Therapy Game for People with Cystic Fibrosis and their Caregivers</p>,
  },
  {
    date: '2021',
    location: 'University of New Brunswick',
    title: 'Canada Graduate Scholarships – Master’s NSERC ',
    content: <p></p>,
  },
  {
    date: '2021',
    location: 'University of New Brunswick',
    title: 'David MacNeil Prize ',
    content: <p>Awarded to the top Software Engineering capstone design project for the engineering department at UNB.</p>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'eeddy',
      href: 'https://github.com/eeddy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/eeddy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ethan-eddy-49079719b/'},
  {label: 'GoogleScholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?hl=en&user=z7_82nsAAAAJ'},
];
