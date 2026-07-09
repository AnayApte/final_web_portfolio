import Card from '@/components/ui/Card'
import { clubs } from '@/data/experience'

export default function ClubsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="px-8 pt-16 pb-8"
        style={{ background: 'linear-gradient(to bottom, #7a0a47 0%, #121212 100%)' }}
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Section</p>
        <h1 className="text-white font-black text-6xl mb-4">Clubs</h1>
        <p className="text-[#A7A7A7] text-sm">Leadership and involvement outside the classroom</p>
      </div>

      {/* Card grid */}
      <div className="px-8 py-6">
        <div className="flex flex-wrap gap-4">
          {clubs.map((entry) => (
            <Card
              key={entry.id}
              href={`/experience/${entry.id}`}
              title={entry.title}
              subtitle={entry.employer}
              accentColor={entry.accentColor}
              label={entry.employer.split(' ').slice(0, 2).join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
