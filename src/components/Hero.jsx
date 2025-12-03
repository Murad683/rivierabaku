import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import heroImage from '../assets/hotel-riviera5.jpg'
import RevealOnScroll from './RevealOnScroll'
import { brand } from '../data/brand'

const heroOffers = [
  {
    id: 'restaurant',
    titleKey: 'hero.rightTitle',
    descKey: 'hero.rightDesc',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-5/6',
  },
  {
    id: 'lounge',
    titleKey: 'gallery.img2Title',
    descKey: 'gallery.img2Sub',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-3/4',
  },
  {
    id: 'park',
    titleKey: 'gallery.img3Title',
    descKey: 'gallery.img3Sub',
    noteKey: 'hero.rightNote',
    barWidthClass: 'w-2/3',
  },
]

const Hero = () => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const offer = useMemo(
    () => heroOffers[Math.floor(Math.random() * heroOffers.length)],
    []
  )

  const goVideo = () => {
    const el = document.getElementById('home-atmosphere')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/gallery')
    }
  }
  const goReservation = () => navigate('/reservation')
  const scrollToMenuShowcase = () => {
    if (typeof document === 'undefined') return
    const el = document.getElementById('home-menu-showcase')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-primaryBg text-lightBg"
    >
      {/* Mobile background image */}
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover md:hidden"
        src={heroImage}
        alt={`${brand.name} – ${brand.descriptor}`}
        loading="lazy"
      />

      {/* Overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,181,106,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.55),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/45 md:bg-black/25" />

      <div className="container-layout relative z-10 grid items-center gap-12 py-28 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <RevealOnScroll from="up" delayClass="delay-75">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accentGold/90">
              {t('hero.eyebrow')}
            </p>
          </RevealOnScroll>
          <RevealOnScroll from="up" delayClass="delay-150">
            <h1 className="font-serif text-4xl tracking-[0.04em] text-lightBg sm:text-5xl md:text-[3.25rem]">
              {(typeof t('hero.title') === 'string' ? t('hero.title') : '')
                .split('\\n')
                .map((line, idx) => (
                  <span key={idx} className="block leading-tight">
                    {line}
                  </span>
                ))}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll from="up" delayClass="delay-200">
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-lightBg/80 sm:text-base">
              {t('hero.desc')}
            </p>
          </RevealOnScroll>

          <RevealOnScroll from="up" delayClass="delay-300">
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button onClick={goReservation} className="btn-primary">
                {t('hero.ctaReserve')}
              </button>
              <button onClick={goVideo} className="btn-secondary">
                {t('hero.ctaMenu')}
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll from="up" delayClass="delay-500">
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-lightBg/70">
              <div>
                {t('hero.addrLine1')}
                <br />
                <span className="text-[11px] text-lightBg/60">{t('hero.addrLine2')}</span>
              </div>
              <div>
                {t('hero.hoursPrefix')} {t('hero.hoursValue')}
                <br />
                <span className="text-[11px] text-lightBg/60">
                  {brand.phones.restaurant.cityDisplay} • WhatsApp: {brand.phones.restaurant.whatsappDisplay}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll from="right" delayClass="delay-300" className="relative hidden h-[380px] md:block">
          <div className="absolute inset-0 rounded-[40px] bg-cardBg/60 shadow-soft" />
          <div className="absolute inset-4 rounded-[30px] border border-accentGold/30 bg-lightBg/90 backdrop-blur-sm shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col justify-between gap-5 p-7">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-accentGold/80">
                  {t('hero.rightEyebrow')}
                </p>
                <p className="mt-3 font-serif text-[1.35rem] leading-snug text-textMain">
                  {t(offer.titleKey)}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-textMuted">
                  {t(offer.descKey)}
                </p>
              </div>
              <div className="mt-4 border-t border-accentGold/10 pt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-textMuted">{t('hero.rightToday')}</span>
                  <span className="rounded-full border border-accentGold/40 bg-accentGold/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accentGold">
                    {t('hero.rightLimited')}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-cardBg">
                  <div className="h-full w-[82%] rounded-full bg-accentGold" />
                </div>
                <p
                  className="inline-flex items-center gap-2 text-[11px] text-textMuted cursor-pointer transition hover:text-accentGold"
                  onClick={goReservation}
                >
                  <span>{t(offer.noteKey)}</span>
                  <span aria-hidden>&rarr;</span>
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={scrollToMenuShowcase}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-lightBg/40 text-lightBg/80 cursor-pointer transition-all duration-300 ease-out hover:border-accentGold/70 hover:text-accentGold/90 hover:bg-black/10 hover:translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightBg/40"
          aria-label="Scroll to menu section"
        >
          <span aria-hidden>&darr;</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
