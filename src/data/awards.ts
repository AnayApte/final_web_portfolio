export type Award = {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  accentColor: string
}

export const awards: Award[] = [
  {
    id: 'esrp-excellence',
    title: 'Excellence in Research Award',
    issuer: 'Argonne National Laboratory — ESRP',
    date: '2024',
    description: 'Recognized for outstanding contributions to the Energy Sciences Research Program data analysis team.',
    accentColor: '#2D46B9',
  },
  {
    id: 'ap-scholar',
    title: 'AP Scholar with Distinction',
    issuer: 'College Board',
    date: '2023',
    description: 'Awarded for scoring 3 or higher on five or more AP exams with an average score of 3.5 or above.',
    accentColor: '#E91429',
  },
  {
    id: 'national-merit',
    title: 'National Merit Commended Scholar',
    issuer: 'National Merit Scholarship Corporation',
    date: '2023',
    description: 'Recognized among the top 50,000 scorers nationally on the PSAT/NMSQT.',
    accentColor: '#8D67AB',
  },
  {
    id: 'science-olympiad',
    title: 'Regional Science Olympiad — 1st Place, Coding',
    issuer: 'Science Olympiad Inc.',
    date: '2022',
    description: 'First place in the Coding event at the Illinois Regional Science Olympiad invitational.',
    accentColor: '#148A08',
  },
  {
    id: 'deans-list',
    title: "Dean's List",
    issuer: 'University of Pennsylvania',
    date: '2025',
    description: 'Recognized for academic achievement in the School of Engineering and Applied Science.',
    accentColor: '#DC148C',
  },
]
