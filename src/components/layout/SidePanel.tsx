'use client'

import { useState } from 'react'
import { useStatusBar } from '@/context/StatusBarContext'
import { getExperienceById } from '@/data/experience'

const SLIDE_COUNT = 3

export default function SidePanel() {
  const { currentItem, minimized, setMinimized } = useStatusBar()
  const [slide, setSlide] = useState(0)

  if (!currentItem) return null

  const entry = getExperienceById(currentItem.id)
  if (!entry) return null

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        aria-label="Expand now viewing panel"
        className="hidden lg:flex flex-shrink-0 h-full w-3 hover:w-6 transition-all items-center justify-center"
        style={{ backgroundColor: entry.accentColor }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3 rotate-180">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    )
  }

  return (
    <aside className="hidden lg:flex flex-col flex-shrink-0 w-80 h-full bg-[#181818] border-l border-[#282828] overflow-y-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#282828]">
        <span className="text-white text-xs font-bold uppercase tracking-widest">Now Viewing</span>
        <button
          onClick={() => setMinimized(true)}
          aria-label="Minimize now viewing panel"
          className="text-[#A7A7A7] hover:text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M6 19h12v2H6z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        {/* Carousel — placeholder art until real photos are added */}
        <div
          className="relative w-full aspect-square rounded-md overflow-hidden mb-4"
          style={{ backgroundColor: entry.accentColor }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-3xl text-center px-4 leading-tight opacity-90">
              {slide === 0 && entry.title.split(' ').map((w) => w[0]).join('').slice(0, 4)}
              {slide === 1 && entry.employer.split(' ').map((w) => w[0]).join('').slice(0, 4)}
              {slide === 2 && entry.dateRange}
            </span>
          </div>
          <button
            onClick={() => setSlide((s) => (s - 1 + SLIDE_COUNT) % SLIDE_COUNT)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => setSlide((s) => (s + 1) % SLIDE_COUNT)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === slide ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        <div className="text-white font-semibold text-sm mb-1">{entry.title}</div>
        <div className="text-[#A7A7A7] text-xs mb-3">{entry.employer}</div>
        <p className="text-[#A7A7A7] text-sm leading-relaxed">{entry.description}</p>
      </div>
    </aside>
  )
}
