export interface State {
  id: number
  value: string
  suf: string
  lbl: string
}

export const dataStats: State[] = [
  { id: 1, value: '5', suf: '+', lbl: "Années d'expérience" },
  { id: 2, value: '15', suf: '+', lbl: 'Projets livrés' },
  { id: 3, value: '8', suf: '', lbl: 'Stacks maîtrisées' },
  { id: 4, value: '∞', suf: '', lbl: 'Tasses de café' },
]

export const badgeData: string[] = [
  'Git',
  'Vue 3',
  'MYSQL',
  'IONIC',
  'Angular',
  'TypeScript',
  'Electron JS',
  'Spring Boot',
]
