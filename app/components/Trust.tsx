'use client';

import { motion } from 'framer-motion';
import { BarChart3, Lock, Target } from 'lucide-react';

export default function Trust() {
  const trustCards = [
    {
      icon: BarChart3,
      title: 'Analisis Mendalam',
      description: 'Evaluasi komprehensif sebelum setiap rekomendasi hukum diberikan untuk hasil maksimal.',
    },
    {
      icon: Lock,
      title: 'Kerahasiaan Terjamin',
      description: 'Standar profesional tinggi untuk menjaga seluruh data dan kepercayaan klien.',
    },
    {
      icon: Target,
      title: 'Berorientasi Solusi',
      description: 'Fokus pada penyelesaian efektif dan perlindungan hukum jangka panjang.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="trust" id="trust">
      <div className="section-header">
        <h2>Mengapa Klien Mempercayai Kami</h2>
        <p>Kepercayaan adalah fondasi utama. Kami memberikan solusi terukur, aman, dan strategis untuk kesuksesan jangka panjang Anda.</p>
      </div>

      <motion.div
        className="trust-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {trustCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div key={index} className="trust-card" variants={itemVariants}>
              <div className="trust-icon">
                <Icon size={28} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
