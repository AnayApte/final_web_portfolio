'use client'

import { useStatusBar } from '@/context/StatusBarContext'

export default function StatusBar() {
  const { currentItem } = useStatusBar()

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-[#181818] border-t border-[#282828] flex items-center px-4 z-40">
      {currentItem ? (
        <div className="flex items-center gap-3">
          {/* Color dot */}
          <div
            className="w-12 h-12 rounded flex-shrink-0"
            style={{ backgroundColor: currentItem.accentColor }}
          />
          <div>
            <div className="text-white text-sm font-semibold leading-tight">{currentItem.title}</div>
            <div className="text-[#A7A7A7] text-xs mt-0.5">{currentItem.subtitle}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded flex-shrink-0 bg-[#282828] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="#A7A7A7" className="w-6 h-6">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div>
            <div className="text-white text-sm font-semibold leading-tight">Anay Apte</div>
            <div className="text-[#A7A7A7] text-xs mt-0.5">CS @ UPenn · Open to SWE, ML &amp; Quant internships</div>
          </div>
        </div>
      )}
    </div>
  )
}
