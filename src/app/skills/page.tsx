import SkillChips from '@/components/ui/SkillChips'
import { skillGroups } from '@/data/skills'

export default function SkillsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="px-8 pt-16 pb-8"
        style={{ background: 'linear-gradient(to bottom, #0d1f6e 0%, #121212 100%)' }}
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Section</p>
        <h1 className="text-white font-black text-6xl mb-4">Skills</h1>
        <p className="text-[#A7A7A7] text-sm">Languages, frameworks, tools, and math</p>
      </div>

      <div className="px-8 py-6">
        <SkillChips groups={skillGroups} />
      </div>
    </div>
  )
}
