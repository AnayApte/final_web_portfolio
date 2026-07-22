'use client'

import { ReactNode } from 'react'
import { useStatusBar } from '@/context/StatusBarContext'
import Sidebar from './Sidebar'
import SidePanel from './SidePanel'

export default function AppShell({ children }: { children: ReactNode }) {
  const { currentItem, minimized } = useStatusBar()
  const miniBarVisible = !!currentItem && minimized

  return (
    <div className={`flex pt-16 ${miniBarVisible ? 'pb-32' : 'pb-16'} lg:pb-[72px] h-screen`}>
      <Sidebar />
      <main className="lg:ml-60 flex-1 overflow-y-auto bg-[#121212]">
        {children}
      </main>
      <SidePanel />
    </div>
  )
}
