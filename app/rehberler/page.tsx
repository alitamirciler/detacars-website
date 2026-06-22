export default function RehberlerPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}>
      <p
        style={{
          color: '#0e8f3d',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Rehberler
      </p>

      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
        Araç Alım Satım Rehberleri
      </h1>

      <p
        style={{
          fontSize: '20px',
          color: '#555',
          maxWidth: '700px',
          lineHeight: '1.7',
          marginBottom: '48px',
        }}
      >
        İkinci el araç alım, satış, takas ve değerleme süreçleri hakkında
        hazırladığımız rehberler.
      </p>

      <a
        href="/rehberler/arac-degerleme-nasil-yapilir"
        style={{
          display: 'block',
          border: '1px solid #eee',
          borderRadius: '18px',
          padding: '32px',
          textDecoration: 'none',
          color: '#111',
          boxShadow: '0 10px 30px rgba(0,0,0,.05)',
        }}
      >
        <h2>Araç Değerleme Nasıl Yapılır?</h2>

        <p style={{ color: '#666', lineHeight: '1.7' }}>
          İkinci el araçlarda fiyat belirlenirken hangi kriterlerin etkili
          olduğunu, ekspertiz sonuçlarının değeri nasıl değiştirdiğini ve
          gerçek piyasa değerinin nasıl hesaplandığını anlatıyoruz.
        </p>
      </a>
    </main>
  );
}