'use client'

export default function Insight() {
  const insights = [
    { stat: '95%', description: 'Tingkat kepuasan klien terhadap sesi konsultasi awal.' },
    { stat: '24 Jam', description: 'Rata-rata waktu respons untuk pertanyaan prioritas.' },
    { stat: '300+', description: 'Dokumen legal dan kontrak strategis yang telah ditangani.' },
    { stat: '4 Tahap', description: 'Metode kerja terstruktur dari audit hingga monitoring.' },
  ]

  const processes = [
    { number: '01', title: 'Konsultasi Awal', description: 'Memetakan urgensi, risiko, dan tujuan klien secara cepat.' },
    { number: '02', title: 'Analisis Dokumen', description: 'Menelaah kontrak dan legal posture untuk menemukan celah risiko.' },
    { number: '03', title: 'Eksekusi Strategi', description: 'Implementasi solusi hukum yang realistis dan terukur.' },
  ]

  return (
    <section className="insight-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Insight yang Membuat Kami Berbeda</h2>
          <p>
            Pendekatan kami bukan hanya legal formalitas, tapi strategi hukum yang benar-benar bisa dieksekusi.
          </p>
        </div>

        <div className="insight-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <h3>{insight.stat}</h3>
              <p>{insight.description}</p>
            </div>
          ))}
        </div>

        <div className="process-grid">
          {processes.map((process, index) => (
            <div key={index} className="process-item">
              <span>{process.number}</span>
              <h4>{process.title}</h4>
              <p>{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
