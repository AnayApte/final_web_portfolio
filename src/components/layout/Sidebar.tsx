'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getExperienceById } from '@/data/experience'

const navItems = [
  {
    href: '/projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    color: '#148A08',
    category: 'project',
  },
  {
    href: '/internships',
    label: 'Internships & Research',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.57 15.43 0 12.3 0c-1.7 0-3.2.79-4.19 2.01L12 6.4l3.89-4.39C16.64 1.38 17.44 1 18.3 1c1.51 0 2.7 1.19 2.7 2.7 0 .46-.1.9-.28 1.3H20c.55 0 1 .45 1 1v2H3V5c0-.55.45-1 1-1h2.18C6.1 3.6 6 3.16 6 2.7 6 1.19 7.19 0 8.7 0c.86 0 1.66.38 2.21 1.01L7.02 5.4 4.89 4.01A2.69 2.69 0 013.7 2.7C3.7 1.19 4.89 0 6.4 0c.86 0 1.66.38 2.21 1.01M3 9v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9H3z"/>
      </svg>
    ),
    color: '#E91429',
    category: 'internship',
  },
  {
    href: '/skills',
    label: 'Skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    color: '#2D46B9',
    category: null,
  },
  {
    href: '/clubs',
    label: 'Clubs',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
      </svg>
    ),
    color: '#DC148C',
    category: 'club',
  },
  {
    href: '/resume',
    label: 'Resume',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    color: '#8D67AB',
    category: null,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  let activeDetailCategory: string | null = null
  if (pathname.startsWith('/experience/')) {
    const id = pathname.split('/')[2]
    activeDetailCategory = getExperienceById(id)?.category ?? null
  }

  return (
    <aside className="fixed left-0 top-0 bottom-[72px] w-60 bg-[#121212] flex flex-col z-30">
      {/* Library header */}
      <div className="px-4 pt-6 pb-2">
        <div className="flex items-center gap-3 text-[#A7A7A7] mb-4 px-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3 3h2v18H3V3zm4 0h2v18H7V3zm10 0H9v18h8V3zm4 0h-2v18h2V3z"/>
          </svg>
          <span className="font-bold text-sm tracking-wide">Your Library</span>
        </div>
      </div>

      {/* Highlights — styled like Liked Songs */}
      <div className="px-2 mb-2">
        <Link
          href="/highlights"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname === '/highlights'
              ? 'bg-[#282828] text-white'
              : 'text-[#A7A7A7] hover:text-white hover:bg-[#282828]'
          }`}
        >
          <div className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #450af5, #c4efd9)' }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate text-white">Highlights</div>
            <div className="text-xs text-[#A7A7A7] truncate">Best of Anay Apte</div>
          </div>
        </Link>
      </div>

      <div className="px-2 border-t border-[#282828] pt-2">
        {navItems.map((item) => {
          const isResume = item.href === '/resume'
          const isActive =
            !isResume &&
            (pathname.startsWith(item.href) || (item.category !== null && item.category === activeDetailCategory))
          const linkContent = (
            <>
              <div
                className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-white">{item.icon}</span>
              </div>
              <div className="min-w-0">
                <div className={`font-semibold text-sm truncate ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </div>
                <div className="text-xs text-[#A7A7A7] truncate">Section</div>
              </div>
            </>
          )
          const className = `flex items-center gap-3 px-3 py-2 rounded-md transition-colors mb-1 ${
            isActive
              ? 'bg-[#282828] text-white'
              : 'text-[#A7A7A7] hover:text-white hover:bg-[#282828]'
          }`

          if (isResume) {
            return (
              <a key={item.href} href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={className}>
                {linkContent}
              </a>
            )
          }

          return (
            <Link key={item.href} href={item.href} className={className}>
              {linkContent}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
