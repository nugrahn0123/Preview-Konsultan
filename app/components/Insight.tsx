'use client';

import { motion } from 'framer-motion';

export default function Insight() {
  const insights = [
    { stat: '95%', description: 'Tingkat kepuasan klien terhadap sesi konsultasi awal.' },
    { stat: '24 Jam', description: 'Rata-rata waktu respons untuk pertanyaan prioritas.' },
    { stat: '300+', description: 'Dokumen legal dan kontrak strategis yang telah ditangani.' },
    { stat: '4 Tahap', description: 'Metode kerja terstruktur dari audit hingga monitoring.' },
  ];

  const processes = [
    { title: 'Konsultasi Awal', description: 'Memetakan urgensi, risiko, dan tujuan klien secara cepat.' },
    { title: 'Analisis Dokumen', description: 'Menelaah kontrak dan legal posture untuk menemukan celah risiko.' },
    { title: 'Eksekusi Strategi', description: 'Implementasi solusi hukum yang realistis dan terukur.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="insight">
      <div className="section-header">
        <h2>Insight yang Membuat Kami Berbeda</h2>
        <p>Pendekatan kami bukan hanya legal formalitas, tapi strategi hukum yang benar-benar bisa dieksekusi.</p>
      </div>

      <motion.div
        className="insight-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {insights.map((insight, index) => (
          <motion.div key={index} className="insight-card" variants={itemVariants}>
            <div className="insight-stat">{insight.stat}</div>
            <p>{insight.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="process-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {processes.map((process, index) => (
          <motion.div key={index} className="process-step" variants={itemVariants}>
            <div className="step-number">{index + 1}</div>
            <h4>{process.title}</h4>
            <p>{process.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
