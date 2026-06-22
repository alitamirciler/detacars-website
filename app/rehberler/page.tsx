import {
  ArrowRight,
  Calculator,
  Car,
  FileSearch,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

const guides = [
  {
    title: 'Araç Değerleme Nasıl Yapılır?',
    description:
      'İkinci el araçlarda fiyat belirlenirken kilometre, hasar, boya, değişen, donanım ve piyasa emsallerinin nasıl değerlendirildiğini anlatıyoruz.',
    href: '/rehberler/arac-degerleme-nasil-yapilir',
    icon: Calculator,
  },
  {
    title: 'Ekspertiz Raporu Nasıl Okunur?',
    description:
      'Ekspertiz raporundaki boya, değişen, mekanik ve elektronik kontrollerin araç değerine etkisini sade şekilde açıklıyoruz.',
    href: '#',
    icon: FileSearch,
  },
  {
    title: 'Takaslı Araç Satışı Nasıl Yapılır?',
    description:
      'Aracınızı takasa vermeden önce fiyat, fark ödemesi, ekspertiz ve noter sürecinde dikkat etmeniz gerekenleri özetliyoruz.',
    href: '#',
    icon: Handshake,
  },
  {
    title: 'İkinci El Araç Satarken Nelere Dikkat Edilmeli?',
    description:
      'Aracınızı satarken doğru fiyatlama, güvenli ödeme, noter işlemleri ve pazarlık sürecinde dikkat edilmesi gereken noktalar.',
    href: '#',
    icon: ShieldCheck,
  },
];

export default function RehberlerPage() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">
          <span className="mark">D</span>
          <span>DETACARS</span>
        </a>

        <nav>
          <a href="/#arac-alim">Araç Alım</a>
          <a href="/#satis">Satıştaki Araçlar</a>
          <a href="/rehberler">Rehberler</a>
          <a href="/#hakkimizda">Hakkımızda</a>
        </nav>

        <a
          className="navCta"
          href="https://wa.me/905383642991?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
          target="_blank"
        >
          WhatsApp
        </a>
      </header>

      <section className="guideHero">
        <p className="eyebrow dark">Rehberler</p>
        <h1>Araç Alım Satım Rehberleri</h1>
        <p>
          İkinci el araç alım, satış, takas ve değerleme süreçleri hakkında
          hazırladığımız rehberlerle daha bilinçli karar verin.
        </p>
      </section>

      <section className="guideGrid">
        {guides.map((guide) => {
          const Icon = guide.icon;

          return (
            <a className="guideCard" href={guide.href} key={guide.title}>
              <Icon />
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <span>
                Rehberi oku <ArrowRight size={18} />
              </span>
            </a>
          );
        })}
      </section>

      <section className="guideCta">
        <Car />
        <h2>Aracınız için ön değerlendirme almak ister misiniz?</h2>
        <p>
          Marka, model, kilometre ve hasar bilgilerini WhatsApp üzerinden
          gönderin. Aracınızı piyasa verileri doğrultusunda değerlendirelim.
        </p>
        <a
          className="primary"
          href="https://wa.me/905383642991?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
          target="_blank"
        >
          WhatsApp’tan Değerlendir
        </a>
      </section>

      <footer className="footer">
        <strong>DETACARS</strong>
        <br />
        Detacars Otomotiv Sanayi ve Ticaret Limited Şirketi
        <br />
        0224 211 65 56
        <br />
        info@detacars.com.tr
        <br />
        Bursa
        <br />
        © 2026 Detacars
      </footer>
    </main>
  );
}