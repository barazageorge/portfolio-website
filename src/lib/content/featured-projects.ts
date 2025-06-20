import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    /*{
      id: getId(),
      name: 'GetLifeGuard',
      description: 'An E-Commerce platform for Self-Defense Keychain.',
      tasks:
        "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
      url: 'https://www.getlifegard.com/',
      img: 'https://www.getlifegard.com/images/og.png',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ]
    },*/
    {
      id: getId(),
      name: 'Valuemetrix',
      description: 'An AI Powered Investment Platform.',
      tasks:'I led the end-to-end development of a fintech web platform—managing timelines, guiding a cross-functional team, establishing a reusable design system, and integrating secure Stripe payments to deliver a seamless and compliant user experience.',
      url: 'https://www.valuemetrix.io/',
      img: 'https://www.valuemetrix.io/images/og.png',
      tags: ['Tensorflow', 'Next 14', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
    {
      id: getId(),
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I led the development of Velvi Matrimony by planning the project roadmap, coordinating with the client for feedback, and implementing real-time data fetching with filtering—delivering a responsive and dynamic matchmaking platform.',
      url: 'https://velvi.vercel.app/',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
      tags: ['Next 14', 'TypeScript', 'TailwindCSS', 'REST APIs'],
    },
    
    {
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'I designed and built Drafton’s landing page and implemented its dashboard using Next.js, TypeScript, TailwindCSS, and Prisma, integrating OpenAI APIs for intelligent content generation and enabling real-time functionality through API connections.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
