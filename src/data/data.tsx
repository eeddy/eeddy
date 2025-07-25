import {AcademicCapIcon, CalendarIcon, MapIcon, PencilIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {isMobile} from '../config';
import profilepic from '../images/ethan.png';
import heroImage from '../images/header-background.jpg';
import meVR from '../images/me_vr.png';
import bigdata from '../images/portfolio/bigdata.png';
import biopoint from '../images/portfolio/biopoint.png'
import chi2023 from '../images/portfolio/chi_2023.png';
import ciil from '../images/portfolio/ciil.png';
import ciil_regression from '../images/portfolio/ciil_regression.png';
import ciil2 from '../images/portfolio/ciil2.png';
import confounds from '../images/portfolio/confounds.png';
import contextConf from '../images/portfolio/context_conf.png';
import libemg from '../images/portfolio/libemg.png';
import lstmPush from '../images/portfolio/lstm_push.png'
import percussionHero from '../images/portfolio/percussion_hero.png';
import ww from '../images/portfolio/wake_word.png';
import wrist_v_forearm from '../images/portfolio/wrist_v_forearm.png'
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
          I'm a PhD Student at the University of New Brunswick in Fredericton, NB Canada. My research interests
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
          I'm a PhD Student at the University of New Brunswick in Fredericton, NB Canada. My research interests
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
  description: `I am a Ph.D. student in Electrical Engineering at the University of New Brunswick. As part of the Institute of Biomedical Engineering, the Human-Computer Interaction (HCI) Lab, and the Spatial Computing Training and Research (SPECTRAL) Lab, my research interests include human-computer interaction, ubiquitous computing, mixed reality, machine learning, and myoelectric control.`,
  aboutItems: [
    {label: 'Location', text: 'Fredericton, NB', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'School', text: 'University of New Brunswick', Icon: AcademicCapIcon},
    {label: 'Email', text: 'eeddy@unb.ca', Icon: PencilIcon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    venue: 'User-in-the-Loop Training for Regression',
    title: 'IEEE Transactions on Neural Systems and Rehabilitation Engineering',
    description: 'Context-Informed Incremental Learning Improves Throughput and Reduces Drift in Regression-Based Myoelectric Control',
    url: 'Context-Informed Incremental Learning Improves Throughput and Reduces Drift in Regression-Based Myoelectric Control',
    image: ciil_regression,
  },
  {
    venue: 'Learning Myoelectric Control Mappings From Scratch',
    title: 'IEEE Transactions on Neural Systems and Rehabilitation Engineering',
    description: 'Screen Guided Training Does Not Capture Goal-Oriented Behaviours: Learning Myoelectric Control Mappings From Scratch Using CIIL',
    url: 'https://ieeexplore.ieee.org/abstract/document/10802919',
    image: ciil2,
  },
  {
    venue: 'Eliminating False Activations During ADLs',
    title: 'IEEE BioRob (2024)',
    description: 'Human-Machine Interaction Using Discrete Myoelectric Control: Contrastive Learning Reduces False Activations During Activities of Daily Living',
    url: 'https://ieeexplore.ieee.org/document/10719934',
    image: lstmPush,
  },
  {
    venue: 'Single Site Gesture Recognition',
    title: 'IEEE Sensor Letters',
    description: 'Discrete Gesture Recognition Using Multi-Modal PPG, IMU, and Single-Channel EMG Recorded at the Wrist',
    url: 'https://doi.org/10.1109/LSENS.2024.3447240',
    image: biopoint,
  },
  {
    venue: 'Wrist vs. Forearm Myolectric Control: An Online Study',
    title: 'Journal of Neural Engineering',
    description: 'Comparing online wrist and forearm EMG-based control using a rhythm game-inspired evaluation environment',
    url: 'https://doi.org/10.1088/1741-2552/ad692e',
    image: wrist_v_forearm,
  },
  {
    venue: 'Big Data for Cross-User Myoelectric Control',
    title: 'Frontiers in Bioengineering and Biotechnology',
    description: 'Big Data in Myoelectric Control: Large Multi-User Models Enable Robust Zero-Shot EMG-based Discrete Gesture Recognition',
    url: 'https://doi.org/10.3389/fbioe.2024.1463377',
    image: bigdata,
  },
  {
    venue: 'Confounding Factors for Discrete Myoelectric Control',
    title: 'Journal of Neural Engineering',
    description: 'Understanding the influence of confounding factors in myoelectric control for discrete gesture recognition',
    url: 'https://doi.org/10.1088/1741-2552/ad4915',
    image: confounds,
  },
  {
    venue: 'Context Informed Incremental Learning (CIIL)',
    title: 'Journal of NeuroEngineering and Rehabilitation',
    description: 'Context-informed incremental learning improves both the performance and resilience of myoelectric control',
    url: 'https://doi.org/10.1186/s12984-024-01355-4',
    image: ciil,
  },
  {
    venue: 'On-Demand Myoelectric Control',
    title: 'Journal of Neural Engineering',
    description: 'EMG-based wake gestures eliminate false activations during out-of-set activities of daily living: An online myoelectric control study',
    url: 'https://doi.org/10.1088/1741-2552/ada4df',
    image: ww,
  },
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
    title: 'PhD in Electrical and Computer Engineering',
    content: (
      <div>
        <p>EMG-based control for ubiquitous hands-free input.</p>
      </div>
    ),
  },
  {
    date: 'April 2021',
    location: 'University of New Brunswick',
    title: 'Bachelor of Science in Software Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2025 – July 2025',
    location: 'Université de Lille (France)',
    title: 'Visiting Researcher',
    content: (
      <ul>
        <li>
          - Explored improving transfer functions for desktop pointing.
        </li>
      </ul>
    ),
  },
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
    date: '2025',
    location: 'France Canada Culture',
    title: 'High Level Scientific Fellowship (Declined)',
    content: <p>$7,000</p>,
  },
  {
    date: '2025',
    location: 'MITACS',
    title: 'Globalink Research Award ',
    content: <p>$6,000</p>,
  },
  {
    date: '2024',
    location: 'University of New Brunswick',
    title: 'Canada Graduate Scholarships – PHD NSERC ',
    content: <p>$120,000</p>,
  },
  {
    date: '2021 ',
    location: 'CHI Play',
    title: 'Best Game - Student Game Design Competition',
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
    content: <p>$17,500</p>,
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

export const talks: TimelineItem[] = [
  {
    date: '2025',
    location: 'From Prosthetics to Human-Computer Interactions: Advances and Trends in Myoelectric Control',
    title: 'Delsys Global Webinar (Invited Speaker)',
    content: <p></p>,
  }, 
  {
    date: '2024',
    location: 'Enabling EMG for Robust and Reliable Human-Computer Interaction: Real-World Challenges and Practicality',
    title: 'Université de Lille (Research Talk)',
    content: <p></p>,
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
