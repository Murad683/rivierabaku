import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LangSwitch from './LangSwitch'
import { useI18n } from '../i18n/i18n'
import { brand } from '../data/brand'
import rivieraLogo from '../assets/riviera-logo.jpg'

const linkDefs = [
  { to: '/', key: 'nav.home' },
  { to: '/menu', key: 'nav.menu' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/reservation', key: 'nav.reservation' },
  { to: '/contact', key: 'nav.contact' },
]

const Navbar = () => {
  const { t } = useI18n()
  const [navReady, setNavReady] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const [menuShown, setMenuShown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setNavReady(true)
      return
    }
    const id = requestAnimationFrame(() => setNavReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    setMenuShown(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuShown && !menuMounted) {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }, [menuShown, menuMounted])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuShown(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [menuShown])

  useEffect(() => {
    if (!menuShown && menuMounted) {
      const id = setTimeout(() => setMenuMounted(false), 250)
      return () => clearTimeout(id)
    }
  }, [menuShown, menuMounted])

  const toggleMenu = () => {
    if (menuShown) setMenuShown(false)
    else {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }

  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))
  const useDarkText = !isScrolled && !menuShown
  const navLinkTone = useDarkText ? 'text-textMain/80 hover:text-primaryBg' : 'text-lightBg/85 hover:text-accentGold'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out ${
        navReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${
        isScrolled
          ? 'bg-primaryBg/95 backdrop-blur border-b border-accentGold/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-layout flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 text-left" aria-label={`${brand.name} ${brand.descriptor}`}>
          <img
            src={rivieraLogo}
            alt={`${brand.name} – ${brand.descriptor}`}
            className="h-9 w-9 rounded-full border border-accentGold/40 bg-lightBg object-cover shadow-soft"
          />
          <div className="leading-tight">
            <span className={`block text-sm font-semibold uppercase tracking-[0.32em] ${useDarkText ? 'text-primaryBg' : 'text-accentGold'} sm:text-[13px]`}>
              {brand.shortName}
            </span>
            <span className={`hidden text-[10px] uppercase tracking-[0.28em] ${useDarkText ? 'text-textMain/70' : 'text-lightBg/85'} sm:block`}>
              {brand.descriptor}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {linkDefs.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${navLinkTone} ${isActive(item.to) ? 'is-active' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LangSwitch />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="inline-flex flex-col items-center justify-center gap-1 rounded-full border border-accentGold/40 p-2"
            onClick={toggleMenu}
            aria-label={menuShown ? t('nav.close') : t('nav.open')}
            aria-expanded={menuShown}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuShown ? t('nav.close') : t('nav.open')}</span>
            <span className={`block h-0.5 bg-accentGold transition-all duration-200 ${menuShown ? 'w-6' : 'w-4'}`} />
            <span className="block h-0.5 w-6 bg-accentGold transition-all duration-200" />
            <span className={`block h-0.5 bg-accentGold transition-all duration-200 ${menuShown ? 'w-6' : 'w-6'}`} />
          </button>
        </div>
      </nav>

      {menuMounted && (
        <>
          <div
            id="mobile-menu"
            className={`fixed top-16 md:top-20 inset-x-0 z-40 border-t border-accentGold/20 bg-primaryBg md:hidden transform transition-all duration-300 ${
              menuShown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="container-layout flex flex-col py-2">
              {linkDefs.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuShown(false)}
                  className={`nav-link text-left py-3 text-sm ${
                    isActive(item.to) ? 'is-active' : ''
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-4 border-t border-accentGold/25 pt-3 flex justify-center">
                <LangSwitch onChange={() => setMenuShown(false)} />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar
