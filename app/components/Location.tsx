'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function Location() {
  const contactInfo = [
    { icon: MapPin, label: 'Alamat', value: 'Jl. Medan Merdeka Barat No. 12, Jakarta Pusat' },
    { icon: Phone, label: 'Telepon', value: '+62 21 9876 5432' },
    { icon: Mail, label: 'Email', value: 'konsultasi@arkanalegal.co.id' },
    { icon: Clock, label: 'Jam Operasional', value: 'Senin - Jumat, 09:00 - 18:00' },
  ];

  return (
    <section id="location" className="location">
      <div className="location-grid">
        <motion.div
          className="location-map"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps?q=Monumen+Nasional+Jakarta&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Arkana Legal"
          ></iframe>
        </motion.div>

        <motion.div
          className="location-info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Kunjungi Kantor Kami</h3>
          <p>Lokasi konsultasi strategis dengan akses mudah dan suasana privat untuk diskusi bisnis penting Anda.</p>

          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="info-item">
                <div className="info-item-icon">
                  <Icon size={20} />
                </div>
                <div className="info-item-content">
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            );
          })}

          <a href="https://maps.google.com/?q=Monumen+Nasional+Jakarta" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Buka di Google Maps
            <Globe size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
