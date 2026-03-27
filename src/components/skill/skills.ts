import SkillItem from '@/components/skill/SkillItem.vue'

export type Skill = {
  title: string
  items: Array<SkillItem>
}

export type SkillItem = {
  name: string
  level: string
}

export const data: Skill[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'Angular', level: 'Avancé' },
      { name: 'Vue 3', level: 'Avancé' },
      { name: 'TypeScript', level: 'Avancé' },
      { name: 'Tailwind CSS', level: 'Intermédiaire' },
      { name: 'Bootstrap', level: 'Expert' },
      { name: 'Strapi', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', level: 'Avancé' },
      { name: 'Hono', level: 'Intermédiaire' },
      { name: 'REST API', level: 'Expert' },
      { name: 'PostgreSQL / MySQL', level: 'Avancé' },
    ],
  },
  {
    title: 'Outils & DevOps',
    items: [
      { name: 'Git / GitHub / BitBucket', level: 'Avancé' },
      { name: 'Docker', level: 'Intermédiaire' },
      { name: 'Figma', level: 'Intermédiaire' },
      { name: 'Jenkins', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Mobile & Autres',
    items: [
      { name: 'IONIC', level: 'Avancé' },
      { name: 'Linux / Bash', level: 'Intermédiaire' },
      { name: 'Electron JS', level: 'Intermédiaire' },
      { name: 'Supabase', level: 'Intermédiaire' },
      { name: 'Strapi', level: 'Intermédiaire' },
    ],
  },
]

export const marItemsData = [
  'Vue 3',
  'Angular',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap',
  'Spring Boot',
  'Hono',
  'REST API',
  'MySQL',
  'Git',
  'GitHub',
  'BitBucket',
  'Docker',
  'Figma',
  'Jenkins',
  'Jira',
  'Confluence',
  'IONIC',
  'Linux',
  'Electron JS',
  'Supabase',
  'Strapi',
]
