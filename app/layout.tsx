import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
 
import './globals.css'
 
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/provider/ThemeProvider'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
 
  

const font = Comfortaa({ weight: [ '300', '400', '500', '600', '700', ], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord clone',
  description: 'clone created by mayur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
      <html lang="en" suppressHydrationWarning >
        
        <body className={cn(
          font.className,
           "bg-zinc-950 md:mx-10 mx-5 "
        )}>
          <div>
            <Image src={"/op.jpg"} alt="or"  className='  opacity-40  grayscale' fill/>
          </div>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >


        
 
                {children} 
            
          </ThemeProvider>

        </body>
       
      </html>
 
  )
}
