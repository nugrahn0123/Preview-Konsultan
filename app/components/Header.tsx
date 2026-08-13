'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setNavOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo">
          ARKANA<span>LEGAL</span>
        </div>

        <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
          ☰
        </div>

        <nav className={`nav ${navOpen ? 'active' : ''}`} id="nav">
          <a href="#about" onClick={handleNavLink}>Tentang</a>
          <a href="#services" onClick={handleNavLink}>Layanan</a>
          <a href="#location" onClick={handleNavLink}>Lokasi</a>
          <a href="#booking" onClick={handleNavLink}>Booking</a>
        </nav>

        <a href="#booking" className="header-cta" onClick={handleNavLink}>
          Konsultasi
        </a>
      </div>
    </header>
  )
}
