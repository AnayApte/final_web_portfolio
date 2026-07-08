import { Bullet } from '@/data/experience'

type Props = {
  bullets: Bullet[]
}

export default function TrackList({ bullets }: Props) {
  return (
    <div className="mt-6">
      {/* Header row */}
      <div className="grid grid-cols-[32px_1fr_140px_80px] gap-4 px-4 pb-2 border-b border-[#282828] text-[#A7A7A7] text-xs uppercase tracking-wider">
        <span>#</span>
        <span>Detail</span>
        <span>Technology</span>
        <span className="text-right">Date</span>
      </div>

      {/* Bullet rows */}
      {bullets.map((bullet, i) => (
        <div
          key={i}
          className="grid grid-cols-[32px_1fr_140px_80px] gap-4 px-4 py-3 rounded-md hover:bg-[#282828] group transition-colors items-start"
        >
          <span className="text-[#A7A7A7] text-sm pt-0.5">{i + 1}</span>
          <span className="text-white text-sm leading-snug">{bullet.text}</span>
          {bullet.tag ? (
            <span className="text-[#A7A7A7] text-xs bg-[#282828] group-hover:bg-[#3E3E3E] rounded-full px-2 py-1 self-start w-fit">
              {bullet.tag}
            </span>
          ) : (
            <span />
          )}
          <span className="text-[#A7A7A7] text-sm text-right">{bullet.date ?? ''}</span>
        </div>
      ))}
    </div>
  )
}
