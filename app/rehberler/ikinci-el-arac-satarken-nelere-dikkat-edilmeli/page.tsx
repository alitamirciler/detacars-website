import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export const metadata: Metadata = {
  title: 'İkinci El Araç Satarken Nelere Dikkat Edilmeli? | Detacars',
  description:
    'İkinci el araç satarken doğru fiyatlama, ilan hazırlığı, ekspertiz, pazarlık, güvenli ödeme ve noter sürecinde dikkat edilmesi gerekenleri öğrenin.',
};

export default function ArticlePage() {
  return (
    <main className="articlePage">
      <nav className="articleBreadcrumb" aria-label="Sayfa yolu">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <a href="/rehberler">Rehberler</a>
        <span>/</span>
        <span>İkinci El Araç Satışı</span>
      </nav>

      <article>
        <header className="articleHeader">
          <p className="articleEyebrow">Araç Satış Rehberi</p>

          <h1 className="articleTitle">
            İkinci El Araç Satarken Nelere Dikkat Edilmeli?
          </h1>

          <p className="articleIntro">
            Aracını satmaya karar veren birçok kişi ilk olarak ilan sitelerine
            girip benzer araçlara bakar.
          </p>

          <div className="articleQuote">
            “Benim araç kaç para eder?”
          </div>

          <p className="articleIntro">
            Aslında satış sürecindeki en büyük hata çoğu zaman burada başlar.
          </p>

          <p className="articleIntro">
            Çünkü ikinci el araç satmak yalnızca ilana koyup beklemekten ibaret
            değildir. Doğru fiyatlama, doğru ilan yönetimi ve alıcıyla kurulan
            güven satış süresini doğrudan etkiler.
          </p>

          <p className="articleIntro">
            Bu rehberde araç satarken dikkat edilmesi gereken en önemli
            noktaları anlatacağız.
          </p>

     
        </header>

        <div className="articleContent">
          <h2>Aracı ilana koymadan önce</h2>

          <p>
            İlan vermeden önce aracınızla ilgili tüm bilgilerin net olması
            gerekir.
          </p>

          <p>Özellikle şu konular önceden bilinmelidir:</p>

          <ul>
            <li>Tramer geçmişi</li>
            <li>Boya ve değişen durumu</li>
            <li>Ekspertiz bilgileri</li>
            <li>Bakım geçmişi</li>
          </ul>

          <p>
            Çünkü alıcıların büyük bölümü bu bilgileri ilk telefon görüşmesinde
            sorar.
          </p>

          <p>
            Satış aşamasında sürpriz olarak ortaya çıkan bilgiler hem güven
            kaybına hem de satışın iptal olmasına neden olabilir.
          </p>

          <h2>En sık yapılan hata: Yanlış fiyat belirlemek</h2>

          <p>
            Araç sahiplerinin yaptığı en yaygın hata, ilan sitelerindeki
            ortalama fiyatlara bakarak kendi araçlarını fiyatlandırmalarıdır.
          </p>

          <p>
            Oysa ikinci el piyasasında satılan araçlar ile ilanda duran araçlar
            aynı şey değildir.
          </p>

          <p>
            Bir aracın 2 milyon TL’den ilana koyulmuş olması, o fiyata
            satılacağı anlamına gelmez.
          </p>

          <p>Piyasada çoğu zaman ilk satılan araçlar:</p>

          <ul>
            <li>Fiyatı piyasa koşullarına en uygun olan</li>
            <li>Alıcıya güven veren</li>
            <li>Geçmişi şeffaf biçimde paylaşılmış olan</li>
          </ul>

          <p>
            araçlardır.
          </p>

          <p>
            Bu nedenle doğru fiyat belirlerken yalnızca ilan fiyatlarına değil,
            aracın hangi fiyat seviyesinde ve ne kadar sürede satılabileceğine
            de bakmak gerekir.
          </p>

          <h2>Her araç aynı sürede satılmaz</h2>

          <p>Bazı araçlar birkaç gün içinde satılabilir.</p>

          <p>Bazı araçlar ise aylarca ilanda kalabilir.</p>

          <p>Bunun nedeni yalnızca fiyat değildir.</p>

          <p>
            Piyasadaki talep, aracın segmenti, kilometresi, kullanım geçmişi ve
            alıcı kitlesi de satış süresini etkiler.
          </p>

          <p>
            Örneğin çok talep gören bir model ile daha dar bir alıcı kitlesine
            hitap eden model aynı şekilde değerlendirilmez.
          </p>

          <p>
            Bu nedenle araç değerlemesinde yalnızca teorik piyasa değeri değil,
            gerçek satış hızı da önemlidir.
          </p>

          <h2>İlan fotoğrafları düşündüğünüzden daha önemlidir</h2>

          <p>
            Birçok alıcı aracı görmeden önce ilanı değerlendirir. Bu nedenle
            ilan fotoğrafları aracınızla ilgili ilk izlenimi oluşturur.
          </p>

          <p>
            Kirli araç fotoğrafları, eksik açılar veya karanlık ortamda çekilmiş
            görseller alıcının ilana olan güvenini azaltabilir.
          </p>

          <p>İyi hazırlanmış bir ilanda şu bölümler net biçimde gösterilmelidir:</p>

          <ul>
            <li>Aracın dış görünümü</li>
            <li>İç mekân</li>
            <li>Jantlar</li>
            <li>Lastikler</li>
            <li>Varsa kusurlu bölgeler</li>
          </ul>

          <p>
            Eksikleri gizlemeye çalışmak çoğu zaman fayda sağlamaz. Çünkü araç
            ekspertize girdiğinde bu bilgiler zaten ortaya çıkacaktır.
          </p>

          <h2>Kusurları gizlemek yerine açıkça paylaşın</h2>

          <p>Araç satışında güven en önemli unsurlardan biridir.</p>

          <p>
            Boya, değişen veya tramer kaydı gibi bilgileri gizlemek çoğu zaman
            satış sürecini kolaylaştırmak yerine zorlaştırır.
          </p>

          <p>Birçok alıcı mutlaka kusursuz araç aramaz.</p>

          <p>
            Ancak önceden anlatılmayan bir kusurun sonradan ortaya çıkması ciddi
            bir güven kaybına neden olabilir.
          </p>

          <p>
            Bu nedenle aracın geçmişini mümkün olduğunca şeffaf biçimde
            paylaşmak daha sağlıklı bir satış süreci oluşturur.
          </p>

          <h2>Telefonda pazarlık ne kadar yapılmalı?</h2>

          <p>
            İlanı yayınladıktan sonra birçok kişi aracı görmeden son fiyatı
            öğrenmek ister.
          </p>

          <p>
            Ancak aracın durumu görülmeden yapılan pazarlıklar çoğu zaman
            sağlıklı bir sonuç vermez.
          </p>

          <p>
            Çünkü aracı yerinde gören kişinin değerlendirmesi ile yalnızca ilan
            fotoğraflarına bakan kişinin değerlendirmesi aynı olmayabilir.
          </p>

          <p>
            Telefonda makul bir fiyat aralığı konuşulabilir. Fakat kesin
            pazarlığın, alıcı aracı gördükten ve bilgileri doğruladıktan sonra
            yapılması genellikle daha sağlıklıdır.
          </p>

          <h2>Ekspertizde çıkan her kusur fiyat düşürme sebebi değildir</h2>

          <p>Ekspertiz raporunda onlarca farklı not bulunabilir.</p>

          <p>Ancak her not aracın değerini aynı şekilde etkilemez.</p>

          <p>Örneğin şu bulgular:</p>

          <ul>
            <li>Lastik durumu</li>
            <li>Balata durumu</li>
            <li>Hafif motor terlemesi</li>
            <li>Standart bakım önerileri</li>
          </ul>

          <p>
            çoğu zaman yapısal kusurlarla aynı seviyede değerlendirilmez.
          </p>

          <p>
            Önemli olan kusurun aracın güvenliğine, kullanımına ve piyasa
            değerine ne ölçüde etki ettiğidir.
          </p>

          <p>
            Bu nedenle ekspertiz raporu yalnızca kusur sayısına bakılarak değil,
            sonuç odaklı yorumlanmalıdır.
          </p>

          <h2>Güvenli ödeme ve noter işlemleri</h2>

          <p>
            Araç satışında ödeme yöntemi en az aracın kendisi kadar önemlidir.
          </p>

          <p>
            Noter işlemlerine geçmeden önce ödemenin güvenli şekilde
            gerçekleştirildiğinden ve hesabınıza geçtiğinden emin olunmalıdır.
          </p>

          <p>Yüksek tutarlı işlemlerde şu yöntemler değerlendirilebilir:</p>

          <ul>
            <li>Güvenli ödeme sistemi</li>
            <li>Banka transferi</li>
            <li>Bloke çek</li>
          </ul>

          <p>
            Ödemenin yalnızca gönderildiğine dair dekont görmek yeterli
            değildir. Tutarın hesabınıza geçtiğini doğrudan kendi bankanızdan
            kontrol etmeniz gerekir.
          </p>

          <p>
            Ödeme teyidi alınmadan araç devrinin tamamlanmaması önemlidir.
          </p>

          <h2>Araç satmak sadece fiyat meselesi değildir</h2>

          <p>Birçok kişi aracın yalnızca fiyatına odaklanır.</p>

          <p>Oysa satış sürecinde şu unsurlar da en az fiyat kadar etkilidir:</p>

          <ul>
            <li>Güven veren bir ilan</li>
            <li>Doğru fiyatlama</li>
            <li>Şeffaf araç geçmişi</li>
            <li>Sağlıklı ekspertiz süreci</li>
            <li>Doğru alıcı iletişimi</li>
          </ul>

          <p>
            Aynı özelliklere sahip iki araçtan biri birkaç gün içinde satılırken
            diğeri haftalarca ilanda kalabilir.
          </p>

          <p>
            Bunun nedeni çoğu zaman yalnızca fiyat değil, alıcının araç ve
            satıcı hakkında duyduğu güvendir.
          </p>

          <h2>Detacars araç satışlarına nasıl yaklaşır?</h2>

          <p>
            Detacars olarak araç satışında yalnızca fiyatın değil, güvenin de
            önemli olduğuna inanıyoruz.
          </p>

          <p>Bir aracı değerlendirirken:</p>

          <ul>
            <li>Piyasa emsallerini</li>
            <li>Araç geçmişini</li>
            <li>Ekspertiz bulgularını</li>
            <li>Talep seviyesini</li>
            <li>Gerçek satış süresini</li>
          </ul>

          <p>birlikte değerlendiriyoruz.</p>

          <p>
            Amacımız yalnızca bir fiyat belirlemek değil, aracın gerçek piyasa
            karşılığını mümkün olduğunca doğru şekilde ortaya koymaktır.
          </p>
        </div>

        <section className="articleCta">
          <h2>Aracınız için ön değerlendirme alın</h2>

          <p>
            Marka, model, kilometre, hasar ve bakım bilgilerini paylaşın.
            Aracınızı güncel piyasa koşulları doğrultusunda ön değerlendirme
            kapsamında inceleyelim.
          </p>

          <a
            className="articleCtaButton"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp’tan Değerlendir
          </a>
        </section>

        <nav className="articleNavigation" aria-label="Diğer rehberler">
          <a href="/rehberler/arac-degerleme-nasil-yapilir">
            <span>İlgili rehber</span>
            <strong>Araç Değerleme Nasıl Yapılır?</strong>
          </a>

          <a
            className="articleNavigationNext"
            href="/rehberler/ekspertiz-raporu-nasil-yorumlanir"
          >
            <span>İlgili rehber</span>
            <strong>Ekspertiz Raporu Nasıl Yorumlanır?</strong>
          </a>
        </nav>
      </article>
    </main>
  );
}