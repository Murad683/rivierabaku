import React from 'react'
import SectionTitle from './SectionTitle'
import RevealOnScroll from './RevealOnScroll'
import { menuCategories } from '../data/menu'
import { useI18n } from '../i18n/i18n'

const HomeMenuShowcase = () => {
  const { t } = useI18n()
  const slugify = (s = '') =>
    s
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

  const items = menuCategories
    .map((cat) => (cat.items && cat.items[0] ? { ...cat.items[0], cat: cat.title, catId: cat.id, idx: 0 } : null))
    .filter(Boolean)
    .slice(0, 4)

  return (
    <section id="home-menu-showcase" className="section-padding bg-lightBg">
      <div className="container-layout">
        <RevealOnScroll from="up">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow={t('homeMenu.eyebrow')} title={t('homeMenu.title')} />
            <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('homeMenu.desc')}</p>
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item, idx) => (
            <RevealOnScroll
              key={item.name}
              from="up"
              delayClass={idx === 0 ? '' : idx === 1 ? 'delay-100' : idx === 2 ? 'delay-150' : 'delay-200'}
              className="card-soft p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t(`menu.cats.${item.catId}`) || item.cat}</p>
              <h3 className="mt-2 font-serif text-xl tracking-wide text-textMain">{(() => {
                const key = slugify(item.name)
                const bySlug = t(`menu.items.${key}.name`)
                if (typeof bySlug === 'string' && !bySlug.startsWith('menu.items.')) return bySlug
                const byIndex = t(`menu.itemsByIndex.${item.catId}.${item.idx}.name`)
                if (typeof byIndex === 'string' && !byIndex.startsWith('menu.itemsByIndex.')) return byIndex
                return item.name
              })()}</h3>
              {item.description && (
                <p className="mt-2 text-sm text-textMuted">{(() => {
                  const key = slugify(item.name)
                  const bySlug = t(`menu.items.${key}.desc`)
                  if (typeof bySlug === 'string' && !bySlug.startsWith('menu.items.')) return bySlug
                  const byIndex = t(`menu.itemsByIndex.${item.catId}.${item.idx}.desc`)
                  if (typeof byIndex === 'string' && !byIndex.startsWith('menu.itemsByIndex.')) return byIndex
                  return item.description
                })()}</p>
              )}
              <div className="mt-4 inline-flex items-center rounded-full bg-primaryBg/90 px-4 py-2 text-lightBg">
                <span className="text-sm">{item.price}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeMenuShowcase
