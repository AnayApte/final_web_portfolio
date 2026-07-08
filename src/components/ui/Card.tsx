import Link from 'next/link'

type Props = {
  href: string
  title: string
  subtitle: string
  accentColor: string
  label?: string
}

export default function Card({ href, title, subtitle, accentColor, label }: Props) {
  return (
    <Link
      href={href}
      className="flex-shrink-0 w-44 bg-[#181818] hover:bg-[#282828] rounded-md p-4 transition-colors cursor-pointer group"
    >
      <div
        className="w-full aspect-square rounded-md mb-4 flex items-center justify-center text-3xl"
        style={{ backgroundColor: accentColor }}
      >
        {label && (
          <span className="text-white font-bold text-xs text-center px-2 leading-tight">{label}</span>
        )}
      </div>
      <div className="text-white font-semibold text-sm leading-tight truncate">{title}</div>
      <div className="text-[#A7A7A7] text-xs mt-1 leading-snug line-clamp-2">{subtitle}</div>
    </Link>
  )
}
