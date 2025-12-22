const lorem: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.";
export type Skill = {
  id: number,
  name: string,
  category: string,
  description?: string,
  color?: string,
  icon: string,
  show: boolean
}

export const data: Skill[] = [
  {
    id: 1,
    name: 'Vue 3',
    category: 'Front-end',
    description: lorem,
    color: '#42b883',
    icon: 'images/Vue.png',
    show: false
  },
  {
    id: 2,
    name: 'Angular',
    category: 'Front-end',
    description: lorem,
    color: '#dd0031',
    icon: 'images/angular.png',
    show: false
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    category: 'Front-end',
    description: lorem,
    color: '#38bdf8',
    icon: 'images/tailwind.png',
    show: false
  },
  {
    id: 4,
    name: 'Bootstrap',
    category: 'Front-end',
    description: lorem,
    color: '#7952b3',
    icon: 'images/bootstrap.png',
    show: false
  },
  {
    id: 5,
    name: 'JavaScript',
    category: 'Front-end',
    description: lorem,
    color: '#f7df1e',
    icon: 'images/javascript.png',
    show: false
  },
  {
    id: 6,
    name: 'HTML5',
    category: 'Front-end',
    description: lorem,
    color: '#e34f26',
    icon: 'images/html.png',
    show: false
  },
  {
    id: 7,
    name: 'CSS3',
    category: 'Front-end',
    description: lorem,
    color: '#1572b6',
    icon: 'images/css.png',
    show: false
  },
  {
    id: 8,
    name: 'Ionic',
    category: 'Mobile',
    description: lorem,
    color: '#3880ff',
    icon: 'images/ionic.png',
    show: false
  },
  {
    id: 9,
    name: 'Spring Boot',
    category: 'Back-end',
    description: lorem,
    color: '#6db33f',
    icon: 'images/spring-boot.png',
    show: false
  },
  {
    id: 10,
    name: 'Java',
    category: 'Back-end',
    description: lorem,
    color: '#007396',
    icon: 'images/java.svg',
    show: false
  },
  {
    id: 11,
    name: 'Git',
    category: 'Tools',
    description: lorem,
    color: '#f05032',
    icon: 'images/git.png',
    show: false
  },
  {
    id: 12,
    name: 'GitHub',
    category: 'Tools',
    description: lorem,
    color: '#181717',
    icon: 'images/github.png',
    show: false
  },
  {
    id: 13,
    name: 'Bitbucket',
    category: 'Tools',
    description: lorem,
    color: '#0052cc',
    icon: 'images/bitbucket.png',
    show: false
  },
  {
    id: 14,
    name: 'Jira',
    category: 'Tools',
    description: lorem,
    color: '#0052cc',
    icon: 'images/jira.png',
    show: false
  },
  {
    id: 15,
    name: 'Electron',
    category: 'Desktop',
    description: lorem,
    color: '#47848f',
    icon: 'images/electron.png',
    show: false
  },
]