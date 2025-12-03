import React from 'react'
import SectionTitle from './SectionTitle'
import RevealOnScroll from './RevealOnScroll'
import img1 from '../assets/hotel-riviera1.jpg'
import img2 from '../assets/hotel-riviera2.jpeg'
import img3 from '../assets/hotel-riviera4.jpg'
import { useI18n } from '../i18n/i18n'

const HomeAtmosphere = () => {
  const { t } = useI18n()
  return (
    <section id="home-atmosphere" className="section-padding bg-lightBg">
      <div className="container-layout">
        <RevealOnScroll from="up">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow={t('homeAtmos.eyebrow')} title={t('homeAtmos.title')} />
            <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('homeAtmos.desc')}</p>
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[img1, img2, img3].map((src, i) => (
            <RevealOnScroll
              key={i}
              from="up"
              delayClass={i === 0 ? '' : i === 1 ? 'delay-150' : 'delay-300'}
              className="group relative overflow-hidden rounded-2xl bg-primaryBg/80 shadow-soft"
            >
              <img className="h-56 w-full object-cover md:h-64" src={src} alt="" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,181,106,0.3),_transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAtmosphere
