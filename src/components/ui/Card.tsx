import Link from 'next/link'

type Props = {
  href: string
  title: string
  subtitle: string
  accentColor: string
  label?: string
  inProgress?: boolean
}

export default function Card({ href, title, subtitle, accentColor, label, inProgress }: Props) {
  return (
    <Link
      href={href}
      className="flex-shrink-0 w-44 bg-[#181818] hover:bg-[#282828] rounded-md p-4 transition-colors cursor-pointer group"
    >
      <div
        className="relative w-full aspect-square rounded-md mb-4 flex items-center justify-center text-3xl"
        style={{ backgroundColor: accentColor }}
      >
        {label && (
          <span className="text-white font-bold text-xs text-center px-2 leading-tight">{label}</span>
        )}
        {inProgress && (
          <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
            In Progress
          </span>
        )}
      </div>
      <div className="text-white font-semibold text-sm leading-tight truncate">{title}</div>
      <div className="text-[#A7A7A7] text-xs mt-1 leading-snug line-clamp-2">{subtitle}</div>
    </Link>
  )
}
