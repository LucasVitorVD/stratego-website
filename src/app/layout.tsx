import type { Metadata } from 'next'
import './globals.css'
import { montserrat, montserrat_alternates, inter } from '@/lib/fonts'
import { cn } from "@/lib/utils"
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'Strategos',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn("font-montserrat antialiased relative text-primary-textPrimary", inter.className, montserrat.variable, montserrat_alternates.variable)}>
        <Header />
        <main className="flex flex-row flex-1 min-h-screen">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
