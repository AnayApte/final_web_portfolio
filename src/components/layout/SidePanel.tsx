'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useStatusBar } from '@/context/StatusBarContext'
import { getExperienceById } from '@/data/experience'
import Linkify from '@/components/ui/Linkify'

const DISMISS_THRESHOLD = 110

export default function SidePanel() {
  const { currentItem, minimized, setMinimized } = useStatusBar()
  const [slide, setSlide] = useState(0)
  const [dragY, setDragY] = useState(0)
  const dragState = useRef({ startY: 0, dragging: false })

  useEffect(() => {
    setSlide(0)
  }, [currentItem?.id])

  const handleDragStart = (clientY: number) => {
    dragState.current = { startY: clientY, dragging: true }
  }
  const handleDragMove = (clientY: number) => {
    if (!dragState.current.dragging) return
    const delta = clientY - dragState.current.startY
    if (delta > 0) setDragY(delta)
  }
  const handleDragEnd = () => {
    if (dragState.current.dragging && dragY > DISMISS_THRESHOLD) {
      setMinimized(true)
    }
    dragState.current.dragging = false
    setDragY(0)
  }

  if (!currentItem) return null

  const entry = getExperienceById(currentItem.id)
  if (!entry) return null

  // Falls back to a single placeholder slide until real photos are added per entry.
  const slides = entry.slides && entry.slides.length > 0
    ? entry.slides
    : [{ caption: entry.description }]
  const slideCount = slides.length
  const activeSlide = slides[Math.min(slide, slideCount - 1)]

  const carousel = (
    <div
      className="relative w-full aspect-square rounded-md overflow-hidden mb-4"
      style={{ backgroundColor: entry.accentColor }}
    >
      {activeSlide.image ? (
        <Image
          src={activeSlide.image}
          alt={`${entry.title} — slide ${slide + 1}`}
          fill
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-black text-3xl text-center px-4 leading-tight opacity-90">
            {entry.title.split(' ').map((w) => w[0]).join('').slice(0, 4)}
          </span>
        </div>
      )}
      {slideCount > 1 && (
        <>
          <button
            onClick={() => setSlide((s) => (s - 1 + slideCount) % slideCount)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => setSlide((s) => (s + 1) % slideCount)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === slide ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )

  const caption = (
    <>
      <div className="text-white font-semibold text-sm mb-1">{entry.title}</div>
      <div className="text-[#A7A7A7] text-xs mb-3">{entry.employer}</div>
      <p className="text-[#A7A7A7] text-sm leading-relaxed"><Linkify text={activeSlide.caption} /></p>
    </>
  )

  return (
    <>
      {/* Desktop */}
      {minimized ? (
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
      ) : (
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
            {carousel}
            {caption}
          </div>
        </aside>
      )}

      {/* Mobile full-screen expanded view — opened by tapping the mini-bar, dismisses back to it */}
      {!minimized && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-[#121212] flex flex-col overflow-y-auto"
          style={{
            transform: dragY ? `translateY(${dragY}px)` : undefined,
            transition: dragState.current.dragging ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          <div
            className="flex-shrink-0 touch-none"
            onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientY)}
            onTouchEnd={handleDragEnd}
          >
            {/* Grab handle */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/30" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#282828]">
              <button
                onClick={() => setMinimized(true)}
                aria-label="Dismiss now viewing"
                className="text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </button>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Now Viewing</span>
              <span className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4">
            {carousel}
            {caption}
          </div>
        </div>
      )}
    </>
  )
}
