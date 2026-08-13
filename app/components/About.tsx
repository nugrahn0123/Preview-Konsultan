'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const benefits = [
    'Pengalaman 15+ tahun di industri hukum',
    'Tim profesional bersertifikat internasional',
    'Solusi hukum yang inovatif dan efektif',
    'Pendekatan strategis untuk setiap kasus',
    'Respons cepat dan dukungan berkelanjutan',
    'Tarif yang kompetitif dan transparan',
  ];

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Mengapa Memilih Arkana Legal?</h2>
          <p>
            Arkana Legal Consulting adalah mitra terpercaya untuk kebutuhan hukum dan strategi bisnis Anda. Kami berkomitmen memberikan solusi yang inovatif, efektif, dan disesuaikan dengan kebutuhan klien.
          </p>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <CheckCircle2 size={20} className="inline mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
            alt="Tentang Arkana Legal"
          />
        </motion.div>
      </div>
    </section>
  );
}
