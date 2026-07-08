export type Bullet = {
  text: string
  tag?: string
  date?: string
}

export type ExperienceEntry = {
  id: string
  category: 'internship' | 'project' | 'volunteering'
  title: string
  employer: string
  dateRange: string
  description: string
  bullets: Bullet[]
  accentColor: string
  highlight: boolean
}

export const experience: ExperienceEntry[] = [
  {
    id: 'eigenvector',
    category: 'internship',
    title: 'Software Engineering Intern',
    employer: 'Eigenvector LLC',
    dateRange: '2024–2025',
    description: 'Designed and shipped production features for a B2B SaaS platform serving enterprise clients.',
    bullets: [
      { text: 'Identified a bottleneck in the data pipeline; redesigned the architecture and cut API response time by 40%', tag: 'Python', date: '2024' },
      { text: 'Owned three new dashboard features end-to-end, now used by 200+ enterprise clients', tag: 'React', date: '2024' },
      { text: 'Introduced an automated test suite where none existed; regression bugs dropped by 60%', tag: 'Jest', date: '2025' },
    ],
    accentColor: '#E91429',
    highlight: true,
  },
  {
    id: 'argonne',
    category: 'internship',
    title: 'Data Analysis Researcher',
    employer: 'Argonne National Laboratory — ESRP',
    dateRange: '2023–2025',
    description: 'Analyzed large-scale experimental datasets for a U.S. Department of Energy research program.',
    bullets: [
      { text: 'Processed 10 GB+ of X-ray spectroscopy data to surface material composition patterns invisible to manual review', tag: 'Python', date: '2023' },
      { text: 'Built a visualization pipeline that compressed multi-day analysis cycles down to hours', tag: 'Matplotlib', date: '2024' },
      { text: 'Co-authored internal findings report presented to Argonne senior scientists', tag: 'Research', date: '2025' },
    ],
    accentColor: '#2D46B9',
    highlight: true,
  },
  {
    id: 'one-percent-better',
    category: 'project',
    title: 'One Percent Better',
    employer: 'Personal Project',
    dateRange: '2023–2024',
    description: 'Cross-platform health and habit-tracking mobile app built from scratch.',
    bullets: [
      { text: 'Designed and shipped a full cross-platform app for daily habit tracking with zero backend dependency', tag: 'React Native', date: '2023' },
      { text: 'Implemented local persistence so data survives restarts without a server', tag: 'AsyncStorage', date: '2023' },
      { text: 'Added streak visualization — beta testers showed 3× higher retention with it than without', tag: 'UI/UX', date: '2024' },
    ],
    accentColor: '#148A08',
    highlight: true,
  },
  {
    id: 'nchs-nav',
    category: 'project',
    title: 'NCHS Nav',
    employer: 'Personal Project',
    dateRange: '2022–2023',
    description: 'Indoor navigation app for a 400-student high school campus.',
    bullets: [
      { text: 'Modeled the entire school floor plan as a graph; ran Dijkstra\'s to compute shortest paths between any two rooms', tag: 'Algorithms', date: '2022' },
      { text: 'Built a mobile UI that routed students to any room in under 30 seconds', tag: 'Flutter', date: '2023' },
      { text: 'Deployed to 50+ students in beta; administration requested an expanded rollout', tag: 'Deployment', date: '2023' },
    ],
    accentColor: '#E8115B',
    highlight: false,
  },
  {
    id: 'codebytes',
    category: 'volunteering',
    title: 'Co-Founder & Director',
    employer: 'CodeBytes Youth CS Camp',
    dateRange: '2021–2023',
    description: 'Founded and ran a free summer coding camp for middle schoolers.',
    bullets: [
      { text: 'Launched from zero — recruited 6 instructors and enrolled 40+ students in the first summer', tag: 'Leadership', date: '2021' },
      { text: 'Designed the full curriculum covering Python, web fundamentals, and computational thinking', tag: 'Curriculum', date: '2022' },
    ],
    accentColor: '#8D67AB',
    highlight: false,
  },
  {
    id: 'merry-tutor',
    category: 'volunteering',
    title: 'Data Manager',
    employer: 'The Merry Tutor',
    dateRange: '2022–2023',
    description: 'Managed student and tutor records for a nonprofit tutoring organization.',
    bullets: [
      { text: 'Automated monthly reporting with Python scripts, saving ~4 hours of manual work per month', tag: 'Python', date: '2022' },
      { text: 'Maintained accurate records for 300+ students across two semesters', tag: 'Data', date: '2023' },
    ],
    accentColor: '#2D46B9',
    highlight: false,
  },
  {
    id: 'power-up',
    category: 'volunteering',
    title: 'Volunteer',
    employer: 'Power Up Project',
    dateRange: '2021–2022',
    description: 'Provided tech support and digital literacy training to underserved communities.',
    bullets: [
      { text: 'Taught basic computer skills to 20+ seniors across 8 weekly sessions', tag: 'Teaching', date: '2021' },
      { text: 'Helped refurbish and redistribute 15 laptops to low-income families', tag: 'Community', date: '2022' },
    ],
    accentColor: '#E91429',
    highlight: false,
  },
]

export function getExperienceById(id: string): ExperienceEntry | undefined {
  return experience.find((e) => e.id === id)
}

export const internships = experience.filter((e) => e.category === 'internship')
export const projects = experience.filter((e) => e.category === 'project')
export const volunteering = experience.filter((e) => e.category === 'volunteering')
export const highlights = experience.filter((e) => e.highlight)
