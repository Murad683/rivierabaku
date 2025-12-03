import React from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import instagramIcon from '../assets/instagram-icon.svg'
import phoneIcon from '../assets/phone.svg'
import { brand } from '../data/brand'

const Contact = () => {
  const { t } = useI18n()
  const mapQuery = encodeURIComponent(brand.mapQuery)
  const mapHref = `https://www.google.com/maps?q=${mapQuery}`
  const mapEmbed = `${mapHref}&output=embed`
  return (
    <section id="contact" className="section-padding bg-lightBg">
      <div className="container-layout grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <SectionTitle eyebrow={t('contact.eyebrow')} title={t('contact.title')} />
          <p className="mt-6 text-sm leading-relaxed text-textMuted sm:text-base">{t('contact.desc')}</p>

          <div className="mt-6 space-y-4 text-sm text-textMuted">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('about.addrLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.addr')}</p>
            </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('contact.phone')}</p>
                <div className="mt-2">
                  <a
                    href={`tel:${brand.phones.restaurant.city}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accentGold/40 px-4 py-2 text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
                >
                  <img src={phoneIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>{brand.phones.restaurant.cityDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${brand.phones.restaurant.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accentGold/40 px-4 py-2 text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
                  >
                    <img src={phoneIcon} alt="" className="h-4 w-4" aria-hidden />
                    <span>WhatsApp: {brand.phones.restaurant.whatsappDisplay}</span>
                  </a>
                  <div className="mt-3 space-y-1 text-sm text-textMuted">
                    <p>
                      {brand.phones.lounge.label}: {brand.phones.lounge.cityDisplay} • WhatsApp: {brand.phones.lounge.whatsappDisplay}
                    </p>
                    <p>
                      {brand.phones.park.label}: WhatsApp {brand.phones.park.whatsappDisplay}
                    </p>
                  </div>
                </div>
              </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">Instagram</p>
              <div className="mt-2">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accentGold/40 px-4 py-2 text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
                >
                  <img src={instagramIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>{brand.instagram}</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('contact.hoursLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.hoursValue')}</p>
            </div>
          </div>
        </div>

        <div className="card-soft overflow-hidden">
          <iframe
            title={`${brand.name} location`}
            src={mapEmbed}
            className="h-full min-h-[260px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
