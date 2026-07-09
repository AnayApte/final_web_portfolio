'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function TopBar() {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#121212] flex items-center px-4 gap-4 z-40 border-b border-[#282828]">
      {/* Spotify logo — cosmetic only */}
      <div className="flex-shrink-0 ml-1">
        <svg viewBox="0 0 24 24" fill="#1DB954" className="w-8 h-8">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>

      {/* Home button */}
      <Link
        href="/"
        className="flex-shrink-0 w-8 h-8 bg-[#282828] hover:bg-[#3E3E3E] rounded-full flex items-center justify-center transition-colors"
        aria-label="Home"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </Link>

      {/* Search bar — cosmetic */}
      <div className="flex-1 max-w-sm">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="#A7A7A7"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            type="text"
            placeholder="Search coming soon"
            readOnly
            className="w-full bg-[#2A2A2A] text-[#A7A7A7] placeholder-[#A7A7A7] text-sm rounded-full py-2 pl-9 pr-4 cursor-not-allowed outline-none border border-transparent focus:border-[#535353]"
          />
        </div>
      </div>

      <div className="flex-1" />

      {/* Profile avatar */}
      <Link
        href="/profile"
        className="relative flex-shrink-0 w-8 h-8 bg-[#535353] hover:bg-[#727272] rounded-full flex items-center justify-center transition-colors overflow-hidden"
        aria-label="Profile"
      >
        <Image
          src="/profile_compressed.jpg"
          alt="Anay Apte"
          fill
          className="object-cover"
        />
      </Link>
    </header>
  )
}
