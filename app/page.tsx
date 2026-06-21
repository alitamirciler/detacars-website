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
  MapPin,
  RefreshCw,
  Store,
  Handshake,
  SearchCheck,
  BadgeCheck
} from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum. Marka/model, km ve hasar bilgilerini paylaşacağım.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`;

const sahibindenUrl = 'https://shbd.io/s/4ck0aZs2';

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">
          <span className="mark">D</span>
          <span>DETACARS</span>
        </div>

        <nav>
          <a href="#arac-alim">Araç Alım</a>
          <a href="#satis">Satıştaki Araçlar</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <a className="navCta" href={whatsappUrl} target="_blank">
          WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Premium ve orta üst segment araçlarda</p>
          <h1>Şeffaf değerlendirme. Güvenilir ticaret.</h1>
          <p className="lead">
            Detacars, premium ve orta üst segment araçlarda uzmanlaşmış güven odaklı
            ikinci el otomotiv firmasıdır. Alım, satış ve takas süreçlerinde piyasa
            verilerine dayalı açık bir yaklaşım sunar.
          </p>

          <div className="heroActions">
            <a className="primary" href={whatsappUrl} target="_blank">
              <MessageCircle size={20} /> Aracımı Değerlendir
            </a>
            <a className="secondaryDark" href={sahibindenUrl} target="_blank">
              Satıştaki Araçlar
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>20+ yıl</strong>
          <span>Toplam sektör tecrübesi</span>
        </div>
        <div>
          <strong>200+</strong>
          <span>Yıllık araç operasyonu</span>
        </div>
        <div>
          <strong>Aynı gün</strong>
          <span>Değerlendirme ve işlem süreci</span>
        </div>
      </section>

      <section id="neden" className="section">
        <div className="sectionHead">
          <p className="eyebrow dark">Neden Detacars?</p>
          <h2>Sürprizsiz, açık ve güvenilir bir süreç</h2>
          <p>
            İkinci el araç ticaretinde güvenin, fiyatın nasıl oluştuğunu açıkça
            anlatmaktan geçtiğine inanıyoruz.
          </p>
        </div>

        <div className="cards four">
          <article>
            <SearchCheck />
            <h3>Şeffaf değerlendirme</h3>
            <p>
              Araç alım ve satış süreçlerinde fiyatlarımızı piyasa emsalleri üzerinden
              açık şekilde değerlendiririz.
            </p>
          </article>

          <article>
            <BadgeCheck />
            <h3>Teklifimizin arkasındayız</h3>
            <p>
              Ön değerlendirmede paylaştığımız fiyat, aracın beyan edilen durumu ile
              uyumlu olduğu sürece değişmez.
            </p>
          </article>

          <article>
            <Car />
            <h3>Segment uzmanlığı</h3>
            <p>
              Premium ve orta üst segment araçların piyasa dinamiklerine ve değerleme
              kriterlerine hakimiz.
            </p>
          </article>

          <article>
            <ShieldCheck />
            <h3>Güvenli işlem</h3>
            <p>
              Ekspertiz, noter ve ödeme süreçlerinde net, hızlı ve güven odaklı ilerleriz.
            </p>
          </article>
        </div>
      </section>

      <section id="arac-alim" className="section muted">
        <div className="sectionHead">
          <p className="eyebrow dark">Araç alım</p>
          <h2>Aracınızı gerçek piyasa verileriyle değerlendirelim</h2>
          <p>
            Araç değerlemesinde amacımız yalnızca teklif vermek değil, fiyatın nasıl
            oluştuğunu da açıkça paylaşmaktır. Böylece sürecin her adımında neye göre
            karar verdiğimizi bilirsiniz.
          </p>
        </div>

        <div className="cards three">
          <article>
            <MessageCircle />
            <h3>1. Bilgileri paylaşın</h3>
            <p>
              Marka, model, kilometre, paket, hasar ve ekspertiz bilgilerini WhatsApp
              üzerinden gönderin.
            </p>
          </article>

          <article>
            <Banknote />
            <h3>2. Ön değerlendirme alın</h3>
            <p>
              Piyasa emsalleri ve aracın durumuna göre gerçekçi bir ön fiyat aralığı
              paylaşalım.
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
          <a className="primary" href={whatsappUrl} target="_blank">
            <MessageCircle size={20} /> WhatsApp’tan Değerlendir
          </a>
        </div>
      </section>

      <section id="satis" className="stockSection">
        <div>
          <p className="eyebrow">Satıştaki araçlar</p>
          <h2>Güncel stoklarımızı Sahibinden mağazamızda inceleyin.</h2>
          <p>
            Satıştaki araçlarımızı, güncel fiyatları ve ilan detaylarını Sahibinden
            mağazamız üzerinden takip edebilirsiniz.
          </p>

          <div className="stockPoints">
            <p><CheckCircle2 /> Premium ve orta üst segment seçilmiş araçlar</p>
            <p><CheckCircle2 /> Ekspertiz bilgileri ve ilan detayları</p>
            <p><CheckCircle2 /> Kredi, kredi kartı ve finansman seçenekleri</p>
            <p><CheckCircle2 /> Uygun araçlarda takas değerlendirmesi</p>
          </div>

          <a className="primary" href={sahibindenUrl} target="_blank">
            <Store size={20} /> Sahibinden Mağazamızı İncele
          </a>
        </div>
      </section>

      <section id="hakkimizda" className="about">
        <div>
          <p className="eyebrow">Detacars hakkında</p>
          <h2>Güveni, şeffaflığı ve doğru fiyatlamayı merkeze alıyoruz.</h2>
          <p>
            Detacars markası 2023 yılında faaliyetlerine başlamış, 2024 yılında
            Detacars Otomotiv çatısı altında kurumsal yapısını güçlendirmiştir.
          </p>
          <p>
            Premium ve orta üst segment araçlara odaklanan ekibimiz, toplamda 20 yılı
            aşan sektör tecrübesi ve yıllık 200’ün üzerinde araç operasyonuyla
            müşterilerine güvenilir çözümler sunmaktadır.
          </p>
          <p>
            Alım ve satış süreçlerinde fiyatlarımızı piyasa emsalleri üzerinden açık
            şekilde değerlendirir; müşterilerimize sürprizsiz ve net bir ticaret deneyimi
            sunmayı hedefleriz.
          </p>
        </div>
      </section>

      <section id="iletisim" className="formSection">
        <div className="sectionHead">
          <p className="eyebrow dark">İletişim</p>
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
        <h2>Alırken de satarken de netlik.</h2>
        <p>Şeffaf değerlendirme ve güvenilir ticaret için Detacars ile iletişime geçin.</p>

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
        <MapPin size={14} /> Bursa
        <br />
        © 2026 Detacars Otomotiv
      </footer>

      <a className="floating" href={whatsappUrl} target="_blank">
        <MessageCircle size={28} />
      </a>
    </main>
  );
}