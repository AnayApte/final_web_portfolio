'use client'

import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import { getExperienceById } from '@/data/experience'
import { useStatusBar } from '@/context/StatusBarContext'
import TrackList from '@/components/ui/TrackList'
import Link from 'next/link'
import { use } from 'react'

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const entry = getExperienceById(id)
  const { setCurrentItem } = useStatusBar()

  useEffect(() => {
    if (entry) {
      setCurrentItem({
        title: entry.title,
        subtitle: entry.employer,
        accentColor: entry.accentColor,
      })
    }
  }, [entry, setCurrentItem])

  if (!entry) return notFound()

  const categoryLabel = {
    internship: 'Internship & Research',
    project: 'Personal Project',
    volunteering: 'Volunteering',
  }[entry.category]

  return (
    <div>
      {/* Hero */}
      <div
        className="px-8 pt-16 pb-8 flex items-end gap-6"
        style={{
          background: `linear-gradient(to bottom, ${entry.accentColor}88 0%, #121212 100%)`,
          minHeight: '280px',
        }}
      >
        {/* "Album art" */}
        <div
          className="w-44 h-44 flex-shrink-0 rounded shadow-2xl flex items-center justify-center"
          style={{ backgroundColor: entry.accentColor }}
        >
          <span className="text-white font-black text-3xl text-center px-4 leading-tight">
            {entry.title.split(' ').map((w) => w[0]).join('').slice(0, 4)}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">{categoryLabel}</p>
          <h1 className="text-white font-black text-5xl leading-tight mb-3">{entry.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white font-semibold">{entry.employer}</span>
            <span className="text-[#A7A7A7]">•</span>
            <span className="text-[#A7A7A7]">{entry.dateRange}</span>
            <span className="text-[#A7A7A7]">•</span>
            <span className="text-[#A7A7A7]">{entry.bullets.length} details</span>
          </div>
          <p className="text-[#A7A7A7] text-sm mt-2">{entry.description}</p>
        </div>
      </div>

      {/* Back link + track list */}
      <div className="px-8 pb-12">
        <div className="mb-4">
          <Link
            href="/experience"
            className="text-[#A7A7A7] hover:text-white text-sm transition-colors flex items-center gap-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to Experience
          </Link>
        </div>
        <TrackList bullets={entry.bullets} />
      </div>
    </div>
  )
}
