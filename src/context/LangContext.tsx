'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from '@/lib/i18n'

interface LangContextType {
  lang: Lang
  toggle: () => void
  mounted: boolean
}

const LangContext = createContext<LangContextType>({ 
  lang: 'ID', 
  toggle: () => {},
  mounted: false
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ID')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggle = () => setLang(prev => prev === 'ID' ? 'EN' : 'ID')

  return (
    <LangContext.Provider value={{ lang, toggle, mounted }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
