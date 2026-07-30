import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, ekspertiz raporu olan bir aracım için değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export const metadata: Metadata = {
  title: 'Ekspertiz Raporu Nasıl Yorumlanır? | Detacars',
  description:
    'Ekspertiz raporunda şase, podye, sök-tak, motor terlemesi, boyasız göçük düzeltme ve diğer kusurların araç değerine etkisini öğrenin.',
};

export default function ArticlePage() {
  return (
    <main className="articlePage">
      <nav className="articleBreadcrumb" aria-label="Sayfa yolu">
        <a href="/">Ana Sayfa</a>
        <span>/</span>
        <a href="/rehberler">Rehberler</a>
        <span>/</span>
        <span>Ekspertiz Raporu</span>
      </nav>

      <article>
        <header className="articleHeader">
          <p className="articleEyebrow">Ekspertiz Rehberi</p>

          <h1 className="articleTitle">
            Ekspertiz Raporu Nasıl Yorumlanır?
          </h1>

          <p className="articleIntro">
            Aracı satın almadan önce ekspertize götüren birçok kişi, raporu
            eline aldığında onlarca teknik ifadeyle karşılaşır.
          </p>

          <div className="articleQuote">
            “Şase, podye, direk, motor terlemesi, sök-tak, tramer...”
          </div>

          <p className="articleIntro">
            Peki bunların hangileri gerçekten önemlidir? Hangileri aracın
            değerini ciddi şekilde etkiler?
          </p>

          <p className="articleIntro">
            Hangileri ise birçok araçta görülebilen, daha kolay yönetilebilir
            notlardır?
          </p>

          <p className="articleIntro">
            Bu rehberde ekspertiz raporlarında sık karşılaşılan ifadeleri ve
            bunların ikinci el araç değerine nasıl etki ettiğini anlatıyoruz.
          </p>
        </header>

        <div className="articleContent">
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
            sorun hâline getirilebilir.
          </p>

          <p>
            Kaput, tavan ve bagaj gibi parçalar ile çamurluk ve kapı gibi yan
            parçalar aynı şekilde değerlendirilmez.
          </p>

          <p>
            Bazı bölgeler piyasada daha fazla önemsenirken bazı parçalar daha
            tolere edilebilir kabul edilir.
          </p>

          <p>
            Tampon gibi plastik parçalardaki boya veya değişim işlemleri ise
            çoğu zaman araç değerini kaporta parçaları kadar etkilemez.
          </p>

          <p>
            Burada önemli olan yalnızca boyanın varlığı değil, hasarın aracın
            yapısal bölümlerine ulaşıp ulaşmadığı ve yapılan işlemin
            niteliğidir.
          </p>

          <h2>Her değişen parça aynı değildir</h2>

          <p>
            Ekspertiz raporunda değişen parça görülmesi tek başına aracın ağır
            hasarlı olduğu anlamına gelmez.
          </p>

          <p>
            Önemli olan değişen parçanın nerede olduğu, neden değiştiği ve
            altında başka bir işlem bulunup bulunmadığıdır.
          </p>

          <p>
            Örneğin ön çamurluğu değişmiş bir araçta, çamurluğun altında kalan
            bölgede hafif bir düzeltme görülmesi ile aynı bölgede ağır podye
            veya şase işlemi bulunması aynı şekilde değerlendirilmez.
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
            yaratabilir.
          </p>

          <p>
            Ancak bu durum tek başına aracın ağır hasarlı olduğu anlamına
            gelmeyebilir.
          </p>

          <p>
            Buna karşılık şase üzerinde kesme, kaynak, ciddi çekme veya yoğun
            düzeltme işlemi bulunuyorsa durum daha farklı değerlendirilir.
          </p>

          <p>
            Ağır hasar kaydı bulunmasa bile bu tür yapısal işlemler aracın
            satışını zorlaştırabilir ve değerini ciddi ölçüde etkileyebilir.
          </p>

          <h2>Şase bağlantı ayakları neden yanlış yorumlanır?</h2>

          <p>
            Ekspertiz raporlarında bazen şase bağlantı ayağıyla ilgili notlar
            görülebilir.
          </p>

          <p>
            Birçok kişi bunu doğrudan ana şase işlemi olarak yorumlayabilir.
          </p>

          <p>
            Oysa şase bağlantı ayakları çoğu zaman tampon demiri gibi
            parçaların bağlandığı bölgelerdir.
          </p>

          <p>
            Düşük hızlı çarpışmalarda bile etkilenebilirler.
          </p>

          <p>
            Bu nedenle bağlantı ayağındaki bir işlem tek başına aracın ağır
            kazalı olduğu anlamına gelmez.
          </p>

          <p>
            Yine de işlemin boyutu, onarım şekli ve çevresindeki diğer bulgular
            birlikte değerlendirilmelidir.
          </p>

          <h2>Sök-tak parçalar her zaman kötü müdür?</h2>

          <p>
            Ekspertiz raporunda “sök-tak” ifadesi birçok alıcıyı gereğinden
            fazla endişelendirebilir.
          </p>

          <p>
            Bazı kişiler sök-tak görülen her parçanın değişmiş olduğunu
            düşünebilir.
          </p>

          <p>
            Oysa sök-tak ifadesi yalnızca parçanın bir nedenle yerinden sökülüp
            yeniden takıldığını gösterir.
          </p>

          <p>
            Bakım, onarım veya ulaşılması gereken başka bir parça nedeniyle de
            sökülmüş olabilir.
          </p>

          <p>
            Ekspertiz firmaları bazı durumlarda kendilerini güvence altına
            almak için “sök-tak, değişen olabilir” şeklinde not düşebilir.
          </p>

          <p>
            Modern araçlarda parçaların üzerinde üretim tarihleri bulunabilir.
          </p>

          <p>
            Sök-tak olduğu belirtilen parçanın üretim tarihi aracın diğer
            parçalarıyla aynı dönemi gösteriyorsa, bu durum parçanın orijinal
            olabileceğine dair önemli bir işarettir.
          </p>

          <p>
            Bununla birlikte üretim tarihi tek başına kesin kanıt değildir.
            Bağlantı noktaları, boya ölçümleri, parça etiketleri ve aracın genel
            geçmişi birlikte değerlendirilmelidir.
          </p>

          <h2>Motorda terleme ne demektir?</h2>

          <p>
            Ekspertiz raporunda “motor terlemesi mevcut” ifadesi birçok kişiyi
            gereksiz yere endişelendirebilir.
          </p>

          <p>
            Hafif yağ terlemesi özellikle yaşı ve kilometresi ilerlemiş
            araçlarda görülebilir.
          </p>

          <p>
            Bu durum her zaman ciddi bir mekanik arıza anlamına gelmez.
          </p>

          <p>
            Önemli olan yağın hangi bölgeden geldiği, seviyesinin ne olduğu ve
            aktif kaçak bulunup bulunmadığıdır.
          </p>

          <p>
            Yağ damlaması, aktif sızıntı veya hızlı yağ eksiltme tespit
            edilmişse mekanik ustasından görüş almak ve olası masrafı öğrenmek
            faydalı olur.
          </p>

          <h2>Boyasız göçük düzeltme değer kaybı yaratır mı?</h2>

          <p>
            Boyasız göçük düzeltme; kapı çarpması, küçük göçükler veya hafif
            dolu hasarlarında başarılı sonuçlar verebilir.
          </p>

          <p>
            Normal seviyedeki ve düzgün uygulanmış boyasız göçük düzeltmeleri
            ikinci el piyasasında genellikle önemli bir değer kaybı oluşturmaz.
          </p>

          <p>
            Ancak yoğun dolu hasarı nedeniyle aracın çok sayıda parçasında
            işlem yapılmışsa veya parça üzerinde belirgin görüntü bozukluğu
            kalmışsa piyasa bunu kusur olarak değerlendirebilir.
          </p>

          <h2>Ekspertiz firmalarının standart notları</h2>

          <p>
            Ekspertiz raporlarında yer alan her tavsiye ciddi bir arıza olduğu
            anlamına gelmez.
          </p>

          <p>
            Bazı notlar önleyici kontrol amacıyla veya ekspertiz firmasının
            kendisini güvence altına alması için standart olarak eklenebilir.
          </p>

          <ul>
            <li>Dizel araçlarda enjektör kontrolü önerilir.</li>
            <li>Benzinli araçlarda buji kontrolü önerilir.</li>
            <li>Belirli kilometrelerde triger kontrolü tavsiye edilir.</li>
            <li>Şanzıman yağı ve diğer sıvı bakımları önerilebilir.</li>
          </ul>

          <p>
            Bazı markaların veya motor seçeneklerinin bilinen kronik sorunları
            nedeniyle de önleyici notlar düşülebilir.
          </p>

          <p>
            Bu tür ifadeler yorumlanırken aracın kilometresi, servis geçmişi,
            kullanım durumu ve yapılan testlerin sonucu birlikte
            incelenmelidir.
          </p>

          <h2>Lastik, balata ve bakım kalemleri ne kadar önemlidir?</h2>

          <p>
            Lastik, fren balatası, disk ve sıvı bakımları alıcı için kısa vadeli
            bir maliyet oluşturabilir.
          </p>

          <p>
            Ancak ikinci el araç ticaretinde bu kalemler çoğunlukla sarf
            malzemesi olarak değerlendirilir.
          </p>

          <p>
            Bu nedenle aracın genel değerini, şase veya güvenlik sistemleriyle
            ilgili işlemler kadar etkilemezler.
          </p>

          <p>
            Yine de tüm sarf malzemelerinin aynı anda değişmesi gerekiyorsa
            oluşacak toplam maliyet satış fiyatı değerlendirilirken göz önünde
            bulundurulabilir.
          </p>

          <h2>Ekspertiz raporundaki mekanik notlar nasıl yorumlanır?</h2>

          <p>
            Motor ve şanzımanla ilgili notlarda yalnızca yazılan ifadeye değil,
            problemin seviyesine ve olası maliyetine bakılmalıdır.
          </p>

          <p>
            Hafif bir ses, küçük bir titreşim veya bakım ihtiyacı ile ciddi
            motor vuruntusu, hararet geçmişi veya şanzıman arızası aynı öneme
            sahip değildir.
          </p>

          <p>
            Mekanik bir bulgu varsa arıza tespiti yapılmadan yalnızca ekspertiz
            raporundaki kısa ifadeye dayanarak karar vermek yanıltıcı olabilir.
          </p>

          <p>
            Gerekli durumlarda marka konusunda deneyimli bir ustadan ek görüş
            alınmalıdır.
          </p>

          <h2>Airbag sistemi neden kritik bir başlıktır?</h2>

          <p>
            Airbag sistemi aracın temel güvenlik donanımları arasındadır.
          </p>

          <p>
            Airbag açması, airbag değişimi, dirençle kandırma veya sistemde hata
            bulunması dikkatle değerlendirilmelidir.
          </p>

          <p>
            Gösterge panelinde airbag ışığının yanmaması, sistemin kesin olarak
            sorunsuz olduğu anlamına gelmez.
          </p>

          <p>
            Bu nedenle airbag beyni, emniyet kemerleri ve ilgili parçalar
            elektronik kontrollerle birlikte incelenmelidir.
          </p>

          <h2>Ekspertiz raporuna değil, sonuca bakın</h2>

          <p>
            Aynı ekspertiz raporu iki farklı kişi tarafından farklı
            yorumlanabilir.
          </p>

          <p>
            Önemli olan raporda kaç satır kusur yazdığı değil, bu kusurların
            aracın güvenliğini, kullanımını ve piyasa değerini ne ölçüde
            etkilediğidir.
          </p>

          <p>
            Bazı araçlar birkaç parça boya veya değişene rağmen düzgün durumda
            olabilir.
          </p>

          <p>
            Bazı araçlar ise boyasız görünmesine rağmen ciddi mekanik veya
            yapısal sorunlar barındırabilir.
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
            Bu başlıklarda ciddi bir problem yoksa diğer bulgular çoğu zaman
            daha kolay yönetilebilen konular olabilir.
          </p>

          <h2>Detacars ekspertiz raporlarına nasıl yaklaşır?</h2>

          <p>
            Detacars olarak ekspertiz raporlarını yalnızca bir kusur listesi
            olarak görmüyoruz.
          </p>

          <p>Bir raporu değerlendirirken:</p>

          <ul>
            <li>Kaporta ve boya geçmişini</li>
            <li>Şase, podye ve direk gibi yapısal bölgeleri</li>
            <li>Motor ve şanzıman bulgularını</li>
            <li>Airbag ve güvenlik sistemlerini</li>
            <li>Tramer ve bakım geçmişini</li>
            <li>Bulguların araç değerine etkisini</li>
          </ul>

          <p>birlikte değerlendiriyoruz.</p>

          <p>
            Amacımız yalnızca raporu okumak değil, rapordaki bulguların aracın
            gerçek piyasa değerine ve kullanımına nasıl etki ettiğini doğru
            yorumlamaktır.
          </p>

          <p>
            Ekspertiz raporu tek başına “alınır” veya “alınmaz” kararı veren
            bir belge değildir.
          </p>

          <p>
            Önemli olan kusurun niteliğini, onarım kalitesini, olası maliyeti
            ve araç üzerindeki gerçek etkisini birlikte değerlendirebilmektir.
          </p>
        </div>

        <section className="articleCta">
          <h2>Aracınız için ön değerlendirme alın</h2>

          <p>
            Marka, model, kilometre, hasar ve ekspertiz bilgilerini paylaşın.
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