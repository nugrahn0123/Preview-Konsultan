'use client'

export default function Services() {
  const services = [
    {
      title: 'Konsultasi Hukum Korporasi',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
      description: 'Penyusunan kontrak, legal drafting, analisis risiko hukum, serta pendampingan sengketa bisnis untuk menjaga stabilitas perusahaan.',
    },
    {
      title: 'Konsultasi Pajak & Kepatuhan',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818',
      description: 'Optimalisasi perencanaan pajak, audit internal, dan pendampingan kepatuhan terhadap regulasi perpajakan nasional.',
    },
    {
      title: 'Strategi & Pengembangan Bisnis',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
      description: 'Analisis struktur bisnis, mitigasi risiko, serta perencanaan ekspansi usaha yang aman dan terstruktur.',
    },
  ]

  return (
    <section id="services" className="section dark reveal">
      <div className="container">
        <h2 className="center">Layanan Profesional Kami</h2>
        <p className="center section-subtitle">
          Kami menyediakan layanan konsultasi yang dirancang untuk memberikan
          perlindungan hukum maksimal serta strategi bisnis yang adaptif terhadap
          perubahan regulasi dan dinamika pasar.
        </p>

        <div className="card-grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
