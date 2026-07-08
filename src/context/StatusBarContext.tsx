'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type StatusItem = {
  title: string
  subtitle: string
  accentColor: string
} | null

type StatusBarContextType = {
  currentItem: StatusItem
  setCurrentItem: (item: StatusItem) => void
}

const StatusBarContext = createContext<StatusBarContextType>({
  currentItem: null,
  setCurrentItem: () => {},
})

export function StatusBarProvider({ children }: { children: ReactNode }) {
  const [currentItem, setCurrentItem] = useState<StatusItem>(null)
  return (
    <StatusBarContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </StatusBarContext.Provider>
  )
}

export const useStatusBar = () => useContext(StatusBarContext)
