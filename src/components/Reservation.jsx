import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import { brand } from '../data/brand'

const Reservation = () => {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', people: '', note: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `${encodeURIComponent(t('res.waPrefix'))}%0A%0A${encodeURIComponent(t('res.waName'))}: ${encodeURIComponent(form.name)}%0A${encodeURIComponent(t('res.waPhone'))}: ${encodeURIComponent(form.phone)}%0A${encodeURIComponent(t('res.waDate'))}: ${encodeURIComponent(form.date)}%0A${encodeURIComponent(t('res.waTime'))}: ${encodeURIComponent(form.time)}%0A${encodeURIComponent(t('res.waPeople'))}: ${encodeURIComponent(form.people)}%0A${encodeURIComponent(t('res.waNote'))}: ${encodeURIComponent(form.note)}`
    const waNumber = brand.phones.restaurant.whatsapp.replace('+', '')
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank')
  }

  return (
    <section id="reservation" className="section-padding bg-lightBg">
      <div className="container-layout grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="md:self-center">
          <SectionTitle eyebrow={t('res.eyebrow')} title={t('res.title')} />
          <p className="mt-6 text-sm leading-relaxed text-textMuted sm:text-base">{t('res.desc')}</p>
          <div className="mt-6 space-y-2 text-sm text-textMuted">
            <p>
              {t('res.call')}{' '}
              <a href={`tel:${brand.phones.restaurant.city}`} className="text-textMain underline decoration-accentGold/60 underline-offset-4">
                {brand.phones.restaurant.cityDisplay}
              </a>
            </p>
            <p>{t('res.whNote')}</p>
          </div>
        </div>

        <div className="card-soft p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelName')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  inputMode="text"
                  className="mt-2 w-full rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-base outline-none ring-accentGold/40 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelPhone')}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="tel"
                  className="mt-2 w-full rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-base outline-none ring-accentGold/40 transition focus:ring-2"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelDate')}</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-[16px] md:text-base appearance-none outline-none ring-accentGold/40 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelTime')}</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-[16px] md:text-base appearance-none outline-none ring-accentGold/40 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelPeople')}</label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  required
                  value={form.people}
                  onChange={handleChange}
                  inputMode="numeric"
                  className="mt-2 w-full rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-base outline-none ring-accentGold/40 transition focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.2em] text-textMuted">{t('res.labelNote')}</label>
              <textarea
                name="note"
                rows={3}
                value={form.note}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-2xl border border-accentGold/30 bg-lightBg/60 px-4 py-3 text-base outline-none ring-accentGold/40 transition focus:ring-2"
              />
            </div>

            <button type="submit" className="btn-primary btn-pulse w-full justify-center py-3 text-[15px]">{t('res.submit')}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservation
