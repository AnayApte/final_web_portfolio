import Card from '@/components/ui/Card'
import CardRow from '@/components/ui/CardRow'
import { internships, projects, volunteering } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="px-8 pt-16 pb-8"
        style={{ background: 'linear-gradient(to bottom, #5c1015 0%, #121212 100%)' }}
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Section</p>
        <h1 className="text-white font-black text-6xl mb-4">Experience</h1>
        <p className="text-[#A7A7A7] text-sm">Internships, projects, and volunteer work</p>
      </div>

      {/* Card rows */}
      <div className="px-8 py-6">
        <CardRow title="Internships & Research">
          {internships.map((entry) => (
            <Card
              key={entry.id}
              href={`/experience/${entry.id}`}
              title={entry.title}
              subtitle={entry.employer}
              accentColor={entry.accentColor}
              label={entry.employer.split('—')[0].trim().split(' ').slice(0, 2).join(' ')}
            />
          ))}
        </CardRow>

        <CardRow title="Personal Projects">
          {projects.map((entry) => (
            <Card
              key={entry.id}
              href={`/experience/${entry.id}`}
              title={entry.title}
              subtitle={entry.description}
              accentColor={entry.accentColor}
              label={entry.title.split(' ').slice(0, 2).join(' ')}
            />
          ))}
        </CardRow>

        <CardRow title="Volunteering">
          {volunteering.map((entry) => (
            <Card
              key={entry.id}
              href={`/experience/${entry.id}`}
              title={entry.title}
              subtitle={entry.employer}
              accentColor={entry.accentColor}
              label={entry.employer.split(' ').slice(0, 2).join(' ')}
            />
          ))}
        </CardRow>
      </div>
    </div>
  )
}
