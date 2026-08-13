'use client'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-wrapper">
        <div className="hero-text">
          <h1>
            Mitra Strategis Hukum <br />
            <span>& Bisnis Profesional</span>
          </h1>

          <p>
            Solusi hukum terukur dan strategi bisnis yang aman
            untuk pertumbuhan jangka panjang perusahaan Anda.
          </p>

          <div className="hero-features">
            <span>✓ Rahasia Terjamin</span>
            <span>✓ Strategi Tepat</span>
            <span>✓ Respons Cepat</span>
          </div>

          <a href="#booking" className="hero-btn">
            Jadwalkan Konsultasi
          </a>
        </div>
      </div>
    </section>
  )
}
