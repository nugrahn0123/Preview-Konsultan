'use client'

export default function Location() {
  return (
    <section id="location" className="location-section reveal">
      <div className="container location-wrapper">
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps?q=Monumen+Nasional+Jakarta&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Arkana Legal"
          ></iframe>
        </div>

        <div className="location-info">
          <h2>Kunjungi Kantor Kami</h2>
          <p>Lokasi konsultasi representatif dengan akses strategis dan suasana privat untuk diskusi bisnis penting Anda.</p>

          <div className="location-list">
            <p><strong>Alamat:</strong> Jl. Medan Merdeka Barat No. 12, Jakarta Pusat</p>
            <p><strong>Jam Operasional:</strong> Senin - Jumat, 09.00 - 18.00 WIB</p>
            <p><strong>Sesi Eksekutif:</strong> By appointment pada hari Sabtu</p>
          </div>

          <a href="https://maps.google.com/?q=Monumen+Nasional+Jakarta" target="_blank" rel="noopener noreferrer" className="btn location-btn">
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
