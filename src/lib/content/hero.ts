import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'George Baraza.',
  tagline: 'I specialize in crafting intuitive and impactful digital experiences, blending software engineering with financial insights.',
  description:
    "My strong foundation in web development and actuarial science makes me design solutions that merge functionality with aesthetics, ensuring seamless user interactions. I'm currently exploring opportunities in fintech, consulting, and digital innovation.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
