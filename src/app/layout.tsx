import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import TopBar from '@/components/layout/TopBar'
import StatusBar from '@/components/layout/StatusBar'
import { StatusBarProvider } from '@/context/StatusBarContext'

export const metadata: Metadata = {
  title: 'Anay Apte — Portfolio',
  description: 'CS student at UPenn. Open to SWE, ML, and Quant internships.',
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
          <div className="flex pt-16 pb-[72px] h-screen">
            <Sidebar />
            <main className="ml-60 flex-1 overflow-y-auto bg-[#121212]">
              {children}
            </main>
          </div>
          <StatusBar />
        </StatusBarProvider>
      </body>
    </html>
  )
}
