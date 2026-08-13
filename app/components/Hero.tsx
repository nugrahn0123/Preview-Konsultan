'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Scale, Users, Award, ShieldCheck } from 'lucide-react';

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

  const floatingIcons = [
    { icon: Scale, top: '15%', left: '8%', delay: 0 },
    { icon: ShieldCheck, top: '65%', left: '5%', delay: 0.5 },
    { icon: Award, top: '25%', left: '88%', delay: 1 },
    { icon: Users, top: '70%', left: '90%', delay: 1.5 },
  ];

  return (
    <section className="hero">
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="hero-floating-icon"
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 1, delay: item.delay },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            }}
          >
            <Icon size={28} />
          </motion.div>
        );
      })}

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
