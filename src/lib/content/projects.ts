import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'pet projects',
  projects: [
    
    {
      id: getId(),
      name: 'blogr landing page',
      url: 'https://blogr-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
      img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    
    {
      id: getId(),
      name: 'nexter',
      url: 'https://vatsalsinghkv.github.io/nexter/',
      repo: 'https://github.com/vatsalsinghkv/nexter',
      img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
      year: 2021,
      tags: ['React', 'Sass'],
    },
    
    {
      id: getId(),
      name: 'bankist marketing',
      url: 'https://vatsalsinghkv.github.io/bankist-marketing/',
      repo: 'https://github.com/vatsalsinghkv/bankist-marketing',
      img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
      year: 2021,
      tags: ['React', 'Zustand', 'JS'],
    },
  ],
};
