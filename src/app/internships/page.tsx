import Card from '@/components/ui/Card'
import { internships } from '@/data/experience'

export default function InternshipsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="px-4 sm:px-6 lg:px-8 pt-16 pb-8"
        style={{ background: 'linear-gradient(to bottom, #5c1015 0%, #121212 100%)' }}
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Section</p>
        <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-4 break-words">Internships & Research</h1>
        <p className="text-[#A7A7A7] text-sm">Professional and Research Experience</p>
      </div>

      {/* Card grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          {internships.map((entry) => (
            <Card
              key={entry.id}
              href={`/experience/${entry.id}`}
              title={entry.title}
              subtitle={entry.employer}
              accentColor={entry.accentColor}
              label={entry.employer.split('—')[0].trim().split(' ').slice(0, 2).join(' ')}
              inProgress={entry.inProgress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
