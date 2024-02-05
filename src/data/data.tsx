import {AcademicCapIcon, CalendarIcon, FlagIcon, MapIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {isMobile} from '../config';
import profilepic from '../images/ethan.jpg';
import heroImage from '../images/header-background.png';
import meVR from '../images/me_vr.png';
import chi2023 from '../images/portfolio/chi_2023.png';
import contextConf from '../images/portfolio/context_conf.png';
import libemg from '../images/portfolio/libemg.png';
import percussionHero from '../images/portfolio/percussion_hero.png';
import {About, Hero, HomepageMeta, PortfolioItem, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ethan Eddy',
  description: "Ethan Eddy's portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'publications',
  Resume: 'resume',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
let hd: Hero;
if (isMobile) {
  hd = {
    imageSrc: meVR,
    name: `Ethan Eddy`,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I'm a P.h.D. Student at the University of New Brunswick in Fredericton, NB Canada. My research interests
          include human-computer interaction, ubiquitous computing, mixed reality, machine learning, and myoelectric
          control.
        </p>
      </>
    ),
    actions: [],
  };
} else {
  hd = {
    imageSrc: heroImage,
    name: `Ethan Eddy`,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I'm a P.h.D. Student at the University of New Brunswick in Fredericton, NB Canada. My research interests
          include human-computer interaction, ubiquitous computing, mixed reality, machine learning, and myoelectric
          control.
        </p>
      </>
    ),
    actions: [],
  };
}
export const heroData: Hero = hd;

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
    venue: 'Contextually Informed Adaptation',
    title: 'IEEE SMC (2023)',
    description: 'Leveraging Task-Specific Context to Improve Unsupervised Adaptation for Myoelectric Control',
    url: 'https://ieeexplore.ieee.org/document/10394393',
    image: contextConf,
  },
  {
    venue: 'LibEMG: An Open Source Library',
    title: 'IEEE Access (2023)',
    description: 'LibEMG: An Open Source Library to Facilitate the Exploration of Myoelectric Control',
    url: 'https://ieeexplore.ieee.org/document/10214558',
    image: libemg,
  },
  {
    venue: 'The Future of EMG-Based Input in HCI',
    title: 'CHI (2023)',
    description: 'A Framework and Call to Action for the Future Development of EMG-Based Input in HCI',
    url: 'https://dl.acm.org/doi/abs/10.1145/3544548.3580962',
    image: chi2023,
  },
  {
    venue: 'Percussion Hero: A Serious Game',
    title: 'CHI Play (2021)',
    description: 'Percussion Hero: A Chest Physical Therapy Game for People with Cystic Fibrosis and their Caregivers',
    url: 'https://dl.acm.org/doi/10.1145/3450337.3483508',
    image: percussionHero,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'University of New Brunswick',
    title: 'P.h.D in Electrical and Computer Engineering',
    content: (
      <div>
        <p>Focusing on EMG-based control for ubiquitous hands-free input.</p>
        <p></p>
        <p>Cumulative GPA: 4.3 / 4.3</p>
      </div>
    ),
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
        <li>
          - Developed a <i>serious game</i> to promote therapy adherence for adolescents with Cystic Fibrosis.
        </li>
        <li>- Primary tasks were C# development in Unity and technical research/writing.</li>
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
    content: (
      <p>
        Publication: “Percussion Hero: A Chest Physical Therapy Game for People with Cystic Fibrosis and their
        Caregivers
      </p>
    ),
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
    content: (
      <p>Awarded to the top Software Engineering capstone design project for the engineering department at UNB.</p>
    ),
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/eeddy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ethan-eddy-49079719b/'},
  {
    label: 'GoogleScholar',
    Icon: GoogleScholarIcon,
    href: 'https://scholar.google.com/citations?hl=en&user=z7_82nsAAAAJ',
  },
];
