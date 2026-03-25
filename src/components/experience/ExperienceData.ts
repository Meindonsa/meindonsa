export interface Experience {
  period: string
  role: string
  company: { name: string; url: string }
  desc: string
  tags: string[]
}

export const experienceData: Experience[] = [
  {
    period: 'Juin 2022\n— Présent',
    role: 'Ingénieur Logiciel',
    company: { name: 'OSSAS IT GABON', url: 'https://ossas-it.com/' },
    desc: "Conception et développement d'applications web & mobile. Architecture d'APIs RESTful, revue de code, mentorat. Décisions techniques sur des systèmes à haute disponibilité.",
    tags: [
      'Git',
      'Jira',
      'MySQL',
      'IONIC',
      'Docker',
      'Angular',
      'Jenkins',
      'Confluent',
      'Bootstrap',
      'BitBucket',
      'Spring Boot',
      'HTML/SCSS/JS',
    ],
  },
  {
    period: 'Août 2021\n— Mai 2022',
    role: 'Développeur Fullstack',
    company: { name: 'jobs-conseil', url: 'https://jobs-conseil.com/' },
    desc: "Création de sites et d'applications web pour des entreprises variées. Intégration d'APIs tierces, optimisation des performances, mise en production., installation de dispositifs de contrôle d’accès et maintenance de l'outil",
    tags: ['HTML/CSS/JS', 'Bootstrap', 'PHP', 'MySQL', 'AJAX'],
  },
  {
    period: 'Mai 2021\n— Juillet 2021',
    role: 'Développeur Web',
    company: { name: 'Assistance Juridique A2JC', url: 'https://cabinet-mmb.com' },
    desc: 'Création de sites et applications pour l"entreprise. Gestion complète des projets de la conception à la livraison. Responsable du backend.',
    tags: ['HTML/CSS/JS', 'Bootstrap', 'PHP', 'MySQL'],
  },
]
