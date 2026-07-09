export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'React Native', 'Next.js', 'Node.js', 'Git', 'Docker'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'DynamoDB'],
  },
  {
    label: 'Math & Statistics',
    skills: ['Linear Algebra', 'Probability & Statistics', 'Calculus', 'Data Analysis', 'Matplotlib', 'NumPy', 'Pandas'],
  },
]
