import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Crafting scalable and intuitive web applications using React.js, Next.js, and TypeScript, ensuring seamless user experiences.',
        'Applying actuarial expertise in financial modeling, risk assessment, and digital transformation strategies.',
        'Customizing ERP modules and enhancing financial services solutions through strategic software engineering.',
        'Developing efficient back-end systems with Express.js, Prisma, and Firebase, supporting data-driven applications.'
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Creating intuitive and business-driven interfaces that enhance user experience and functionality.',
        'Developing scalable design systems and style guides to ensure consistency across financial and enterprise applications.',
        'Optimizing user flows and accessibility for fintech and business solutions, leveraging Figma for structured prototyping and implementation.',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};
