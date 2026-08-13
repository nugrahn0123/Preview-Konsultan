'use client'

export default function About() {
  return (
    <section id="about" className="about-section reveal">
      <div className="container about-wrapper">
        <div className="about-text">
          <h2>Tentang Arkana Legal Consulting</h2>

          <p>
            Arkana Legal Consulting adalah firma konsultan profesional
            yang berfokus pada perlindungan hukum dan strategi bisnis
            untuk perusahaan serta individu.
          </p>

          <p>
            Dengan pengalaman lebih dari satu dekade, kami membantu klien
            dalam penyusunan perjanjian, mitigasi risiko, serta memastikan
            kepatuhan terhadap regulasi yang berlaku.
          </p>

          <div className="about-highlight">
            <span>150+ Klien Ditangani</span>
            <span>10+ Tahun Pengalaman</span>
            <span>Profesional & Terpercaya</span>
          </div>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" alt="Legal Statue" />
        </div>
      </div>
    </section>
  )
}
