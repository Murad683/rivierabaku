import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ReservationPage from './pages/ReservationPage'
import ContactPage from './pages/ContactPage'
import PageFade from './components/PageFade'
import { I18nProvider, useI18n } from './i18n/i18n'

const ScrollAndRoutes = () => {
  const location = useLocation()
  const { t } = useI18n()

  useEffect(() => {
    // Smoothly scroll to top on pathname change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    // If there is a hash, try to scroll to it with offset via CSS scroll-padding-top
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  useEffect(() => {
    const path = location.pathname
    const key =
      path === '/' ? 'home' : path === '/menu' ? 'menu' : path === '/gallery' ? 'gallery' : path === '/reservation' ? 'reservation' : path === '/contact' ? 'contact' : 'home'
    const title = t(`seo.${key}.title`)
    const desc = t(`seo.${key}.desc`)
    if (typeof title === 'string') document.title = title
    if (typeof desc === 'string') {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', desc)
    }
  }, [location.pathname, t])

  return (
    <Routes location={location}>
      <Route path="/" element={<PageFade><Home /></PageFade>} />
      <Route path="/menu" element={<PageFade><MenuPage /></PageFade>} />
      <Route path="/gallery" element={<PageFade><GalleryPage /></PageFade>} />
      <Route path="/reservation" element={<PageFade><ReservationPage /></PageFade>} />
      <Route path="/contact" element={<PageFade><ContactPage /></PageFade>} />
    </Routes>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <I18nProvider>
        <div className="min-h-screen bg-lightBg">
          <Navbar />
          <main className="pt-16 md:pt-20">
            <ScrollAndRoutes />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </BrowserRouter>
  )
}

export default App
