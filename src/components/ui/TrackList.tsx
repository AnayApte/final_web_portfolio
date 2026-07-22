import { Bullet } from '@/data/experience'

type Props = {
  bullets: Bullet[]
}

export default function TrackList({ bullets }: Props) {
  return (
    <div className="mt-6">
      {/* Header row — desktop only, mobile rows are self-labeling */}
      <div className="hidden sm:grid grid-cols-[32px_1fr_140px_80px] gap-4 px-4 pb-2 border-b border-[#282828] text-[#A7A7A7] text-xs uppercase tracking-wider">
        <span>#</span>
        <span>Detail</span>
        <span>Technology</span>
        <span className="text-right">Date</span>
      </div>

      {/* Bullet rows */}
      {bullets.map((bullet, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 sm:grid sm:grid-cols-[32px_1fr_140px_80px] sm:gap-4 px-4 py-3 rounded-md hover:bg-[#282828] group transition-colors sm:items-start"
        >
          <div className="flex items-start gap-3 sm:contents">
            <span className="text-[#A7A7A7] text-sm pt-0.5 flex-shrink-0">{i + 1}</span>
            <span className="text-white text-sm leading-snug">{bullet.text}</span>
          </div>
          {bullet.tags && bullet.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1 self-start pl-8 sm:pl-0">
              {bullet.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#A7A7A7] text-xs bg-[#282828] group-hover:bg-[#3E3E3E] rounded-full px-2 py-1 w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <span className="hidden sm:block" />
          )}
          {bullet.date && (
            <span className="text-[#A7A7A7] text-xs sm:text-sm pl-8 sm:pl-0 sm:text-right">{bullet.date}</span>
          )}
        </div>
      ))}
    </div>
  )
}
