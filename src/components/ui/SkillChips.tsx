import { SkillGroup } from '@/data/skills'

type Props = {
  groups: SkillGroup[]
}

export default function SkillChips({ groups }: Props) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="text-white font-bold text-base mb-3">{group.label}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-white text-sm bg-[#282828] hover:bg-[#3E3E3E] rounded-full px-4 py-2 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
