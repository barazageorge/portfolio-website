import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, my name is',
  title: 'George Baraza.',
  tagline: 'I craft intuitive and impactful digital experiences, blending software engineering with financial insights.',
  description:
    "My strong foundation in web development and actuarial science makes me design solutions that merge functionality with aesthetics, ensuring seamless user interactions. I'm currently exploring opportunities in fintech, consulting, and digital innovation.",
  //specialText: 'Currently available for freelance',
  cta: {
    title: 'Download Resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
    hideInMobile: true,
  },
};
