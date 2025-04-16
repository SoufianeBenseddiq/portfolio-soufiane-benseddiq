import { Project } from 'src/app/models/project.interface';

export const projects: Project[] = [
  {
    id: '1',
    title: 'FreelanceConnect',
    tags: ['Angular', 'TypeScript', 'Tailwind', 'PHP', 'SQL'],
    description:
      'FreelanceConnect is a web platform that connects clients with freelancers. Clients can post missions, review applications, and manage their projects and favorite freelancers. Freelancers can explore all available missions, apply to unassigned ones, and showcase their full profile including experiences, skills, and portfolio. The platform includes personalized dashboards and is built using Angular, Tailwind CSS, and PHP (REST API).',
    url: 'https://www.linkedin.com/posts/soufiane-benseddiq-3755491a8_je-suis-ravi-de-partager-avec-vous-mon-deuxi%C3%A8me-activity-7315302975256576000-77xs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADB9fskBP-IQuofQK1ixZ_xRNepPEfnm5-o',
    repo: '',
  },
  {
    id: '2',
    title: 'LocoAuto',
    tags: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
    description:
      'LocoAuto is a web-based car rental platform that allows clients to browse and filter available cars by price, brand, category, number of bags, and passengers. Users can book a car for a specific period and choose a delivery location where a driver will bring the car and later pick it up. The admin interface allows full management of cars, drivers, and reservations, including assigning a driver before confirming a booking. The project was built using React, PHP, MySQL, and Tailwind CSS.',
    url: 'https://www.linkedin.com/posts/soufiane-benseddiq-3755491a8_je-suis-ravi-de-partager-avec-vous-mon-projet-activity-7289223212855447552-0_xM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADB9fskBP-IQuofQK1ixZ_xRNepPEfnm5-o',
    repo: 'https://github.com/USpiri/raices-nativas',
  },
  {
    id: '3',
    title: 'Radema Task Manager',
    tags: ['Angular', 'Spring Boot', 'TypeScript', 'Java'],
    description:
      'Radema Task Manager is an enterprise-level system for managing vacancy requests, internal informative posts, and employee records (including salary management). I’m currently developing front‑end and back‑end features during my internship at Zynerator, using Angular for the UI and Spring Boot on the server side.',
    url: '',
    repo: '',
  },
  {
    id: '4',
    title: 'Car Rental System',
    tags: ['React JS','PHP', 'MySQL', 'Tailwind CSS'],
    description:
      'This project was developed during my internship at JB Smart Company. It allows users to rent cars and drivers, with features for managing car availability, reservations, and driver assignments. Built using PHP and MySQL with a Tailwind-styled frontend.',
    url: '',
    repo: '',
  },
  {
    id: '5',
    title: 'Website Redesign for ImaneCopie',
    tags: ['WordPress', 'HTML', 'CSS', 'Canva'],
    description:
      'During my internship at ImaneCopie, I redesigned the company’s website and produced branded marketing materials. I managed content updates in WordPress and created layouts and visuals using HTML, CSS, and Canva.',
    url: '',
    repo: '',
  },
];
