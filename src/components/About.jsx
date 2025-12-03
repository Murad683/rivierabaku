import React from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import RevealOnScroll from './RevealOnScroll'
import { brand } from '../data/brand'

const About = () => {
  const { t } = useI18n()
  return (
    <section id="about" className="section-padding bg-lightBg">
      <div className="container-layout grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
        <RevealOnScroll from="up">
          <div>
            <SectionTitle eyebrow={t('about.eyebrow')} title={t('about.title')} />
            <p className="mt-6 text-sm leading-relaxed text-textMuted sm:text-base">{t('about.p1')}</p>
            <p className="mt-4 text-sm leading-relaxed text-textMuted sm:text-base">{t('about.p2')}</p>
            <div className="mt-6 grid gap-4 text-sm text-textMuted sm:grid-cols-3">
              <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('about.featKitchen')}</p>
              <p className="mt-1">{t('about.featKitchenText')}</p>
              </div>
              <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('about.featPhilosophy')}</p>
              <p className="mt-1">{t('about.featPhilosophyText')}</p>
              </div>
              <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('about.featAtmos')}</p>
              <p className="mt-1">{t('about.featAtmosText')}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll from="right" className="card-soft relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,181,106,0.35),_transparent_55%)]" />
          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-textMuted">{t('about.cardEyebrow')}</p>
              <p className="font-serif text-xl text-textMain">{t('about.cardTitle')}</p>
              <p className="text-sm text-textMuted">{t('about.cardText')}</p>
            </div>
            <div className="mt-8 space-y-3 text-sm text-textMuted">
              <div className="flex items-center justify-between">
                <span>{t('about.hoursLabel')}</span>
                <span className="text-textMain">{t('about.hoursValue')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{t('about.addrLabel')}</span>
                <span className="text-right text-textMain">{t('about.addrValue')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{t('about.contactLabel')}</span>
                <a href={`tel:${brand.phones.restaurant.city}`} className="text-textMain underline decoration-accentGold/60 underline-offset-4">
                  {brand.phones.restaurant.cityDisplay}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default About
