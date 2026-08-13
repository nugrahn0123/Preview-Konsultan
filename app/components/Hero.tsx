'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Klien Terlayani' },
    { icon: Award, value: '15+', label: 'Tahun Pengalaman' },
    { icon: ShieldCheck, value: '98%', label: 'Tingkat Kepuasan' },
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Solusi Hukum Profesional untuk Bisnis Anda
        </motion.h1>

        <motion.p variants={itemVariants}>
          Kami menyediakan konsultasi hukum strategis dan solusi bisnis yang disesuaikan dengan kebutuhan unik perusahaan Anda. Tim ahli kami siap membantu Anda mencapai kesuksesan.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >
          <a href="#booking" className="btn btn-primary">
            Mulai Konsultasi
            <ArrowRight size={20} />
          </a>
          <a href="#about" className="btn btn-white">
            Pelajari Lebih Lanjut
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="hero-stat-card">
                <div className="hero-stat-icon">
                  <Icon size={22} />
                </div>
                <div className="hero-stat-text">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
