import React, { useMemo, useState } from 'react'
import SectionTitle from './SectionTitle'
import { menuCategories } from '../data/menu'
import searchIcon from '../assets/search-icon.svg'
import { useI18n } from '../i18n/i18n'

const MenuSection = () => {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuCategories
      .filter((cat) => (activeCat === 'all' ? true : cat.id === activeCat))
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          if (!q) return true
          const name = (it.name || '').toLowerCase()
          const desc = (it.description || '').toLowerCase()
          return name.includes(q) || desc.includes(q)
        }),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [query, activeCat])

  const { t } = useI18n()
  const slugify = (s = '') =>
    s
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  return (
    <section id="menu" className="section-padding bg-lightBg">
      <div className="container-layout">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow={t('menu.eyebrow')} title={t('menu.title')} />
          <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('menu.description')}</p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-[minmax(32rem,1fr),auto] md:items-center">
          <div className="relative md:col-span-2 max-w-none">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('menu.searchPlaceholder')}
              aria-label={t('menu.searchAria')}
              className="w-full rounded-2xl border border-accentGold/30 bg-lightBg/70 px-4 pr-10 py-3 text-sm outline-none ring-accentGold/40 transition focus:ring-2"
            />
            <img
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-70"
            />
          </div>
          <div className="-mx-1 flex flex-wrap gap-2 px-1 py-1 justify-center md:col-span-2 md:justify-center">
            <button
              onClick={() => setActiveCat('all')}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition min-h-[44px] tap-scale ${
                activeCat === 'all'
                  ? 'bg-primaryBg text-lightBg'
                  : 'bg-cardBg text-textMain hover:bg-primaryBg/10'
              }`}
            >
              {t('menu.all')}
            </button>
            {menuCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition min-h-[44px] tap-scale ${
                  activeCat === c.id
                    ? 'bg-primaryBg text-lightBg'
                    : 'bg-cardBg text-textMain hover:bg-primaryBg/10'
                }`}
              >
                {t(`menu.cats.${c.id}`) || c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {filtered.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-accentGold/25 bg-cardBg/80 shadow-soft transition hover:shadow-lg"
            >
              <div className="relative flex items-center justify-center rounded-t-2xl bg-cardBg px-4 py-3 text-textMain sm:px-6 sm:py-4">
                <h3 className="font-serif text-sm text-center tracking-wide text-textMain sm:text-base md:text-lg">
                  {t(`menu.cats.${category.id}`) || category.title}
                </h3>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-textMuted sm:right-4">
                  {category.items.length} {t('menu.itemWord')}
                </span>
              </div>
              <div className="space-y-4 p-4 sm:space-y-5 sm:p-6 md:p-8">
                {category.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className="border-b border-accentGold/20 pb-3 last:border-0 last:pb-0 sm:pb-4"
                  >
                    <div className="grid grid-cols-[auto,1fr,auto] items-baseline gap-2">
                      <p className="text-sm font-medium text-textMain sm:text-base">
                        {(() => {
                          const key = slugify(item.name)
                          const bySlug = t(`menu.items.${key}.name`); if (typeof bySlug === "string" && !bySlug.startsWith("menu.items.")) return bySlug; const byIndex = t(`menu.itemsByIndex.${category.id}.${idx}.name`); if (typeof byIndex === "string" && !byIndex.startsWith("menu.itemsByIndex.")) return byIndex; return item.name
                        })()}
                      </p>
                      <span className="leaders self-center" />
                      <p className="whitespace-nowrap text-sm text-accentGold">{item.price}</p>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-xs text-textMuted sm:text-sm">
                        {(() => {
                          const key = slugify(item.name)
                          const bySlug = t(`menu.items.${key}.desc`); if (typeof bySlug === "string" && !bySlug.startsWith("menu.items.")) return bySlug; const byIndex = t(`menu.itemsByIndex.${category.id}.${idx}.desc`); if (typeof byIndex === "string" && !byIndex.startsWith("menu.itemsByIndex.")) return byIndex; return item.description
                        })()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-textMuted">{t('menu.note')}</p>
      </div>
    </section>
  )
}

export default MenuSection
