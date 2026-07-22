'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type StatusItem = {
  id: string
  title: string
  subtitle: string
  accentColor: string
} | null

type StatusBarContextType = {
  currentItem: StatusItem
  setCurrentItem: (item: StatusItem) => void
  minimized: boolean
  setMinimized: (minimized: boolean) => void
}

const StatusBarContext = createContext<StatusBarContextType>({
  currentItem: null,
  setCurrentItem: () => {},
  minimized: false,
  setMinimized: () => {},
})

export function StatusBarProvider({ children }: { children: ReactNode }) {
  const [currentItem, setCurrentItem] = useState<StatusItem>(null)
  const [minimized, setMinimized] = useState(true)
  return (
    <StatusBarContext.Provider value={{ currentItem, setCurrentItem, minimized, setMinimized }}>
      {children}
    </StatusBarContext.Provider>
  )
}

export const useStatusBar = () => useContext(StatusBarContext)
