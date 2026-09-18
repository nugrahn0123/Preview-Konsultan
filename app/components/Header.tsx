'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Mengapa Kami', href: '#trust' },
    { label: 'Lokasi', href: '#location' },
    { label: 'Booking', href: '#booking' },
  ];

  const handleNavLink = () => {
    setNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          <span>⚖️</span> Arkana Legal
        </Link>

        <nav id="primary-nav" className={`nav ${navOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={handleNavLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={navOpen}
          aria-controls="primary-nav"
        >
          {navOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
