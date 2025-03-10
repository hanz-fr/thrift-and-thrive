// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement='top-center' toastOffset={60} />
      {children}
    </HeroUIProvider>
  )
}