import React from 'react'
import SectionTitle from './SectionTitle'
import shahPlov from '../assets/shah-plov.jpg'
import kababAssorti from '../assets/kabab-assorti.jpeg'
import dessert from '../assets/dessert.jpg'
import hotel1 from '../assets/hotel-riviera.jpg'
import { useI18n } from '../i18n/i18n'
import { brand } from '../data/brand'

const imagesFrom = (t) => [
  { title: t('gallery.img1Title'), subtitle: t('gallery.img1Sub'), src: shahPlov },
  { title: t('gallery.img2Title'), subtitle: t('gallery.img2Sub'), src: kababAssorti },
  { title: t('gallery.img3Title'), subtitle: t('gallery.img3Sub'), src: dessert },
  { title: brand.shortName, subtitle: brand.descriptor, src: hotel1 },
]

const Gallery = () => {
  const { t } = useI18n()
  const images = imagesFrom(t)
  return (
    <section className="section-padding bg-lightBg">
      <div className="container-layout">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} />
          <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('gallery.desc')}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <div key={img.title} className="group card-soft tap-scale relative flex aspect-square md:aspect-auto md:h-56 items-end overflow-hidden">
              <img src={img.src} alt={img.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 sm:group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="relative z-10 w-full p-4">
                <p className="font-serif text-[12px] text-lightBg">{img.title}</p>
                <p className="mt-1 text-[10px] text-lightBg/70">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
