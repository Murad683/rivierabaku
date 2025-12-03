import React from 'react'
import { useI18n } from '../i18n/i18n'
import instagramIcon from '../assets/instagram-icon.svg'
import { brand } from '../data/brand'
import rivieraLogo from '../assets/riviera-logo.jpg'

const Footer = () => {
  const { t } = useI18n()
  const quickLinks = [
    { href: '/', key: 'nav.home' },
    { href: '/menu', key: 'nav.menu' },
    { href: '/reservation', key: 'nav.reservation' },
    { href: '/contact', key: 'nav.contact' },
  ]
  return (
    <footer className="footer bg-transparent text-textMain">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-column footer-brand">
            <div className="flex items-center gap-3">
              <img
                src={rivieraLogo}
                alt={`${brand.name} – ${brand.descriptor}`}
                className="h-10 w-10 rounded-full border border-accentGold/40 bg-lightBg object-cover shadow-soft"
              />
              <div>
                <p className="footer-eyebrow">{brand.shortName}</p>
                <p className="footer-tagline">{brand.descriptor}</p>
              </div>
            </div>
            <p className="footer-tagline mt-3">{t('footer.tagline')}</p>
            <p className="footer-contact-line mt-3">{t('footer.address')}</p>
            <p className="footer-contact-line">{t('footer.hours')}</p>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-instagram mt-3"
            >
              <img src={instagramIcon} alt="" className="footer-instagram-icon" aria-hidden />
              <span>Instagram: {brand.instagram}</span>
            </a>
          </div>

          <div className="footer-column footer-contact">
            <p className="footer-heading">{t('footer.contactAndReservation') || 'ƏLAQƏ & REZERVASİYA'}</p>
            <div className="footer-contact-block">
              <p className="footer-contact-line font-semibold text-textMain">{brand.phones.restaurant.label}</p>
              <a href={`tel:${brand.phones.restaurant.city}`} className="footer-phone">
                {brand.phones.restaurant.cityDisplay}
              </a>
              <a href={`https://wa.me/${brand.phones.restaurant.whatsapp.replace('+', '')}`} className="footer-phone">
                WhatsApp: {brand.phones.restaurant.whatsappDisplay}
              </a>
              <p className="footer-contact-line font-semibold text-textMain mt-2">{brand.phones.lounge.label}</p>
              <a href={`tel:${brand.phones.lounge.city}`} className="footer-contact-line footer-phone">
                {brand.phones.lounge.cityDisplay}
              </a>
              <a href={`https://wa.me/${brand.phones.lounge.whatsapp.replace('+', '')}`} className="footer-contact-line footer-phone">
                WhatsApp: {brand.phones.lounge.whatsappDisplay}
              </a>
              <p className="footer-contact-line font-semibold text-textMain mt-2">{brand.phones.park.label}</p>
              <a href={`https://wa.me/${brand.phones.park.whatsapp.replace('+', '')}`} className="footer-contact-line footer-phone">
                WhatsApp: {brand.phones.park.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{t('footer.copyright').replace('{year}', new Date().getFullYear())}</p>
          <p className="footer-credit">
            {t('footer.createdBy')}{' '}
            <a
              href="https://wa.me/994505131380?text=Salam%2C%20Riviera%20Baku%20sayt%C4%B1%20haqq%C4%B1nda"
              target="_blank"
              rel="noreferrer"
              className="footer-credit-link"
            >
              REVİO.AZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
