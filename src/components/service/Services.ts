export interface Service {
  n?: string
  icon?: string
  title: string
  description: string
}

export const Services: Service[] = [
  {
    n: '01',
    icon: '⚡',
    title: 'Applications Web Fullstack',
    description:
      "SPA, SSR & APIs REST. De la base de données au frontend, je conçois et code l'ensemble de l'architecture.",
  },
  {
    n: '02',
    icon: '📱',
    title: 'Applications Mobiles',
    description:
      'Apps cross-platform iOS & Android avec IONIC. UX native, performances optimisées.',
  },
  {
    n: '03',
    icon: '🖥',
    title: 'Applications de bureau',
    description:
      'Applications pour vos bureaux. Plusieurs platefomes, une codebase robuste, un outils. ElectronJs',
  },
  {
    n: '04',
    icon: '🔌',
    title: 'APIs & Microservices',
    description:
      "Conception et développement d'APIs robustes, documentées et sécurisées. Authentification JWT/OAuth, MFA, webhooks.",
  },
  {
    n: '05',
    icon: '🎨',
    title: 'Interfaces & Design System',
    description:
      'Intégration Figma, bibliothèques de composants, animations soignées. Accessibilité et performance comme standards.',
  },
  {
    n: '06',
    icon: '🔍',
    title: 'Audit & Optimisation',
    description:
      'Analyse de code, optimisation des performances, sécurité et réduction de la dette technique.',
  },
]
