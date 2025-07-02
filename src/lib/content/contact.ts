import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  //subtitle: "what's next",
  paragraphs: [
    'I’m open to freelance, remote, or full-time opportunities in software engineering, fintech, or consulting.',
    'If you have a project, collaboration, or just want to say hello, feel free to reach out. My inbox is always open.',
  ],
  link: `mailto:${author.email}`,
};
