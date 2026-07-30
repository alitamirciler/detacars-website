import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ekspertiz Raporu Nasıl Yorumlanır? | Detacars',
  description:
    'Ekspertiz raporunda şase, podye, sök-tak, motor terlemesi, boyasız göçük düzeltme ve diğer kusurların araç değerine etkisini öğrenin.',
};

const phone = '905383642991';

const whatsappText =
  'Merhaba, ekspertiz raporu olan bir aracım için değerlendirme almak istiyorum.';

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
        <span>Ekspertiz Raporu Nasıl Yorumlanır?</span>
      </div>

      <header className="articleHeader">
        <p className="articleEyebrow">Ekspertiz Rehberi</p>

        <h1 className="articleTitle">
          Ekspertiz Raporu Nasıl Yorumlanır?
        </h1>

        <p className="articleIntro">
          Ekspertiz raporundaki her kusur aynı öneme sahip değildir. Önemli
          olan, raporda kaç satır bulunduğu değil; bu bulguların aracın
          güvenliğini, kullanımını ve piyasa değerini ne ölçüde etkilediğidir.
        </p>
      </header>

      <article className="articleContent">
        <p>
          Aracı satın almadan önce ekspertize götüren birçok kişi, raporu eline
          aldığında onlarca teknik ifadeyle karşılaşır:
        </p>

        <blockquote className="articleQuote">
          Şase, podye, direk, panel, motor terlemesi, şanzıman notları, sök-tak
          parçalar ve tramer geçmişi...
        </blockquote>

        <p>
          Peki bunların hangileri gerçekten önemlidir? Hangileri aracın
          değerini ciddi şekilde etkiler? Hangileri ise birçok araçta
          görülebilen, daha kolay yönetilebilir notlardır?
        </p>

        <p>
          Bu rehberde ekspertiz raporlarında sık karşılaşılan ifadeleri ve
          bunların ikinci el araç değerine nasıl etki ettiğini anlatıyoruz.
        </p>

        <h2>Ekspertiz raporunda ilk baktığımız yerler</h2>

        <p>
          Ekspertiz raporu profesyonel olarak incelenirken genellikle şu
          başlıklara öncelik verilir:
        </p>

        <ul>
          <li>Şase durumu</li>
          <li>Direkler</li>
          <li>Podyeler</li>
          <li>Airbag sistemi</li>
          <li>Motor ve şanzıman</li>
          <li>Tramer geçmişi</li>
          <li>Boya ve değişen parçalar</li>
          <li>Kilometre ve genel kondisyon</li>
        </ul>

        <p>
          Çünkü aracın güvenliği, kullanım durumu ve piyasa değeri çoğu zaman
          bu başlıklarda gizlidir.
        </p>

        <h2>Her boya aynı değildir</h2>

        <p>
          İkinci el piyasasında boya konusu bazen olduğundan daha büyük bir
          sorun hâline getirilebilir. Oysa her boyalı parça araç üzerinde aynı
          etkiyi oluşturmaz.
        </p>

        <p>
          Kaput, tavan ve bagaj gibi parçalar ile çamurluk ve kapı gibi yan
          parçalar aynı şekilde değerlendirilmez. Bazı bölgeler piyasada daha
          fazla önemsenirken bazı parçalar daha tolere edilebilir kabul edilir.
        </p>

        <p>
          Tampon gibi plastik parçalardaki boya veya değişim işlemleri ise çoğu
          zaman araç değerini kaporta parçaları kadar etkilemez.
        </p>

        <p>
          Burada önemli olan yalnızca boyanın varlığı değil; hasarın aracın
          yapısal bölümlerine ulaşıp ulaşmadığı, onarımın kalitesi ve işlem
          sonrasında görüntü bozukluğu kalıp kalmadığıdır.
        </p>

        <h2>Her değişen parça aynı değildir</h2>

        <p>
          Ekspertiz raporunda değişen parça görülmesi tek başına aracın ağır
          hasarlı veya alınmayacak durumda olduğu anlamına gelmez.
        </p>

        <p>
          Önemli olan değişen parçanın nerede olduğu, neden değiştiği ve
          altında başka bir işlem bulunup bulunmadığıdır.
        </p>

        <p>
          Örneğin ön çamurluğu değişmiş bir araçta, çamurluğun altında kalan
          bölgede hafif bir düzeltme görülmesi ile aynı bölgede ağır podye veya
          şase işlemi bulunması aynı şekilde değerlendirilmez.
        </p>

        <p>
          Değişen parçanın aracın taşıyıcı yapısıyla ilişkisi ve kazanın
          büyüklüğü ayrıca incelenmelidir.
        </p>

        <h2>Şase işlemleri neden önemlidir?</h2>

        <p>
          Şase, aracın temel taşıyıcı yapısıdır. Bu nedenle şase üzerindeki
          işlemler ekspertiz raporunda en dikkatli incelenmesi gereken
          başlıklardan biridir.
        </p>

        <p>
          Şase ucunda bulunan hafif bir ezik veya düzeltme işlemi değer kaybı
          yaratabilir. Ancak bu durum tek başına aracın ağır hasarlı olduğu
          anlamına gelmeyebilir.
        </p>

        <p>
          Buna karşılık şase üzerinde kesme, kaynak, ciddi çekme veya yoğun
          düzeltme işlemi bulunuyorsa durum daha farklı değerlendirilir.
        </p>

        <p>
          Piyasada ağır hasar kaydı bulunmasa bile bu tür yapısal işlemler
          aracın satışını zorlaştırabilir ve değerini ciddi ölçüde
          etkileyebilir.
        </p>

        <h2>Şase bağlantı ayakları neden yanlış yorumlanır?</h2>

        <p>
          Ekspertiz raporlarında bazen şase bağlantı ayağıyla ilgili notlar
          görülebilir. Birçok kişi bunu doğrudan ana şase işlemi olarak
          yorumlayabilir.
        </p>

        <p>
          Oysa şase bağlantı ayakları çoğu zaman tampon demiri gibi parçaların
          bağlandığı bölgelerdir. Düşük hızlı çarpışmalarda bile
          etkilenebilirler.
        </p>

        <p>
          Bu nedenle bağlantı ayağındaki bir işlem tek başına aracın ağır
          kazalı olduğu anlamına gelmez. Yine de işlemin boyutu, onarım şekli
          ve çevresindeki diğer bulgular birlikte değerlendirilmelidir.
        </p>

        <h2>Sök-tak parçalar her zaman kötü müdür?</h2>

        <p>
          Ekspertiz raporunda “sök-tak” ifadesi birçok alıcıyı gereğinden fazla
          endişelendirebilir. Bazı kişiler sök-tak görülen her parçanın
          değişmiş olduğunu düşünebilir.
        </p>

        <p>
          Oysa sök-tak ifadesi yalnızca parçanın bir nedenle yerinden sökülüp
          yeniden takıldığını gösterir. Bakım, onarım veya ulaşılması gereken
          başka bir parça nedeniyle de sökülmüş olabilir.
        </p>

        <p>
          Ekspertiz firmaları bazı durumlarda kendilerini güvence altına almak
          için “sök-tak, değişen olabilir” şeklinde not düşebilir.
        </p>

        <p>
          Modern araçlarda parçaların üzerinde üretim tarihleri bulunabilir.
          Sök-tak olduğu belirtilen parçanın üretim tarihi aracın diğer
          parçalarıyla aynı dönemi gösteriyorsa, bu durum parçanın orijinal
          olabileceğine dair önemli bir işarettir.
        </p>

        <p>
          Bununla birlikte üretim tarihi tek başına kesin kanıt değildir.
          Bağlantı noktaları, boya ölçümleri, parça üzerindeki etiketler ve
          aracın genel geçmişi birlikte değerlendirilmelidir.
        </p>

        <h2>Motorda terleme ne demektir?</h2>

        <p>
          Ekspertiz raporunda “motor terlemesi mevcut” ifadesi birçok kişiyi
          gereksiz yere endişelendirebilir.
        </p>

        <p>
          Hafif yağ terlemesi özellikle yaşı ve kilometresi ilerlemiş araçlarda
          görülebilir. Bu durum her zaman ciddi bir mekanik arıza anlamına
          gelmez.
        </p>

        <p>
          Önemli olan yağın hangi bölgeden geldiği, seviyesinin ne olduğu ve
          aktif kaçak bulunup bulunmadığıdır.
        </p>

        <p>
          Yağ damlaması, aktif sızıntı veya hızlı yağ eksiltme tespit edilmişse
          mekanik ustasından görüş almak ve olası masrafı öğrenmek faydalı olur.
        </p>

        <h2>Boyasız göçük düzeltme değer kaybı yaratır mı?</h2>

        <p>
          Boyasız göçük düzeltme; kapı çarpması, küçük göçükler veya hafif dolu
          hasarlarında başarılı sonuçlar verebilir.
        </p>

        <p>
          Normal seviyedeki ve düzgün uygulanmış boyasız göçük düzeltmeleri
          ikinci el piyasasında genellikle önemli bir değer kaybı oluşturmaz.
        </p>

        <p>
          Ancak yoğun dolu hasarı nedeniyle aracın çok sayıda parçasında işlem
          yapılmışsa veya parça üzerinde belirgin görüntü bozukluğu kalmışsa
          piyasa bunu kusur olarak değerlendirebilir.
        </p>

        <h2>Ekspertiz firmalarının standart notları</h2>

        <p>
          Ekspertiz raporlarında yer alan her tavsiye ciddi bir arıza olduğu
          anlamına gelmez. Bazı notlar önleyici kontrol amacıyla veya ekspertiz
          firmasının kendisini güvence altına alması için standart olarak
          eklenebilir.
        </p>

        <ul>
          <li>Dizel araçlarda enjektör kontrolü önerilir.</li>
          <li>Benzinli araçlarda buji kontrolü önerilir.</li>
          <li>
            Belirli kilometrelerde triger sistemi kontrolü tavsiye edilir.
          </li>
          <li>
            Şanzıman yağı ve diğer sıvı bakımlarının kontrolü önerilebilir.
          </li>
        </ul>

        <p>
          Bazı markaların veya motor seçeneklerinin bilinen kronik sorunları
          nedeniyle de önleyici notlar düşülebilir.
        </p>

        <p>
          Bu tür ifadeler yorumlanırken aracın kilometresi, servis geçmişi,
          kullanım durumu ve yapılan testlerin sonucu birlikte incelenmelidir.
        </p>

        <h2>Lastik, balata ve bakım kalemleri ne kadar önemlidir?</h2>

        <p>
          Lastik, fren balatası, disk ve sıvı bakımları alıcı için kısa vadeli
          bir maliyet oluşturabilir.
        </p>

        <p>
          Ancak ikinci el araç ticaretinde bu kalemler çoğunlukla sarf
          malzemesi olarak değerlendirilir. Bu nedenle aracın genel değerini,
          şase veya güvenlik sistemleriyle ilgili işlemler kadar etkilemezler.
        </p>

        <p>
          Yine de tüm sarf malzemelerinin aynı anda değişmesi gerekiyorsa,
          oluşacak toplam maliyet satış fiyatı değerlendirilirken göz önünde
          bulundurulabilir.
        </p>

        <h2>Ekspertiz raporundaki mekanik notlar nasıl yorumlanır?</h2>

        <p>
          Motor ve şanzımanla ilgili notlarda yalnızca yazılan ifadeye değil,
          problemin seviyesine ve olası maliyetine bakılmalıdır.
        </p>

        <p>
          Hafif bir ses, küçük bir titreşim veya bakım ihtiyacı ile ciddi motor
          vuruntusu, hararet geçmişi veya şanzıman arızası aynı öneme sahip
          değildir.
        </p>

        <p>
          Mekanik bir bulgu varsa arıza tespiti yapılmadan yalnızca ekspertiz
          raporundaki kısa ifadeye dayanarak karar vermek yanıltıcı olabilir.
          Gerekli durumlarda marka konusunda deneyimli bir ustadan ek görüş
          alınmalıdır.
        </p>

        <h2>Airbag sistemi neden kritik bir başlıktır?</h2>

        <p>
          Airbag sistemi aracın temel güvenlik donanımları arasındadır. Airbag
          açması, airbag değişimi, dirençle kandırma veya sistemde hata bulunması
          dikkatle değerlendirilmelidir.
        </p>

        <p>
          Gösterge panelinde airbag ışığının yanmaması, sistemin kesin olarak
          sorunsuz olduğu anlamına gelmez. Bu nedenle airbag beyni, emniyet
          kemerleri ve ilgili parçalar elektronik kontrollerle birlikte
          incelenmelidir.
        </p>

        <h2>Ekspertiz raporuna değil, sonuca bakın</h2>

        <p>
          Aynı ekspertiz raporu iki farklı kişi tarafından farklı
          yorumlanabilir. Önemli olan raporda kaç satır kusur yazdığı değil, bu
          kusurların aracın güvenliğini, kullanımını ve piyasa değerini ne
          ölçüde etkilediğidir.
        </p>

        <p>
          Bazı araçlar birkaç parça boya veya değişene rağmen düzgün durumda
          olabilir. Bazı araçlar ise boyasız görünmesine rağmen ciddi mekanik
          veya yapısal sorunlar barındırabilir.
        </p>

        <p>
          Bu nedenle ekspertiz raporundaki maddeleri birbirinden bağımsız
          değerlendirmek yerine aracın tamamına birlikte bakmak gerekir.
        </p>

        <h2>Ekspertiz raporunda en kritik 5 konu</h2>

        <ol>
          <li>Şase</li>
          <li>Direkler</li>
          <li>Podyeler</li>
          <li>Airbag sistemi</li>
          <li>Motor ve şanzıman durumu</li>
        </ol>

        <p>
          Bu başlıklarda ciddi bir problem yoksa diğer bulgular çoğu zaman daha
          kolay yönetilebilen konular olabilir.
        </p>

        <h2>Detacars ekspertiz raporlarına nasıl yaklaşır?</h2>

        <p>
          Detacars olarak ekspertiz raporlarını yalnızca bir kusur listesi
          olarak görmüyoruz.
        </p>

        <ul>
          <li>Kaporta ve boya geçmişini inceleriz.</li>
          <li>Şase, podye ve direk gibi yapısal bölgeleri değerlendiririz.</li>
          <li>Motor ve şanzıman bulgularını dikkate alırız.</li>
          <li>Airbag ve güvenlik sistemlerini göz önünde bulundururuz.</li>
          <li>Tramer ve bakım geçmişini birlikte inceleriz.</li>
          <li>Bulguların aracın piyasa değerine etkisini analiz ederiz.</li>
        </ul>

        <p>
          Amacımız yalnızca raporu okumak değil, rapordaki bulguların aracın
          gerçek piyasa değerine ve kullanımına nasıl etki ettiğini doğru
          yorumlamaktır.
        </p>

        <p>
          Ekspertiz raporu tek başına “alınır” veya “alınmaz” kararı veren bir
          belge değildir. Önemli olan kusurun niteliğini, onarım kalitesini,
          olası maliyeti ve araç üzerindeki gerçek etkisini birlikte
          değerlendirebilmektir.
        </p>
      </article>

      <section className="articleCta">
        <div>
          <h2>Aracınız için ön değerlendirme alın</h2>

          <p>
            Marka, model, kilometre, hasar ve ekspertiz bilgilerini paylaşın.
            Aracınızı güncel piyasa koşulları doğrultusunda değerlendirelim.
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
        <Link href="/rehberler/arac-degerleme-nasil-yapilir">
          <span>İlgili rehber</span>
          <strong>Araç Değerleme Nasıl Yapılır?</strong>
          <small>
            Kilometre, hasar, donanım, bakım geçmişi ve emsal araçların fiyat
            üzerindeki etkisini inceleyin.
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