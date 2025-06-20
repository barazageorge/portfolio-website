import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i have worked",
  experiences: [
    {
      company: 'Ela Techlabs',
      companyUrl: 'https://www.syscraft.co.ke/',
      role: 'software engineer',
      started: 'July 2025',
      upto: 'present',
      tasks: [
        'Increased front-end scalability by implementing modular UI components using React, Next.js, TypeScript, and Tailwind CSS, which led to a 40% reduction in development time for new features..',
        'Enhanced design consistency by developing and maintaining a centralized design system, resulting in a more efficient handoff between designers and developers and minimizing UI discrepancies.',
        'Boosted client satisfaction and delivery efficiency by actively engaging with stakeholders, strategizing development roadmaps, and proposing tailored solutions—leading to successful launch of a client-facing SaaS platform ahead of schedule..',
        'Led a cross-functional team of 5 developers and designers to build a SaaS product from concept to deployment, which improved product usability and achieved a 20% increase in user retention within the first three months.',
      ],
    },
    {
      company: 'Upwork',
      companyUrl: 'https://www.upwork.com/',
      role: 'freelance software engineer',
      started: 'march 2025',
      upto: 'may 2025',
      tasks: [
        'Improved operational efficiency for financial service clients by creating custom dashboards and web solutions, which streamlined reporting workflows and reduced manual processing time.',
        'Enhanced executive decision-making by applying actuarial thinking to design interactive data visualizations of KPIs and business trends, resulting in more accurate performance tracking and strategic planning insights..',
        'Accelerated project delivery by 30% by setting up reusable front-end components and backend templates, allowing faster turnaround for client requests across multiple financial dashboards.',
        'Improved client reporting accuracy by integrating real-time data fetching and validation logic, which reduced manual errors and boosted stakeholder trust in the platform’s insights.'
      ],
    },
    {
      company: 'Syscraft Limited',
      companyUrl: 'https://syscraft.co.ke/',
      role: 'software development intern',
      started: 'may 2023',
      upto: 'august 2023',
      tasks: [
        'Customized ERP modules on Odoo, improving business operations for SMEs, with emphasis on risk tracking and process audit trails..',
        'Built a philanthropic donation tracker using React and Firebase—highlighting transparency and auditability, key principles in risk assessment.',
        'Developed and maintained a personal portfolio showcasing projects that blend tech and data analytics on GitHub.',
        'Facilitated knowledge transfer by creating internal guides and technical documentation for custom Odoo features, making it easier for the team to onboard future interns or junior developers.',
      ],
    },
  ],
};
