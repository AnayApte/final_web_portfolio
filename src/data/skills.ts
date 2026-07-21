export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'OCaml', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'React Native', 'Next.js', 'Express', 'SvelteKit', 'FastAPI', 'Node.js', 'Git', 'AWS'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'DynamoDB', 'SQLite'],
  },
  {
    label: 'Libraries & APIs',
    skills: ['PyTorch', 'OpenAI API', 'Gemini API', 'Tavily API', 'Stripe API', 'Deepgram', 'LiveKit', 'Playwright', 'pytest', 'Pandas', 'NumPy'],
  },
  {
    label: 'Math & Statistics',
    skills: ['Linear Algebra', 'Probability & Statistics', 'Calculus'],
  },
]
