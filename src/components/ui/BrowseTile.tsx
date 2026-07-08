import Link from 'next/link'

type Props = {
  href: string
  label: string
  color: string
  icon: React.ReactNode
}

export default function BrowseTile({ href, label, color, icon }: Props) {
  return (
    <Link
      href={href}
      className="relative rounded-lg overflow-hidden h-40 flex items-end cursor-pointer group transition-all hover:scale-[1.02] active:scale-[0.99]"
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold text-xl px-4 pb-4 z-10 leading-tight">{label}</span>
      <div className="absolute bottom-0 right-0 w-20 h-20 transform translate-x-3 translate-y-3 rotate-12 opacity-90">
        {icon}
      </div>
    </Link>
  )
}
