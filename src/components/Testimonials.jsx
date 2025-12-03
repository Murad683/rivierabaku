import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import RevealOnScroll from './RevealOnScroll'

const DEFAULT_LIST = [
  { name: 'Aysel R.', text: 'Dəniz kənarında zərif interyer, diqqətli servis və müəllif mətbəxi hər axşamı xüsusi edir.' },
  { name: 'Rauf M.', text: 'Restaurant, Lounge və Park konseptlərinin hamısı bir yerdə – dostlarla görüş və romantik axşam üçün ideal məkan.' },
  { name: 'Elnara K.', text: 'Şərab seçimi və canlı musiqi ilə Riviera Lounge təcrübəsi çox bəyəndik.' },
]

const Testimonials = () => {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const list = Array.isArray(t('testimonials.list')) ? t('testimonials.list') : DEFAULT_LIST

  const prev = () => setIndex((i) => (i === 0 ? list.length - 1 : i - 1))
  const next = () => setIndex((i) => (i + 1) % list.length)

  let touchStartX = null
  const handleSwipe = (startX, endX) => {
    const delta = endX - startX
    if (Math.abs(delta) < 40) return
    if (delta > 0) prev()
    else next()
  }

  const current = list[index]

  return (
    <section className="section-padding bg-lightBg pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="container-layout">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} />
          <p className="max-w-md text-sm leading-relaxed text-textMuted">
            {t('testimonials.desc')}
          </p>
        </div>

        <RevealOnScroll from="up">
          <div
            className="relative mt-6 overflow-hidden rounded-2xl bg-cardBg p-4 shadow-soft sm:p-5"
            onTouchStart={(e) => {
              touchStartX = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchStartX == null) return
              handleSwipe(touchStartX, e.changedTouches[0].clientX)
              touchStartX = null
            }}
          >
            <div className="transition-all duration-400 ease-out">
              <blockquote className="min-h-[90px] text-sm leading-relaxed text-textMain">
                “{current.text}”
              </blockquote>
              <p className="mt-2 text-sm text-textMuted">— {current.name}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                {list.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-7 bg-accentGold' : 'w-4 bg-accentGold/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="btn-secondary px-4 py-2 text-xs">
                  {t('testimonials.prev')}
                </button>
                <button onClick={next} className="btn-primary px-4 py-2 text-xs">
                  {t('testimonials.next')}
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Testimonials
