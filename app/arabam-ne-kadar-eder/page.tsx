import type { Metadata } from 'next';
import {
  BadgeCheck,
  Banknote,
  Car,
  CheckCircle2,
  FileCheck,
  Gauge,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const phone = '905383642991';
const whatsappText =
  'Merhaba, aracımın güncel piyasa değerini öğrenmek ve Detacars\'tan teklif almak istiyorum. Marka/model, yıl, kilometre, paket ve araç bilgilerini paylaşacağım.';
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`;
const sahibindenUrl = 'https://detacars.sahibinden.com/';

export const metadata: Metadata = {
  title: 'Arabam Ne Kadar Eder? İkinci El Araç Değeri | Detacars',
  description:
    'Arabam ne kadar eder diye merak ediyorsanız ikinci el araç değerini etkileyen emsal, kilometre, paket, boya-değişen, tramer, kondisyon ve piyasa talebi gibi unsurları öğrenin. Detacars’tan ön değerlendirme ve teklif alın.',
  alternates: {
    canonical: 'https://detacars.com.tr/arabam-ne-kadar-eder',
  },
};

export default function ArabamNeKadarEderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Arabam ne kadar eder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bir aracın güncel piyasa değeri; aynı model ve donanımdaki gerçekçi emsaller, kilometre, kondisyon, boya-değişen durumu, hasar geçmişi, bakım geçmişi ve piyasadaki talep birlikte değerlendirilerek tahmin edilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'İlan fiyatı aracımın gerçek değeri midir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tek başına değildir. İlan fiyatı satıcının talebidir; aracın gerçek piyasa karşılığını anlamak için doğru emsallerin yanı sıra satış hızı, araç kondisyonu ve güncel talep de değerlendirilmelidir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kasko değeri aracın piyasa değerini gösterir mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kasko değeri tek başına güncel ikinci el satış fiyatını göstermez. Piyasa değeri araç özelindeki donanım, kilometre, kondisyon, geçmiş ve güncel arz-talep koşullarına göre farklılaşabilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Boya veya değişen aracın değerini ne kadar düşürür?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sabit bir oran yoktur. İşlemin hangi parçada olduğu, kapsamı, onarım kalitesi, aracın segmenti, yaşı ve genel kondisyonu birlikte değerlendirilir.',
        },
      },
    ],
  };

  return (
    <main>
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
          <a href={sahibindenUrl} target="_blank" rel="noopener noreferrer">
            Satıştaki Araçlar
          </a>
          <a href="/rehberler">Rehberler</a>
          <a href="/#hakkimizda">Hakkımızda</a>
        </nav>
        <a className="navCta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </header>

      <section className="sellHero">
        <div className="sellHeroInner">
          <p className="eyebrow dark">İkinci el araç değerleme</p>
          <h1>Arabam Ne Kadar Eder?</h1>
          <p className="sellLead">
            Aracınızın değerini yalnızca ilan fiyatlarına bakarak belirlemek yanıltıcı olabilir.
            Doğru emsaller, kilometre, donanım, boya-değişen durumu, hasar geçmişi,
            kondisyon ve piyasadaki talep birlikte değerlendirilmelidir.
          </p>
          <div className="sellHeroActions">
            <a className="primary heroButton" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> Aracımın Değerini Öğren
            </a>
          </div>
          <div className="sellTrustRow">
            <span><CheckCircle2 size={18} /> Ücretsiz ön değerlendirme</span>
            <span><CheckCircle2 size={18} /> Satış zorunluluğu yok</span>
            <span><CheckCircle2 size={18} /> Bursa merkezli değerlendirme</span>
          </div>
        </div>
      </section>

      <section className="section sellIntroSection">
        <div className="sectionHead sellIntroHead">
          <p className="eyebrow dark">Gerçek piyasa değeri</p>
          <h2>İlan fiyatı ile aracın gerçek satış değeri aynı şey değildir</h2>
          <p>
            İlan sitelerinde gördüğünüz rakamlar araç sahiplerinin talep ettiği fiyatlardır.
            Bir aracın ne kadar süredir ilanda olduğunu, hangi rakamda gerçekten satılacağını
            veya benzer araçların hangi hızda alıcı bulduğunu yalnızca ilan fiyatından anlayamazsınız.
          </p>
          <p>
            Bu nedenle değerleme yaparken en yüksek veya en düşük ilana değil, aracınıza gerçekten
            benzeyen emsallere ve aracın piyasadaki alım-satım dinamiklerine bakmak gerekir.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow dark">Değerleme kriterleri</p>
          <h2>Aracınızın değerini belirleyen temel unsurlar</h2>
          <p>Aynı marka ve model iki araç arasında ciddi fiyat farkı oluşmasının nedeni detaylarda saklıdır.</p>
        </div>
        <div className="sellFactorGrid">
          <article>
            <SearchCheck />
            <h3>Doğru emsal seçimi</h3>
            <p>Model yılı, motor, paket, donanım ve benzer özelliklerdeki araçları karşılaştırmak gerekir.</p>
          </article>
          <article>
            <Gauge />
            <h3>Kilometre</h3>
            <p>Kilometre tek başına fiyat belirlemez; yaş, kullanım biçimi ve kondisyonla birlikte anlam kazanır.</p>
          </article>
          <article>
            <BadgeCheck />
            <h3>Paket ve donanım</h3>
            <p>Aynı modelde motor, paket, opsiyon, renk ve kombinasyon piyasadaki talebi değiştirebilir.</p>
          </article>
          <article>
            <Wrench />
            <h3>Boya ve değişen</h3>
            <p>İşlemin yeri ve niteliği önemlidir. Her boyalı veya değişenli araçta aynı değer kaybı oluşmaz.</p>
          </article>
          <article>
            <FileCheck />
            <h3>Hasar ve bakım geçmişi</h3>
            <p>Tramer kaydı, onarımın niteliği, servis kayıtları ve bakım geçmişi değerlendirmeyi etkiler.</p>
          </article>
          <article>
            <Car />
            <h3>Talep ve satış hızı</h3>
            <p>Piyasada çok ilan olması güçlü talep anlamına gelmez. Aracın ne kadar hızlı alıcı bulduğu da önemlidir.</p>
          </article>
        </div>
      </section>

      <section className="section sellIntroSection">
        <div className="sectionHead sellIntroHead">
          <p className="eyebrow dark">Emsal karşılaştırması</p>
          <h2>Emsal araç seçerken yapılan en büyük hata: sadece model adına bakmak</h2>
          <p>
            Örneğin aynı model iki araçtan biri farklı motor, donanım paketi, model yılı veya kilometrede olabilir.
            Hasar geçmişi ve kondisyon farkı da fiyatı değiştirir. Bu nedenle “aynı modelin ilan ortalaması” çoğu zaman
            sağlıklı bir değerleme yöntemi değildir.
          </p>
          <p>
            Sağlıklı karşılaştırmada önce aracınıza en yakın emsaller daraltılır; ardından ilanların gerçekçiliği,
            piyasadaki arz, talep ve satış hızı değerlendirilir.
          </p>
        </div>
      </section>

      <section className="sellSegmentSection">
        <div>
          <p className="eyebrow">Üç farklı rakam</p>
          <h2>Kasko değeri, ilan fiyatı ve gerçek piyasa değeri neden farklı olabilir?</h2>
          <p>
            Kasko değeri sigorta süreçlerinde kullanılan referanslardan biridir. İlan fiyatı satıcının istediği rakamdır.
            Gerçek piyasa değeri ise aracın özellikleri ve güncel piyasa koşullarında oluşabilecek alım-satım seviyesidir.
          </p>
          <p className="sellSegmentNote">
            Bu nedenle aracınızın değerini hesaplarken tek bir listeye veya tek bir ilana bağlı kalmak yerine araç özelinde
            değerlendirme yapmak daha sağlıklı sonuç verir.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow dark">Detacars değerlendirmesi</p>
          <h2>Aracınız için ön değerlendirme nasıl yapılır?</h2>
          <p>Aracınızın temel bilgilerini gönderin; satın almak istediğimiz araçlar için değerlendirmemizi ve teklifimizi paylaşalım.</p>
        </div>
        <div className="cards three processCards sellProcessCards">
          <article>
            <MessageCircle />
            <h3>1. Araç bilgilerini gönderin</h3>
            <p>Marka-model, yıl, kilometre, paket, boya-değişen ve varsa ekspertiz bilgilerini WhatsApp’tan paylaşın.</p>
          </article>
          <article>
            <Banknote />
            <h3>2. Piyasa değerlendirmesi</h3>
            <p>Aracınıza yakın emsalleri ve araç özelindeki kriterleri inceleyerek ön değerlendirmemizi oluşturalım.</p>
          </article>
          <article>
            <ShieldCheck />
            <h3>3. Teklifinizi değerlendirin</h3>
            <p>Satın almak istediğimiz araçlar için teklifimizi iletelim. Teklifi kabul etmek zorunda değilsiniz.</p>
          </article>
        </div>
        <div className="centerCta">
          <a className="primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} /> Aracımın Değerini Öğren
          </a>
        </div>
      </section>

      <section className="sellFaqSection">
        <div className="sectionHead">
          <p className="eyebrow dark">Sık sorulan sorular</p>
          <h2>Araç değeri hakkında sık sorulanlar</h2>
        </div>
        <div className="sellFaqList">
          <details>
            <summary>Arabam ne kadar eder?</summary>
            <p>Net bir rakam için aracın model, yıl, kilometre, paket, kondisyon ve geçmişi ile güncel emsallerin birlikte değerlendirilmesi gerekir.</p>
          </details>
          <details>
            <summary>İlan fiyatı aracımın gerçek değeri midir?</summary>
            <p>Tek başına değildir. İlan fiyatı talep edilen rakamdır; gerçek piyasa karşılığı doğru emsaller, aracın durumu, talep ve satış hızıyla birlikte değerlendirilmelidir.</p>
          </details>
          <details>
            <summary>Kasko değeri aracın piyasa değerini gösterir mi?</summary>
            <p>Kasko değeri bir referanstır ancak aracın güncel ikinci el piyasa değerini tek başına belirlemez. Araç özelindeki özellikler ve güncel piyasa koşulları farklı bir değer oluşturabilir.</p>
          </details>
          <details>
            <summary>Boya veya değişen aracın değerini ne kadar düşürür?</summary>
            <p>Sabit bir oran yoktur. İşlemin hangi parçada olduğu, kapsamı, aracın segmenti, yaşı ve genel kondisyonu birlikte değerlendirilir.</p>
          </details>
        </div>
      </section>

      <section className="finalCta sellFinalCta">
        <h2>Aracınızın değerini birlikte değerlendirelim.</h2>
        <p>
          Araç bilgilerinizi paylaşın. Güncel emsaller ve aracınızın özellikleri üzerinden ön değerlendirmemizi yapalım;
          satın almak istediğimiz araçlar için teklifimizi iletelim.
        </p>
        <a className="primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} /> Aracım İçin Teklif Al
        </a>
      </section>

      <footer className="footer">
        <strong>DETACARS</strong><br />
        Detacars Otomotiv Sanayi ve Ticaret Limited Şirketi<br />
        <Phone size={14} /> 0224 211 65 56<br />
        <Mail size={14} /> info@detacars.com.tr<br />
        <MapPin size={14} /> Bursa<br />
        © 2026 Detacars
      </footer>
    </main>
  );
}
