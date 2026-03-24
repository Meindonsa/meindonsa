import SkillItem from '@/components/skill/SkillItem.vue'

const lorem: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.'
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
      { name: 'Vue 3 / Nuxt 3', level: 'Expert' },
      { name: 'React / Next.js', level: 'Avancé' },
      { name: 'TypeScript', level: 'Avancé' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Flutter (UI)', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 'Expert' },
      { name: 'Laravel / PHP', level: 'Avancé' },
      { name: 'REST API / GraphQL', level: 'Expert' },
      { name: 'PostgreSQL / MySQL', level: 'Avancé' },
      { name: 'Redis', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Outils & DevOps',
    items: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'Docker', level: 'Avancé' },
      { name: 'CI/CD (GH Actions)', level: 'Avancé' },
      { name: 'Vercel / Railway', level: 'Avancé' },
      { name: 'Figma', level: 'Intermédiaire' },
    ],
  },
  {
    title: 'Mobile & Autres',
    items: [
      { name: 'Flutter', level: 'Avancé' },
      { name: 'React Native', level: 'Intermédiaire' },
      { name: 'Prisma ORM', level: 'Avancé' },
      { name: 'Jest / Vitest', level: 'Avancé' },
      { name: 'Linux / Bash', level: 'Intermédiaire' },
    ],
  },
]

export const marItemsData = [
  'Vue 3',
  'React',
  'Node.js',
  'Laravel',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'Flutter',
  'Tailwind CSS',
  'GraphQL',
  'REST API',
  'Nuxt 3',
  'Next.js',
  'Redis',
  'GitHub Actions',
  'Prisma',
]
