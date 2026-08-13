'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    note: '',
  });
  const [status, setStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, date, time, service, note } = formData;

    if (!name || !phone || !date || !time || !service || !note) {
      setStatus({ message: 'Mohon lengkapi semua data booking.', isError: true });
      return;
    }

    setIsSubmitting(true);

    const message = `Halo Arkana Legal, saya ingin booking konsultasi.%0A%0ANama: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0ATanggal: ${encodeURIComponent(date)}%0AJam: ${encodeURIComponent(time)}%0ALayanan: ${encodeURIComponent(service)}%0AKebutuhan: ${encodeURIComponent(note)}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;

    setStatus({ message: 'Booking berhasil disiapkan. Anda akan diarahkan ke WhatsApp...', isError: false });
    setFormData({ name: '', phone: '', date: '', time: '', service: '', note: '' });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="booking" className="booking">
      <div className="section-header">
        <h2>Jadwalkan Konsultasi Anda</h2>
        <p>Isi form berikut untuk memulai konsultasi gratis dengan tim ahli kami. Kami akan segera menghubungi Anda.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="booking-form"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="form-group" variants={itemVariants}>
          <label className="form-label">Nama Lengkap</label>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Masukkan nama Anda"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className="form-grid" variants={itemVariants}>
          <div className="form-group">
            <label className="form-label">Nomor WhatsApp</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="08xxxxxxxxxx"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </motion.div>

        <motion.div className="form-grid" variants={itemVariants}>
          <div className="form-group">
            <label className="form-label">Jam</label>
            <input
              type="time"
              name="time"
              className="form-input"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Layanan</label>
            <select
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Pilih layanan</option>
              <option value="Konsultasi Hukum Korporasi">Konsultasi Hukum Korporasi</option>
              <option value="Konsultasi Pajak & Kepatuhan">Konsultasi Pajak & Kepatuhan</option>
              <option value="Strategi & Pengembangan Bisnis">Strategi & Pengembangan Bisnis</option>
            </select>
          </div>
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <label className="form-label">Kebutuhan Singkat</label>
          <textarea
            name="note"
            className="form-textarea"
            placeholder="Ceritakan kebutuhan Anda secara singkat"
            value={formData.note}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
          variants={itemVariants}
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Booking'}
          <Send size={20} />
        </motion.button>

        <motion.div
          className={`form-status ${status.isError ? 'error' : 'success'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: status.message ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {status.message}
        </motion.div>
      </motion.form>
    </section>
  );
}
