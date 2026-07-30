Tamam. Bu dosya ana şablon. Diğer iki sayfada yalnızca metinler ve bağlantılar değişecek; HTML yapısı ve class adları birebir aynı kalacak.

Şimdi `app/rehberler/arac-degerleme-nasil-yapilir/page.tsx` dosyasının tamamını bununla değiştir:

```tsx
import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export const metadata: Metadata = {
  title: 'Araç Değerleme Nasıl Yapılır? | Detacars',
  description:
    'İkinci el araçlarda kilometre, hasar, boya, değişen, donanım, bakım geçmişi ve piyasa emsallerinin araç değerine etkisini öğrenin.',
};

export default function ArticlePage() {
  return (
    <main className="articlePage">
      <nav className="articleBreadcrumb" aria-label="Sayfa yolu">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <a href="/rehberler">Rehberler</a>
        <span>/</span>
        <span>Araç Değerleme</span>
      </nav>

      <article>
        <header className="articleHeader">
          <p className="articleEyebrow">Araç Değerleme Rehberi</p>

          <h1 className="articleTitle">
            Araç Değerleme Nasıl Yapılır?
          </h1>

          <p className="articleIntro">
            Aracını satmayı düşünen birçok kişinin ilk sorusu genellikle
            aynıdır:
          </p>

          <div className="articleQuote">
            “Aracım kaç para eder?”
          </div>

          <p className="articleIntro">
            Ancak ikinci el araç piyasasında doğru fiyat belirlemek yalnızca
            marka, model ve kilometre bilgisine bakılarak yapılmaz.
          </p>

          <p className="articleIntro">
            Aynı model, aynı yıl ve benzer kilometrede iki aracın piyasa değeri
            arasında ciddi farklar oluşabilir.
          </p>

          <p className="articleIntro">
            Çünkü araç değerlemesi; aracın geçmişini, mevcut durumunu ve
            piyasadaki talebini birlikte değerlendirme işidir.
          </p>
        </header>

        <div className="articleContent">
          <h2>Araç değerini etkileyen temel faktörler</h2>

          <h3>Marka ve model</h3>

          <p>
            Her aracın ikinci el piyasasındaki talebi aynı değildir. Bazı
            modeller çok geniş bir alıcı kitlesine hitap ederken bazı araçlar
            daha dar bir kitleye sahiptir.
          </p>

          <h3>Kilometre</h3>

          <p>
            Kilometre önemli bir kriterdir ancak tek başına belirleyici
            değildir.
          </p>

          <p>
            Araç yaşı ile kilometrenin uyumlu olması beklenir. Bunun yanında
            bakım geçmişi, kullanım şekli ve genel kondisyon da
            değerlendirilmelidir.
          </p>

          <h3>Hasar geçmişi</h3>

          <p>
            Kaza geçmişi, tramer kayıtları ve hasarın niteliği araç değerini
            doğrudan etkiler.
          </p>

          <p>
            Burada önemli olan yalnızca hasar tutarı değil, hasarın hangi
            bölgelerde olduğu ve nasıl onarıldığıdır.
          </p>

          <h3>Boya ve değişen durumu</h3>

          <p>
            İkinci el araç piyasasında boya ve değişen parçalar en çok dikkat
            edilen konular arasındadır.
          </p>

          <p>
            Ancak her boya veya değişen parça aynı etkiyi oluşturmaz. İşlemin
            hangi parçada olduğu ve aracın genel durumu birlikte
            değerlendirilir.
          </p>

          <h3>Donanım paketi</h3>

          <p>
            Aynı model aracın farklı paketleri arasında ciddi fiyat farkları
            oluşabilir.
          </p>

          <p>
            Donanım seviyesi ve piyasada özellikle talep gören özellikler
            aracın ikinci el değerini doğrudan etkileyebilir.
          </p>

          <h3>Bakım geçmişi</h3>

          <p>
            Düzenli bakım görmüş ve kayıtları takip edilebilen araçlar
            genellikle daha fazla talep görür.
          </p>

          <p>
            Bu durum satış sürecini kolaylaştırır ve alıcı güvenini artırır.
          </p>

          <h3>Güncel piyasa koşulları</h3>

          <p>
            Döviz kuru, kredi imkânları, sıfır araç kampanyaları, ikinci el
            araç talebi ve genel piyasa koşulları da araç değerini etkiler.
          </p>

          <p>
            Bu nedenle birkaç ay önce geçerli olan bir fiyat bugün aynı sonucu
            vermeyebilir.
          </p>

          <h2>Neden aynı model araçlar farklı fiyatlara satılır?</h2>

          <p>
            İlan sitelerinde aynı model araçlar arasında bazen yüz binlerce
            liralık fiyat farkları görülebilir.
          </p>

          <p>
            Bunun bir kısmı araçların geçmişi, kondisyonu, bakım durumu,
            kilometresi ve donanım farklılıklarından kaynaklanır.
          </p>

          <p>
            Ancak bazı bireysel satıcılar araçlarını piyasa değerinin üzerinde
            fiyatlarla ilana koyabilir.
          </p>

          <p>
            Benzer şekilde bazı kurumsal firmalar da marka algısı veya
            sundukları ek hizmetler nedeniyle daha yüksek fiyatlandırma
            yapabilir.
          </p>

          <p>
            Piyasanın doğal işleyişinde, benzer özelliklere sahip araçlar
            arasında fiyatı piyasa koşullarına en uygun olan araçlar genellikle
            daha hızlı satılır ve piyasa seviyesini belirler.
          </p>

          <h2>Araç değerleme sürecinde yapılan yaygın hatalar</h2>

          <p>
            Araç sahiplerinin sık yaptığı hatalardan biri, ilan sitelerindeki
            ortalama fiyatlara bakarak araçlarının aynı değerde olduğunu
            düşünmeleridir.
          </p>

          <p>
            Oysa profesyonel değerleme sürecinde yalnızca ortalama ilan
            fiyatları değil, aynı özelliklere sahip araçlar arasında gerçekten
            satılma ihtimali en yüksek olan emsaller incelenir.
          </p>

          <p>
            Birçok durumda piyasadaki en uygun fiyatlı emsal araç referans
            noktası olarak alınır.
          </p>

          <p>
            Bu aracın hemen üzerindeki ilanlarla birlikte oluşan fiyat bandı
            değerlendirilerek aracın son kullanıcıya hangi aralıkta
            satılabileceği analiz edilir.
          </p>

          <p>
            Çünkü ikinci el piyasasında çoğu zaman ilk satılan araç en pahalı
            araç değil, fiyatı piyasa koşullarına en uygun belirlenen araçtır.
          </p>

          <h2>İlan fiyatı ile gerçek satış fiyatı aynı değildir</h2>

          <p>
            İlan fiyatı, satıcının araç için talep ettiği rakamdır. Ancak bu
            rakam aracın gerçekten o fiyata satıldığı anlamına gelmez.
          </p>

          <p>
            Gerçek satış fiyatı; pazarlık, ekspertiz sonucu, ödeme şekli ve
            aracın piyasada ne kadar süre beklediği gibi faktörlerden etkilenir.
          </p>

          <p>
            Bu nedenle uzun süredir ilanda olan araçların fiyatlarını doğrudan
            piyasa değeri olarak kabul etmek yanıltıcı olabilir.
          </p>

          <h2>Her araç aynı hızda satılmaz</h2>

          <p>
            Araç değerlemesinde yalnızca aracın fiziksel durumu değil,
            piyasadaki talep seviyesi de dikkate alınır.
          </p>

          <p>
            Bazı araçlar birkaç hafta içinde satılabilirken bazı modeller
            aylarca ilanda kalabilir.
          </p>

          <p>
            Bu nedenle profesyonel değerleme yapılırken aracın satış hızı,
            alıcı kitlesi ve oluşabilecek stok maliyetleri de değerlendirilir.
          </p>

          <p>
            Çünkü bir aracın teorik değeri ile gerçek satış değeri her zaman
            aynı olmayabilir.
          </p>

          <h2>Detacars araç değerlemeye nasıl yaklaşır?</h2>

          <p>
            Detacars olarak araç değerleme sürecinde yalnızca fiyat vermeyi
            değil, fiyatın nasıl oluştuğunu da açıklamayı önemsiyoruz.
          </p>

          <p>Bir aracı değerlendirirken:</p>

          <ul>
            <li>Güncel piyasa emsallerini</li>
            <li>Araç geçmişini</li>
            <li>Kilometre ve genel kondisyonu</li>
            <li>Boya, değişen ve hasar durumunu</li>
            <li>Donanım ve bakım geçmişini</li>
            <li>Piyasadaki talep seviyesini</li>
            <li>Gerçekçi satış süresini</li>
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
          <a href="/rehberler/ekspertiz-raporu-nasil-yorumlanir">
            <span>İlgili rehber</span>
            <strong>Ekspertiz Raporu Nasıl Yorumlanır?</strong>
          </a>

          <a
            className="articleNavigationNext"
            href="/rehberler/ikinci-el-arac-satarken-nelere-dikkat-edilmeli"
          >
            <span>İlgili rehber</span>
            <strong>
              İkinci El Araç Satarken Nelere Dikkat Edilmeli?
            </strong>
          </a>
        </nav>
      </article>
    </main>
  );
}
```
