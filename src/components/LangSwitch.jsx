import React from 'react'
import { useI18n } from '../i18n/i18n'

const LANGS = [
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

const LangSwitch = ({ onChange, className = '' }) => {
  const { lang, setLang } = useI18n()

  const select = (code) => {
    setLang(code)
    if (onChange) onChange(code)
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-accentGold/40 bg-primaryBg/5 p-0.5 text-[11px] uppercase tracking-[0.15em] ${className}`}
      role="group"
      aria-label="Dil seçimi"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => select(l.code)}
          className={`px-2.5 py-1 rounded-full transition ${
            lang === l.code
              ? 'bg-accentGold text-primaryBg'
              : 'text-accentGold hover:bg-accentGold/10'
          }`}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

export default LangSwitch
