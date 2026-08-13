'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <p>&copy; {currentYear} Arkana Legal Consulting. Semua hak cipta dilindungi.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.8 }}>
          Konsultasi hukum profesional untuk kesuksesan bisnis Anda.
        </p>
      </div>
    </footer>
  );
}
