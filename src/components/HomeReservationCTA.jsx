import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import RevealOnScroll from './RevealOnScroll'
import { brand } from '../data/brand'

const HomeReservationCTA = () => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const waText = encodeURIComponent(t('homeCTA.waText') || brand.name)
  const waNumber = brand.phones.restaurant.whatsapp.replace('+', '')
  return (
    <section className="section-padding bg-lightBg">
      <div className="container-layout">
        <RevealOnScroll from="up">
          <div className="relative overflow-hidden rounded-2xl bg-cardBg p-6 shadow-soft sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,181,106,0.35),_transparent_55%)]" />
            <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1.1fr,0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('homeCTA.eyebrow')}</p>
                <h3 className="mt-2 font-serif text-2xl text-textMain">{t('homeCTA.title')}</h3>
                <p className="mt-2 text-sm text-textMuted">{t('homeCTA.desc')}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button onClick={() => navigate('/reservation')} className="btn-primary btn-pulse">
                    {t('homeCTA.btnReserve')}
                  </button>
                  <a
                    href={`https://wa.me/${waNumber}?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary btn-pulse"
                  >
                    {t('homeCTA.btnWhatsApp')}
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-accentGold/30 bg-lightBg/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-textMuted">{t('homeCTA.quick')}</p>
                <div className="mt-3 space-y-2 text-sm text-textMain">
                  <p>- {t('homeCTA.infoHours')}</p>
                  <p>- {t('homeCTA.infoAddr')}</p>
                  <p>- {t('homeCTA.infoPhone')}</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HomeReservationCTA
