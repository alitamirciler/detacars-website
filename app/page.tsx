import {
  Car,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  XCircle,
  Banknote,
  FileCheck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum. Marka/model, km ve hasar bilgilerini paylaşacağım.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`;

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">
          <span className="mark">D</span>
          <span>DETACARS</span>
        </div>

        <nav>
          <a href="#surec">Süreç</a>
          <a href="#neden">Neden Detacars?</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <a className="navCta" href={whatsappUrl} target="_blank">
          WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Bursa merkezli hızlı araç alım sistemi</p>
          <h1>Net fiyat. Hızlı karar. Sorunsuz satış.</h1>
          <p className="lead">
            Premium ve orta üst segment araçlarda Bursa merkezli hızlı alım süreci.
            Aracınızı ilan ve pazarlık süreciyle uğraşmadan güvenli şekilde değerlendirelim.
          </p>

          <div className="heroActions">
            <a className="primary" href={whatsappUrl} target="_blank">
              <MessageCircle size={20} /> WhatsApp’tan Teklif Al
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>650+</strong>
          <span>Tamamlanan araç işlemi</span>
        </div>
        <div>
          <strong>20+</strong>
          <span>Aynı anda stok kapasitesi</span>
        </div>
        <div>
          <strong>%100</strong>
          <span>Noter ve ödeme güvenliği</span>
        </div>
      </section>

      <section id="surec" className="section">
        <div className="sectionHead">
          <p className="eyebrow dark">Süreç</p>
          <h2>Aracınızı satma süreci nasıl ilerliyor?</h2>
        </div>

        <div className="cards three">
          <article>
            <Car />
            <h3>1. Bilgileri paylaşın</h3>
            <p>Marka, model, kilometre, hasar ve paket bilgilerini WhatsApp üzerinden gönderin.</p>
          </article>

          <article>
            <Banknote />
            <h3>2. Ön değerlendirme alın</h3>
            <p>Piyasa koşullarına göre hızlı ve gerçekçi ön fiyat aralığı paylaşalım.</p>
          </article>

          <article>
            <FileCheck />
            <h3>3. Ekspertiz ve noter</h3>
            <p>Uygun araçlarda ekspertiz, noter ve ödeme sürecini hızlıca tamamlayalım.</p>
          </article>
        </div>
      </section>

      <section id="neden" className="split">
        <div>
          <p className="eyebrow dark">Netlik</p>
          <h2>Araç alırken ne vaat etmiyoruz?</h2>

          <div className="list negative">
            <p><XCircle /> Piyasanın üzerinde gerçek dışı teklif</p>
            <p><XCircle /> Başta farklı, ekspertizde farklı fiyat</p>
            <p><XCircle /> Günler süren belirsiz süreçler</p>
          </div>
        </div>

        <div className="glass">
          <h2>Bunun yerine ne sunuyoruz?</h2>

          <div className="list positive">
            <p><CheckCircle2 /> Net ve gerçekçi fiyat yaklaşımı</p>
            <p><Clock3 /> Hızlı karar ve aynı gün işlem</p>
            <p><ShieldCheck /> Sorunsuz noter ve ödeme süreci</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div>
          <p className="eyebrow">Detacars hakkında</p>
          <h2>İşimiz yalnızca araç almak değil, süreci sorunsuz kapatmaktır.</h2>
          <p>
            Detacars olarak bugüne kadar 650&apos;den fazla araç işlemini tamamladık.
            Özellikle premium ve orta üst segment araçlarda hızlı karar verebilen,
            ödeme gücü olan ve süreci uzatmayan bir alım yapısı oluşturduk.
          </p>
        </div>
      </section>

      <section id="iletisim" className="formSection">
        <div className="sectionHead">
          <p className="eyebrow dark">Ön değerlendirme</p>
          <h2>Aracınızı değerlendirelim</h2>
          <p>
            Marka, model, kilometre ve hasar bilgisini WhatsApp üzerinden gönderin.
            Uygun araçlarda hızlı ön değerlendirme paylaşalım.
          </p>

          <br />

          <a className="primary" href={whatsappUrl} target="_blank">
            <MessageCircle size={20} /> WhatsApp’tan Bilgi Gönder
          </a>
        </div>
      </section>

      <section className="finalCta">
        <h2>Aracınızı satmak için beklemeyin.</h2>
        <p>Hızlı, net ve sorunsuz satış için Detacars ile iletişime geçin.</p>

        <a className="primary" href={whatsappUrl} target="_blank">
          <MessageCircle size={20} /> WhatsApp’tan Yaz
        </a>
      </section>

      <footer className="footer">
  <strong>DETACARS OTOMOTİV</strong>
  <br />
  <Phone size={14} /> 0538 364 29 91
  <br />
  <Phone size={14} /> 0224 211 65 56
  <br />
  <Mail size={14} /> info@detacars.com.tr
  <br />
  <MapPin size={14} /> Bursa Yeni Oto Merkezi
  <br />
  © 2026 Detacars Otomotiv
</footer>

      <a className="floating" href={whatsappUrl} target="_blank">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}