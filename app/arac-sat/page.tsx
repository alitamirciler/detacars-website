import type { Metadata } from 'next';
import {
  BadgeCheck,
  Banknote,
  Car,
  CheckCircle2,
  FileCheck,
  Gauge,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Store,
  Wrench,
} from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracımı satmayı düşünüyorum. Detacars\'tan teklif almak istiyorum. Marka/model, yıl, kilometre ve araç bilgilerini paylaşacağım.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`;
const sahibindenUrl = 'https://detacars.sahibinden.com/';

export const metadata: Metadata = {
  title: 'Aracını Sat | Bursa’da Araç Alımı ve Değerlendirme | Detacars',
  description:
    'Aracınızı satmayı düşünüyorsanız marka, model, kilometre ve araç bilgilerini Detacars ile paylaşın. Bursa’da aracınızı değerlendirelim ve uygun araçlar için satın alma teklifimizi iletelim.',
  alternates: {
    canonical: 'https://detacars.com.tr/arac-sat',
  },
};

export default function AracSatPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Araç Alım ve Değerlendirme',
    provider: {
      '@type': 'AutoDealer',
      name: 'Detacars Otomotiv Sanayi ve Ticaret Limited Şirketi',
      url: 'https://detacars.com.tr',
      telephone: '+90 224 211 65 56',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bursa',
        addressCountry: 'TR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Bursa',
    },
    url: 'https://detacars.com.tr/arac-sat',
    description:
      'Bursa merkezli araç alım ve değerlendirme hizmeti. Araç bilgileri incelenir, uygun araçlar için satın alma teklifi iletilir.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Aracımın değerini nasıl öğrenebilirim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Araç bilgilerinizi Detacars ile paylaşarak ön değerlendirme talep edebilirsiniz. Nihai satın alma teklifi aracın detayları ve gerektiğinde fiziki inceleme veya ekspertiz sonrasında netleşir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Detacars her aracı satın alıyor mu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hayır. Araç yaşı, kilometresi, kondisyonu, piyasa talebi ve stok durumuna göre satın alma kararı değişebilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Teklif almak aracımı satmak zorunda olduğum anlamına gelir mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hayır. Detacars teklifini değerlendirebilir veya diğer satış seçeneklerinizle karşılaştırabilirsiniz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Boyalı veya değişenli araçları alıyor musunuz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Araç özelinde değerlendiriyoruz. Boyalı veya değişenli olması tek başına olumsuz karar sebebi değildir; işlemin yeri, niteliği ve aracın genel durumu birlikte değerlendirilir.',
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="nav">
        <a className="brand" href="/">
          <span className="mark">D</span>
          <span>DETACARS</span>
        </a>

        <nav>
          <a href="/arac-sat">Araç Alım</a>
          <a href={`${sahibindenUrl}`} target="_blank" rel="noopener noreferrer">
            Satıştaki Araçlar
          </a>
          <a href="/rehberler">Rehberler</a>
          <a href="/#hakkimizda">Hakkımızda</a>
        </nav>

        <a
          className="navCta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <section className="sellHero">
        <div className="sellHeroInner">
          <p className="eyebrow dark">Bursa merkezli araç alımı</p>
          <h1>Aracınızı Satmadan Önce Detacars’tan da Teklif Alın</h1>
          <p className="sellLead">
            Aracınızı satmayı düşünüyorsanız marka, model, kilometre ve araç
            bilgilerini bizimle paylaşın. Aracınızı güncel piyasa koşullarına göre
            değerlendirelim; satın almak istediğimiz araçlar için teklifimizi iletelim.
          </p>

          <div className="sellHeroActions">
            <a
              className="primary heroButton"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} /> Aracım İçin Teklif Al
            </a>
          </div>

          <div className="sellTrustRow">
            <span><CheckCircle2 size={18} /> Ücretsiz ön değerlendirme</span>
            <span><CheckCircle2 size={18} /> Satış zorunluluğu yok</span>
            <span><CheckCircle2 size={18} /> Bursa’da yüz yüze işlem</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow dark">Araç alım</p>
          <h2>Aracınızı şeffaf şekilde değerlendirelim</h2>
          <p>
            Araç değerlemesinde amacımız yalnızca teklif vermek değil, fiyatın nasıl
            oluştuğunu da açıkça paylaşmaktır. Böylece aracınız için yaptığımız
            değerlendirmenin neye dayandığını bilirsiniz.
          </p>
        </div>

        <div className="sellTextBlock">
          <p>
            Marka, model, yıl, kilometre, paket, hasar geçmişi ve kondisyon gibi temel
            bilgileri güncel piyasa emsalleriyle birlikte inceleriz. Satın almak
            istediğimiz araçlar için ön değerlendirmemizi ve teklifimizi paylaşırız.
            Teklifi değerlendirip değerlendirmemek tamamen size kalır.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow dark">Süreç</p>
          <h2>Süreç nasıl ilerliyor?</h2>
          <p>İlk araç bilgisinden ekspertiz ve noter aşamasına kadar süreci net tutuyoruz.</p>
        </div>

        <div className="cards three processCards sellProcessCards">
          <article>
            <MessageCircle />
            <h3>1. Bilgileri paylaşın</h3>
            <p>
              Marka, model, kilometre, paket, hasar ve varsa ekspertiz bilgilerini
              WhatsApp üzerinden gönderin.
            </p>
          </article>

          <article>
            <Banknote />
            <h3>2. Ön değerlendirme alın</h3>
            <p>
              Piyasa emsalleri ve aracın durumuna göre gerçekçi bir ön değerlendirme
              ve satın alma teklifi paylaşalım.
            </p>
          </article>

          <article>
            <FileCheck />
            <h3>3. Ekspertiz, noter ve ödeme</h3>
            <p>
              Araç beyan edilen durumla uyumluysa ekspertiz sonrası noter ve ödeme
              sürecini tamamlayalım.
            </p>
          </article>
        </div>

        <div className="centerCta">
          <a
            className="primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> Aracım İçin Teklif Al
          </a>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow dark">Araç değerleme</p>
          <h2>Aracınızı değerlendirirken nelere bakıyoruz?</h2>
          <p>
            Tek bir ilan fiyatına bakarak karar vermiyoruz. Aracın gerçek piyasa
            karşılığını etkileyen temel unsurları birlikte değerlendiriyoruz.
          </p>
        </div>

        <div className="sellFactorGrid">
          <article>
            <SearchCheck />
            <h3>Emsal araçlar</h3>
            <p>
              Aynı model, yıl ve benzer özelliklerdeki araçların ilan ve satış
              seviyelerini birlikte değerlendiririz.
            </p>
          </article>

          <article>
            <Gauge />
            <h3>Kilometre ve kullanım</h3>
            <p>
              Kilometre, kullanım şekli ve genel kondisyon aynı model iki araç arasında
              önemli değer farkı oluşturabilir.
            </p>
          </article>

          <article>
            <Wrench />
            <h3>Boya, değişen ve hasar geçmişi</h3>
            <p>
              Boya, değişen ve hasar geçmişini tek başına değil; işlemin yeri, niteliği
              ve aracın genel durumu ile birlikte değerlendiririz.
            </p>
          </article>

          <article>
            <BadgeCheck />
            <h3>Donanım ve kombinasyon</h3>
            <p>
              Motor, paket, renk ve opsiyonlar aracın piyasadaki talebini ve değerini
              doğrudan etkileyebilir.
            </p>
          </article>

          <article>
            <Car />
            <h3>Piyasadaki talep</h3>
            <p>
              Aracın yalnızca ilan fiyatına değil, piyasadaki talebine ve gerçek satış
              hızına da bakarız.
            </p>
          </article>

          <article>
            <FileCheck />
            <h3>Bakım ve servis geçmişi</h3>
            <p>
              Bakım geçmişi, servis kayıtları ve aracın kullanım boyunca nasıl korunduğu
              genel değerlendirmeyi etkiler.
            </p>
          </article>
        </div>
      </section>

      <section className="sellSegmentSection">
        <div>
          <p className="eyebrow">Hangi araçlarla ilgileniyoruz?</p>
          <h2>Özellikle orta üst ve premium segment araçları değerlendiriyoruz.</h2>
          <p>
            Detacars farklı marka ve modellerde araç alımı yapar. Özellikle orta üst ve
            premium segment araçların piyasa dinamikleri, donanım seçenekleri ve alıcı
            beklentileri günlük işimizin önemli bir bölümünü oluşturur.
          </p>
          <p className="sellSegmentNote">
            Her aracı kendi özellikleri içinde değerlendiririz. Yaş, kilometre,
            kondisyon, hasar geçmişi, piyasa talebi ve mevcut stok durumumuz satın alma
            kararımızı etkileyebilir.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow dark">Güvenli işlem</p>
          <h2>Ekspertizden ödemeye kadar net bir işlem süreci</h2>
          <p>
            Teklif üzerinde anlaşılması halinde ekspertiz, noter ve ödeme adımlarını
            baştan konuşur, süreci mümkün olduğunca hızlı ve açık şekilde tamamlarız.
          </p>
        </div>

        <div className="cards four">
          <article>
            <Store />
            <h3>Fiziksel işletme</h3>
            <p>Bursa Yeni Oto Merkezi’ndeki işletmemizde yüz yüze görüşebilirsiniz.</p>
          </article>

          <article>
            <SearchCheck />
            <h3>Ekspertiz</h3>
            <p>
              Araç beyan edilen bilgilerle uyumluysa ekspertiz sonucunu birlikte
              değerlendirerek işlemi ilerletiriz.
            </p>
          </article>

          <article>
            <ShieldCheck />
            <h3>Ödeme ve noter</h3>
            <p>
              Anlaşma sağlandığında noter ve ödeme adımlarını netleştirir, işlemi aynı
              süreç içinde tamamlarız.
            </p>
          </article>

          <article>
            <Phone />
            <h3>Doğrudan iletişim</h3>
            <p>
              Değerlendirme ve satış boyunca doğrudan Detacars ekibiyle iletişim
              kurarsınız.
            </p>
          </article>
        </div>
      </section>

      <section className="sellFaqSection">
        <div className="sectionHead">
          <p className="eyebrow dark">Sık sorulan sorular</p>
          <h2>Araç alımı hakkında sık sorulanlar</h2>
        </div>

        <div className="sellFaqList">
          <details>
            <summary>Aracımın değerini nasıl öğrenebilirim?</summary>
            <p>
              Marka, model, kilometre, paket, hasar ve varsa ekspertiz bilgilerini
              bizimle paylaşın. Piyasa emsalleri ve aracın durumuna göre ön
              değerlendirmemizi iletelim. Nihai teklif ekspertiz sonrasında netleşebilir.
            </p>
          </details>

          <details>
            <summary>Detacars her aracı satın alıyor mu?</summary>
            <p>
              Hayır. Aracı yaş, kilometre, kondisyon, hasar geçmişi, piyasa talebi ve
              mevcut stok durumumuza göre değerlendiririz.
            </p>
          </details>

          <details>
            <summary>Teklif almak aracımı satmak zorunda olduğum anlamına gelir mi?</summary>
            <p>
              Hayır. Ön değerlendirme ve teklif herhangi bir satış zorunluluğu yaratmaz.
              Teklifimizi diğer seçeneklerinizle karşılaştırabilirsiniz.
            </p>
          </details>

          <details>
            <summary>Boyalı veya değişenli araçları alıyor musunuz?</summary>
            <p>
              Evet, araç özelinde değerlendiriyoruz. Boya veya değişen tek başına aracı
              değerlendirme dışı bırakmaz; işlemin yeri, niteliği ve aracın genel durumu
              önemlidir.
            </p>
          </details>
        </div>
      </section>

      <section className="finalCta sellFinalCta">
        <h2>Aracınızı birlikte değerlendirelim.</h2>
        <p>
          Araç bilgilerinizi paylaşın. Piyasa emsalleri ve aracın durumuna göre ön
          değerlendirmemizi yapıp satın alma teklifimizi iletelim.
        </p>

        <a
          className="primary"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} /> Aracım İçin Teklif Al
        </a>
      </section>

      <footer className="footer">
        <strong>DETACARS</strong>
        <br />
        Detacars Otomotiv Sanayi ve Ticaret Limited Şirketi
        <br />
        <Phone size={14} /> 0224 211 65 56
        <br />
        <Mail size={14} /> info@detacars.com.tr
        <br />
        <MapPin size={14} /> Bursa
        <br />
        © 2026 Detacars
      </footer>
    </main>
  );
}
