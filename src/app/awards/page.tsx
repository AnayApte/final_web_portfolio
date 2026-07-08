import { awards } from '@/data/awards'

export default function AwardsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="px-8 pt-16 pb-8"
        style={{ background: 'linear-gradient(to bottom, #7a0a47 0%, #121212 100%)' }}
      >
        <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Section</p>
        <h1 className="text-white font-black text-6xl mb-4">Awards</h1>
        <p className="text-[#A7A7A7] text-sm">Recognition and achievements</p>
      </div>

      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-3">
          {awards.map((award, i) => (
            <div
              key={award.id}
              className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-[#282828] group transition-colors"
            >
              <span className="text-[#A7A7A7] text-sm w-6 text-right flex-shrink-0">{i + 1}</span>
              <div
                className="w-10 h-10 rounded flex-shrink-0"
                style={{ backgroundColor: award.accentColor }}
              />
              <div className="min-w-0 flex-1">
                <div className="text-white font-semibold text-sm truncate">{award.title}</div>
                <div className="text-[#A7A7A7] text-xs truncate">{award.issuer}</div>
              </div>
              <div className="text-[#A7A7A7] text-xs flex-shrink-0 hidden sm:block">
                {award.description}
              </div>
              <div className="text-[#A7A7A7] text-sm flex-shrink-0 ml-4">{award.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
