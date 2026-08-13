'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    note: '',
  })
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, phone, date, time, service, note } = formData

    if (!name || !phone || !date || !time || !service || !note) {
      setStatus({ message: 'Mohon lengkapi semua data booking.', isError: true })
      return
    }

    const message = `Halo Arkana Legal, saya ingin booking konsultasi.%0A%0ANama: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0ATanggal: ${encodeURIComponent(date)}%0AJam: ${encodeURIComponent(time)}%0ALayanan: ${encodeURIComponent(service)}%0AKebutuhan: ${encodeURIComponent(note)}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`

    setStatus({ message: 'Booking berhasil disiapkan. Anda akan diarahkan ke WhatsApp...', isError: false })
    setFormData({ name: '', phone: '', date: '', time: '', service: '', note: '' })

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 500)
  }

  return (
    <section id="booking" className="booking-section reveal">
      <div className="container booking-wrapper">
        <div className="booking-intro">
          <h2>Booking Konsultasi</h2>
          <p>
            Pilih jadwal dan jenis layanan yang Anda butuhkan.
            Tim kami akan menghubungi Anda untuk konfirmasi sesi.
          </p>
          <ul className="booking-points">
            <li>Durasi sesi awal 30-45 menit</li>
            <li>Konfirmasi maksimal 1x24 jam kerja</li>
            <li>Data Anda dijaga dengan standar profesional</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-grid">
            <label>
              Nama Lengkap
              <input
                type="text"
                name="name"
                placeholder="Masukkan nama"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Nomor WhatsApp
              <input
                type="tel"
                name="phone"
                placeholder="08xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Tanggal
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Jam
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>
            <label className="full-width">
              Layanan
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Pilih layanan</option>
                <option value="Konsultasi Hukum Korporasi">Konsultasi Hukum Korporasi</option>
                <option value="Konsultasi Pajak & Kepatuhan">Konsultasi Pajak & Kepatuhan</option>
                <option value="Strategi & Pengembangan Bisnis">Strategi & Pengembangan Bisnis</option>
              </select>
            </label>
            <label className="full-width">
              Kebutuhan Singkat
              <textarea
                name="note"
                rows={4}
                placeholder="Ceritakan kebutuhan Anda secara singkat"
                value={formData.note}
                onChange={handleChange}
                required
              ></textarea>
            </label>
          </div>

          <button type="submit" className="booking-submit">Kirim Booking</button>
          {status.message && (
            <p
              className={`booking-status ${status.isError ? 'error' : ''}`}
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
