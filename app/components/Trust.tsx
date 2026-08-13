'use client'

export default function Trust() {
  const trustCards = [
    {
      icon: '📊',
      title: 'Analisis Mendalam',
      description: 'Evaluasi komprehensif sebelum setiap rekomendasi hukum diberikan.',
    },
    {
      icon: '🔒',
      title: 'Kerahasiaan Terjamin',
      description: 'Standar profesional tinggi untuk menjaga seluruh data klien.',
    },
    {
      icon: '⚖️',
      title: 'Berorientasi Solusi',
      description: 'Fokus pada penyelesaian efektif dan perlindungan jangka panjang.',
    },
  ]

  return (
    <section className="trust-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Mengapa Klien Mempercayai Kami</h2>
          <p>
            Kepercayaan adalah fondasi utama hubungan profesional.
            Kami memberikan solusi terukur, aman, dan strategis.
          </p>
        </div>

        <div className="trust-grid">
          {trustCards.map((card, index) => (
            <div key={index} className="trust-card">
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
