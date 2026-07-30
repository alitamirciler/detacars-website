import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Araç Değerleme Nasıl Yapılır? | Detacars',
  description:
    'İkinci el araçlarda fiyat belirlenirken kilometre, hasar, boya, değişen, donanım, bakım geçmişi ve piyasa emsallerinin nasıl değerlendirildiğini öğrenin.',
};

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export default function ArticlePage() {
  return (
    <main className="articlePage">
      <div className="articleBreadcrumb">
        <Link href="/">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/rehberler">Rehberler</Link>
        <span>/</span>
        <span>Araç Değerleme Nasıl Yapılır?</span>
      </div>

      <header className="articleHeader">
        <p className="articleEyebrow">Araç Değerleme Rehberi</p>

        <h1 className="articleTitle">Araç Değerleme Nasıl Yapılır?</h1>

        <p className="articleIntro">
          İkinci el bir aracın gerçek piyasa değeri yalnızca marka, model ve
          kilometre bilgisine bakılarak belirlenmez. Aracın geçmişi, mevcut
          kondisyonu, donanımı ve piyasadaki talebi birlikte değerlendirilir.
        </p>
      </header>

      <article className="articleContent">
        <p>
          Aracını satmayı düşünen birçok kişinin ilk sorusu genellikle aynıdır:
        </p>

        <blockquote className="articleQuote">
          “Benim aracım kaç para eder?”
        </blockquote>

        <p>
          Ancak ikinci el araç piyasasında doğru fiyat belirlemek yalnızca
          marka, model ve kilometre bilgisine bakılarak yapılmaz. Aynı model,
          aynı yıl ve benzer kilometrede iki aracın piyasa değeri arasında
          ciddi farklar oluşabilir.
        </p>

        <p>
          Çünkü araç değerlemesi; aracın geçmişini, mevcut durumunu ve
          piyasadaki talebini birlikte değerlendirme işidir.
        </p>

        <h2>Araç değerini etkileyen temel faktörler</h2>

        <h3>Marka ve model</h3>

        <p>
          Her aracın ikinci el piyasasındaki talebi aynı değildir. Bazı
          modeller çok geniş bir alıcı kitlesine hitap ederken bazı araçlar
          daha dar bir kitleye sahiptir.
        </p>

        <p>
          Aracın yalnızca markası değil; motor seçeneği, kasa tipi, yakıt türü
          ve piyasadaki genel algısı da satış değerini etkileyebilir.
        </p>

        <h3>Kilometre</h3>

        <p>
          Kilometre önemli bir kriterdir ancak tek başına belirleyici değildir.
          Araç yaşı ile kilometrenin uyumlu olması beklenir. Bunun yanında bakım
          geçmişi, kullanım şekli ve genel kondisyon da değerlendirilmelidir.
        </p>

        <p>
          Düşük kilometreli fakat bakımları aksatılmış bir araç, daha yüksek
          kilometreli ancak düzenli bakım görmüş bir araçtan her zaman daha
          değerli olmayabilir.
        </p>

        <h3>Hasar geçmişi</h3>

        <p>
          Kaza geçmişi, tramer kayıtları ve hasarın niteliği araç değerini
          doğrudan etkiler. Burada önemli olan yalnızca hasar tutarı değil,
          hasarın hangi bölgelerde olduğu ve nasıl onarıldığıdır.
        </p>

        <p>
          Aynı tutardaki iki hasar kaydı araç üzerinde aynı etkiyi
          oluşturmayabilir. Kozmetik bir onarım ile aracın şasi, podye veya
          direk bölgelerini etkileyen bir işlem birbirinden ayrı
          değerlendirilmelidir.
        </p>

        <h3>Boya ve değişen durumu</h3>

        <p>
          İkinci el araç piyasasında boya ve değişen parçalar en çok dikkat
          edilen konular arasındadır. Ancak her boya veya değişen parça aynı
          etkiyi oluşturmaz.
        </p>

        <p>
          İşlemin hangi parçada olduğu, onarım kalitesi ve aracın genel durumu
          birlikte değerlendirilir. Örneğin tampon boyası ile tavan veya direk
          bölgesindeki bir işlem aynı şekilde fiyatlanmaz.
        </p>

        <h3>Donanım paketi</h3>

        <p>
          Aynı model aracın farklı donanım paketleri arasında ciddi fiyat
          farkları oluşabilir. Otomatik şanzıman, panoramik cam tavan, sürüş
          destek sistemleri, deri koltuk ve multimedya donanımları ikinci el
          değerini doğrudan etkileyebilir.
        </p>

        <p>
          Bununla birlikte her donanımın ikinci el piyasasında aynı karşılığı
          bulunmaz. Alıcıların özellikle talep ettiği özellikler değerlemeye
          daha fazla etki eder.
        </p>

        <h3>Bakım geçmişi</h3>

        <p>
          Düzenli bakım görmüş ve kayıtları takip edilebilen araçlar genellikle
          daha fazla talep görür. Yetkili veya özel servis kayıtlarının
          bulunması, yapılan işlemlerin belgelenebilmesi ve önemli bakımların
          zamanında yapılmış olması alıcı güvenini artırır.
        </p>

        <h3>Güncel piyasa koşulları</h3>

        <p>
          Döviz kuru, kredi imkânları, sıfır araç kampanyaları, ikinci el araç
          talebi ve genel ekonomik koşullar da araç değerini etkiler.
        </p>

        <p>
          Bu nedenle birkaç ay önce geçerli olan bir fiyat bugün aynı sonucu
          vermeyebilir. Araç değerlemesi yapılırken güncel ilanlar ve piyasa
          hareketleri birlikte incelenmelidir.
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
          fiyatlarla ilana koyabilir. Benzer şekilde bazı kurumsal firmalar da
          sundukları garanti, finansman veya satış sonrası hizmetler nedeniyle
          daha yüksek fiyatlandırma yapabilir.
        </p>

        <p>
          Bu nedenle yalnızca ilan fiyatlarına bakarak sonuç çıkarmak yanıltıcı
          olabilir. Önemli olan, birbirine gerçekten benzeyen araçları aynı
          koşullar altında karşılaştırmaktır.
        </p>

        <p>
          Piyasanın doğal işleyişinde, benzer özelliklere sahip araçlar
          arasında fiyatı piyasa koşullarına en uygun olan araçlar genellikle
          daha hızlı satılır ve piyasa seviyesini belirler.
        </p>

        <h2>Araç değerleme sürecinde yapılan yaygın hatalar</h2>

        <p>
          Araç sahiplerinin sık yaptığı hatalardan biri, ilan sitelerindeki
          ortalama fiyatlara bakarak kendi araçlarının da aynı değerde olduğunu
          düşünmeleridir.
        </p>

        <p>
          Oysa profesyonel değerleme sürecinde yalnızca ortalama ilan fiyatları
          değil, aynı özelliklere sahip araçlar arasında gerçekten satılma
          ihtimali en yüksek olan emsaller incelenir.
        </p>

        <p>
          Birçok durumda piyasadaki en uygun fiyatlı emsal araç referans
          noktası olarak alınır. Bu aracın hemen üzerindeki ilanlarla birlikte
          oluşan fiyat bandı değerlendirilerek aracın son kullanıcıya hangi
          aralıkta satılabileceği analiz edilir.
        </p>

        <p>
          Çünkü ikinci el piyasasında çoğu zaman ilk satılan araç en pahalı
          araç değil, fiyatı piyasa koşullarına en uygun belirlenen araçtır.
        </p>

        <h2>İlan fiyatı ile gerçek satış fiyatı aynı mıdır?</h2>

        <p>
          İlan fiyatı, araç sahibinin talep ettiği rakamdır. Gerçek satış
          fiyatı ise pazarlık, ekspertiz sonucu, ödeme şekli ve aracın
          piyasadaki bekleme süresi sonrasında oluşur.
        </p>

        <p>
          Bu nedenle yalnızca ilanlarda görülen rakamlara bakmak aracın gerçek
          piyasa karşılığını göstermeyebilir. Uzun süredir ilanda olan ancak
          satılmayan araçlar, piyasa değerinin üzerinde fiyatlandırılmış
          olabilir.
        </p>

        <h2>Her araç aynı hızda satılmaz</h2>

        <p>
          Araç değerlemesinde yalnızca aracın fiziksel durumu değil, piyasadaki
          talep seviyesi de dikkate alınır.
        </p>

        <p>
          Bazı araçlar birkaç hafta içinde satılabilirken bazı modeller aylarca
          ilanda kalabilir. Renk, motor seçeneği, donanım paketi ve bölgesel
          talep satış süresini etkileyebilir.
        </p>

        <p>
          Bu nedenle profesyonel değerleme yapılırken aracın satış hızı, alıcı
          kitlesi ve oluşabilecek stok maliyetleri de değerlendirilir. Çünkü bir
          aracın teorik değeri ile gerçek satış değeri her zaman aynı
          olmayabilir.
        </p>

        <h2>Detacars araç değerlemeye nasıl yaklaşır?</h2>

        <p>
          Detacars olarak araç değerleme sürecinde yalnızca fiyat vermeyi değil,
          fiyatın nasıl oluştuğunu da açıklamayı önemsiyoruz.
        </p>

        <ul>
          <li>Güncel ve karşılaştırılabilir emsal araçları inceleriz.</li>
          <li>Aracın geçmişini ve mevcut kondisyonunu değerlendiririz.</li>
          <li>Kilometre, donanım ve bakım geçmişini dikkate alırız.</li>
          <li>Piyasadaki talep seviyesini analiz ederiz.</li>
          <li>Gerçekçi satış süresini göz önünde bulundururuz.</li>
          <li>Piyasa koşullarına uygun bir fiyat aralığı oluştururuz.</li>
        </ul>

        <p>
          Bu başlıkları birlikte değerlendiriyoruz. Amacımız yalnızca bir fiyat
          belirlemek değil, aracın gerçek piyasa karşılığını mümkün olduğunca
          doğru şekilde ortaya koymaktır.
        </p>
      </article>

      <section className="articleCta">
        <div>
          <h2>Aracınız için ön değerlendirme alın</h2>

          <p>
            Marka, model, kilometre ve hasar bilgilerini paylaşın. Aracınızı
            güncel piyasa koşulları doğrultusunda değerlendirelim.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={19} />
          WhatsApp’tan Değerlendir
        </a>
      </section>

      <nav
        className="articleNavigation"
        aria-label="Diğer araç alım satım rehberleri"
      >
        <Link href="/rehberler/ekspertiz-raporu-nasil-yorumlanir">
          <span>İlgili rehber</span>
          <strong>Ekspertiz Raporu Nasıl Yorumlanır?</strong>
          <small>
            Boya, değişen, mekanik ve elektronik kontrollerin araç değerine
            etkisini inceleyin.
          </small>
          <span className="articleNavigationLink">
            Rehberi oku <ArrowRight size={17} />
          </span>
        </Link>

        <Link
          href="/rehberler/ikinci-el-arac-satarken-nelere-dikkat-edilmeli"
          className="articleNavigationNext"
        >
          <span>İlgili rehber</span>
          <strong>
            İkinci El Araç Satarken Nelere Dikkat Edilmeli?
          </strong>
          <small>
            Fiyatlama, güvenli ödeme, ekspertiz ve noter sürecinde dikkat
            edilmesi gerekenleri öğrenin.
          </small>
          <span className="articleNavigationLink">
            Rehberi oku <ArrowRight size={17} />
          </span>
        </Link>
      </nav>
    </main>
  );
}