'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Konsultasi Hukum Korporasi',
      description: 'Penyusunan kontrak, legal drafting, analisis risiko hukum, dan pendampingan sengketa bisnis profesional.',
    },
    {
      icon: Scale,
      title: 'Konsultasi Pajak & Kepatuhan',
      description: 'Optimalisasi perencanaan pajak, audit internal, dan pendampingan kepatuhan regulasi perpajakan.',
    },
    {
      icon: Zap,
      title: 'Strategi & Pengembangan Bisnis',
      description: 'Analisis struktur bisnis, mitigasi risiko, dan perencanaan ekspansi usaha yang terstruktur.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="services">
      <div className="section-header">
        <h2>Layanan Profesional Kami</h2>
        <p>Kami menyediakan layanan konsultasi hukum yang dirancang untuk memberikan perlindungan maksimal dan strategi bisnis yang adaptif.</p>
      </div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} className="service-card" variants={itemVariants}>
              <div className="service-icon">
                <Icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
