import { highlights } from '@/data/experience'
import Link from 'next/link'

export default function HighlightsPage() {
  return (
    <div>
      {/* Hero — "Liked Songs" style */}
      <div
        className="px-8 pt-16 pb-8 flex items-end gap-6"
        style={{
          background: 'linear-gradient(to bottom, #4504c4 0%, #121212 100%)',
          minHeight: '280px',
        }}
      >
        <div
          className="w-44 h-44 flex-shrink-0 rounded shadow-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #450af5, #c4efd9)' }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-20 h-20">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <div>
          <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Collection</p>
          <h1 className="text-white font-black text-6xl mb-3">Highlights</h1>
          <p className="text-white text-sm">
            <span className="font-semibold">Anay Apte</span>
            <span className="text-[#A7A7A7]"> • {highlights.length} entries</span>
          </p>
        </div>
      </div>

      {/* Track-style list */}
      <div className="px-8 py-4 pb-12">
        {/* Header row */}
        <div className="grid grid-cols-[32px_1fr_180px_120px] gap-4 px-4 pb-3 border-b border-[#282828] text-[#A7A7A7] text-xs uppercase tracking-wider mb-2">
          <span>#</span>
          <span>Role</span>
          <span>Category</span>
          <span className="text-right">Duration</span>
        </div>

        {highlights.map((entry, i) => (
          <Link
            key={entry.id}
            href={`/experience/${entry.id}`}
            className="grid grid-cols-[32px_1fr_180px_120px] gap-4 px-4 py-3 rounded-md hover:bg-[#282828] transition-colors items-center group"
          >
            <span className="text-[#A7A7A7] text-sm">{i + 1}</span>
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-10 h-10 rounded flex-shrink-0"
                style={{ backgroundColor: entry.accentColor }}
              />
              <div className="min-w-0">
                <div className="text-white font-semibold text-sm truncate group-hover:underline">{entry.title}</div>
                <div className="text-[#A7A7A7] text-xs truncate">{entry.employer}</div>
              </div>
            </div>
            <span className="text-[#A7A7A7] text-sm capitalize">{entry.category}</span>
            <span className="text-[#A7A7A7] text-sm text-right">{entry.dateRange}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
