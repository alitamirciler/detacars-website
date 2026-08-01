import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  CarFront,
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
    published: true,
  },
  {
    title: 'Ekspertiz Raporu Nasıl Okunur?',
    description:
      'Ekspertiz raporundaki boya, değişen, mekanik ve elektronik kontrollerin araç değerine etkisini sade şekilde açıklıyoruz.',
    href: '/rehberler/ekspertiz-raporu-nasil-yorumlanir',
    icon: FileSearch,
    published: true,
  },
  {
    title: 'Filo Çıkması Araç Alınır mı?',
    description:
      'Filo çıkışlı araçların kullanım biçimini, servis geçmişini, ekspertiz durumunu ve fiyat-kondisyon ilişkisini gerçek saha tecrübeleriyle değerlendiriyoruz.',
    href: '/rehberler/filo-cikmasi-arac-alinir-mi',
    icon: CarFront,
    published: true,
  },
{
  title: 'Boyalı veya Değişenli Araç Alınır mı?',
  description:
    'Boya ve değişenin tek başına neden kötü araç anlamına gelmediğini; hasarın yeri, yapısal durum, satış hızı ve fiyat avantajı üzerinden anlatıyoruz.',
  href: '/rehberler/boyali-veya-degisenli-arac-alinir-mi',
  icon: FileSearch,
  published: true,
},
  {
  title: 'Aracınızı Takasa Vermeden Önce Bilmeniz Gerekenler',
  description:
    'Takas teklifini değerlendirirken yalnızca aracınıza verilen rakama değil, iki aracın gerçek piyasa değeri arasındaki farka nasıl bakmanız gerektiğini anlatıyoruz.',
  href: '/rehberler/aracinizi-takasa-vermeden-once-bilmeniz-gerekenler',
  icon: Handshake,
  published: true,
},
  {
    title: 'İkinci El Araç Satarken Nelere Dikkat Edilmeli?',
    description:
      'Aracınızı satarken doğru fiyatlama, güvenli ödeme, noter işlemleri ve pazarlık sürecinde dikkat edilmesi gereken noktalar.',
    href: '/rehberler/ikinci-el-arac-satarken-nelere-dikkat-edilmeli',
    icon: ShieldCheck,
    published: true,
  },
];

export default function RehberlerPage() {
  return (
    <main>
      <header className="nav">
        <Link className="brand" href="/">
          <span className="mark">D</span>
          <span>DETACARS</span>
        </Link>

        <nav>
          <Link href="/#arac-alim">Araç Alım</Link>
          <Link href="/#satis">Satıştaki Araçlar</Link>
          <Link href="/rehberler">Rehberler</Link>
          <Link href="/#hakkimizda">Hakkımızda</Link>
        </nav>

        <a
          className="navCta"
          href="https://wa.me/905383642991?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
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

          if (!guide.published) {
            return (
              <div className="guideCard" key={guide.title}>
                <Icon />
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <span>Yakında</span>
              </div>
            );
          }

          return (
            <Link
              className="guideCard"
              href={guide.href}
              key={guide.title}
            >
              <Icon />
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <span>
                Rehberi oku <ArrowRight size={18} />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="guideCta">
        <h2>Aracınız için ön değerlendirme almak ister misiniz?</h2>

        <p>
          Marka, model, kilometre ve hasar bilgilerini WhatsApp üzerinden
          gönderin. Aracınızı piyasa verileri doğrultusunda değerlendirelim.
        </p>

        <a
          className="primary"
          href="https://wa.me/905383642991?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
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