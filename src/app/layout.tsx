import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import StatusBar from '@/components/layout/StatusBar'
import BottomNav from '@/components/layout/BottomNav'
import AppShell from '@/components/layout/AppShell'
import { StatusBarProvider } from '@/context/StatusBarContext'

export const metadata: Metadata = {
  title: 'Anay Apte — Portfolio',
  description: 'CS Student at UPenn. Open to SWE, ML, and Quant internships.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white overflow-hidden h-screen">
        <StatusBarProvider>
          <TopBar />
          <AppShell>{children}</AppShell>
          <StatusBar />
          <BottomNav />
        </StatusBarProvider>
      </body>
    </html>
  )
}
