import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import az from './az.json'
import ru from './ru.json'
import en from './en.json'

const DICTS = { az, ru, en }

const I18nContext = createContext({
  lang: 'az',
  setLang: () => {},
  t: (k) => k,
})

const get = (obj, path) => {
  return path.split('.').reduce((acc, p) => (acc && acc[p] !== undefined ? acc[p] : undefined), obj)
}

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('az')

  useEffect(() => {
    const stored = localStorage.getItem('rivierabaku-lang') || 'az'
    setLang(DICTS[stored] ? stored : 'az')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('rivierabaku-lang', lang)
  }, [lang])

  const t = useMemo(() => {
    return (key) => {
      const fromSel = get(DICTS[lang] || {}, key)
      if (fromSel !== undefined) return fromSel
      const fallback = get(DICTS.az, key)
      return fallback !== undefined ? fallback : key
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
