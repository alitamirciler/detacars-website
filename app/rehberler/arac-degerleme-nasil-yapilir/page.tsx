import { MessageCircle } from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export default function ArticlePage() {
  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 24px',
      }}
    >
      <p
        style={{
          color: '#0e8f3d',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '.08em',
        }}
      >
        Rehber
      </p>

      <h1
        style={{
          fontSize: '48px',
          lineHeight: '1.1',
          marginBottom: '32px',
        }}
      >
        Araç Değerleme Nasıl Yapılır?
      </h1>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Aracını satmayı düşünen birçok kişinin ilk sorusu “Aracım kaç para
        eder?” olur. Ancak ikinci el araç piyasasında doğru fiyatı belirlemek
        yalnızca marka, model ve kilometreye bakılarak yapılmaz.
      </p>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Araç değerlemesinde; aracın kilometresi, hasar geçmişi, boya ve değişen
        durumu, donanım seviyesi, bakım geçmişi ve güncel piyasa koşulları
        birlikte değerlendirilir.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Araç değerini etkileyen başlıca unsurlar
      </h2>

      <ul style={{ lineHeight: '2', fontSize: '18px' }}>
        <li>Marka ve model</li>
        <li>Kilometre</li>
        <li>Hasar geçmişi</li>
        <li>Boya ve değişen durumu</li>
        <li>Donanım paketi</li>
        <li>Bakım geçmişi</li>
        <li>Piyasa talebi</li>
      </ul>

      <h2 style={{ marginTop: '48px' }}>
        Neden aynı model araçlar farklı fiyatlara satılır?
      </h2>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Aynı yıl ve aynı kilometrede görünen iki aracın fiyatı arasında ciddi
        farklar olabilir. Bunun sebebi aracın geçmişi, kondisyonu, bakım
        durumu ve ekspertiz sonuçlarıdır.
      </p>

      <div
        style={{
          marginTop: '64px',
          padding: '32px',
          borderRadius: '18px',
          background: '#f6f7f6',
          textAlign: 'center',
        }}
      >
        <h2>Aracınız için ön değerlendirme alın</h2>

        <p style={{ color: '#555', lineHeight: '1.7' }}>
          Marka, model, kilometre ve hasar bilgilerini paylaşın.
          Aracınızı piyasa verileri doğrultusunda değerlendirelim.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#0e9f45',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={18} />
          WhatsApp’tan Değerlendir
        </a>
      </div>
    </main>
  );
}