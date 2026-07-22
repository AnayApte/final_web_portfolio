'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    href: '/',
    label: 'Home',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    href: '/highlights',
    label: 'Highlights',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    href: '/updated_resume.pdf',
    label: 'Resume',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#181818] border-t border-[#282828] flex items-stretch z-40">
      {navItems.map((item) => {
        const isActive = !item.external && pathname === item.href
        const colorClass = isActive ? 'text-white' : 'text-[#A7A7A7]'
        const content = (
          <>
            {item.icon}
            <span className={`text-[10px] mt-0.5 ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
          </>
        )

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 ${colorClass}`}
            >
              {content}
            </a>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 ${colorClass}`}
          >
            {content}
          </Link>
        )
      })}
    </nav>
  )
}
