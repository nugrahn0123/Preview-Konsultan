'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Butuh Konsultasi Hukum?</h2>
        <p>Tim ahli kami siap membantu Anda dengan solusi profesional dan strategis.</p>
        <a href="https://wa.me/6281234567890" className="btn btn-white">
          Chat WhatsApp
          <MessageCircle size={20} />
        </a>
      </motion.div>
    </section>
  );
}
