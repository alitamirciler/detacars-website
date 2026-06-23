import { MessageCircle } from 'lucide-react';

const phone = '905383642991';

const whatsappText =
  'Merhaba, aracım için ön değerlendirme almak istiyorum.';

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappText
)}`;

export default function ArticlePage() {
  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 24px',
      }}
    >
      <p
        style={{
          color: '#0e8f3d',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '.08em',
        }}
      >
        Rehber
      </p>

      <h1
        style={{
          fontSize: '48px',
          lineHeight: '1.1',
          marginBottom: '32px',
        }}
      >
        Araç Değerleme Nasıl Yapılır?
      </h1>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Aracını satmayı düşünen birçok kişinin ilk sorusu genellikle aynıdır:
      </p>

      <p
        style={{
          fontSize: '22px',
          lineHeight: '1.8',
          color: '#111',
          fontWeight: 700,
        }}
      >
        "Aracım kaç para eder?"
      </p>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Ancak ikinci el araç piyasasında doğru fiyat belirlemek yalnızca marka,
        model ve kilometre bilgisine bakılarak yapılmaz. Aynı model, aynı yıl ve
        benzer kilometrede iki aracın piyasa değeri arasında ciddi farklar
        oluşabilir.
      </p>

      <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#444' }}>
        Çünkü araç değerlemesi aslında aracın geçmişini, mevcut durumunu ve
        piyasadaki talebini birlikte değerlendirme işidir.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Araç değerini etkileyen temel faktörler
      </h2>

      <h3>Marka ve Model</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Her aracın ikinci el piyasasındaki talebi aynı değildir. Bazı modeller
        çok geniş bir alıcı kitlesine hitap ederken bazı araçlar daha dar bir
        kitleye sahiptir.
      </p>

      <h3>Kilometre</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Kilometre önemli bir kriterdir ancak tek başına belirleyici değildir.
        Araç yaşı ile kilometrenin uyumlu olması beklenir. Bunun yanında bakım
        geçmişi, kullanım şekli ve genel kondisyon da değerlendirilmelidir.
      </p>

      <h3>Hasar Geçmişi</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Kaza geçmişi, tramer kayıtları ve hasarın niteliği araç değerini
        doğrudan etkiler. Burada önemli olan yalnızca hasar tutarı değil,
        hasarın hangi bölgelerde olduğu ve nasıl onarıldığıdır.
      </p>

      <h3>Boya ve Değişen Durumu</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        İkinci el araç piyasasında boya ve değişen parçalar en çok dikkat edilen
        konular arasındadır. Ancak her boya veya değişen parça aynı etkiyi
        oluşturmaz. İşlemin hangi parçada olduğu ve aracın genel durumu birlikte
        değerlendirilir.
      </p>

      <h3>Donanım Paketi</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Aynı model aracın farklı paketleri arasında ciddi fiyat farkları
        oluşabilir. Donanım seviyesi ikinci el değerini doğrudan etkileyebilir.
      </p>

      <h3>Bakım Geçmişi</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Düzenli bakım görmüş ve kayıtları takip edilebilen araçlar genellikle
        daha fazla talep görür. Bu durum satış sürecini kolaylaştırır ve alıcı
        güvenini artırır.
      </p>

      <h3>Güncel Piyasa Koşulları</h3>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Döviz kuru, kredi imkanları, ikinci el araç talebi ve piyasa koşulları
        da araç değerini etkiler. Bu nedenle birkaç ay önce geçerli olan bir
        fiyat bugün aynı sonucu vermeyebilir.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Neden aynı model araçlar farklı fiyatlara satılır?
      </h2>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        İlan sitelerinde aynı model araçlar arasında bazen yüz binlerce liralık
        fiyat farkları görülebilir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Bunun bir kısmı araçların geçmişi, kondisyonu, bakım durumu ve donanım
        farklılıklarından kaynaklanır.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Ancak bazı bireysel satıcılar araçlarını piyasa değerinin üzerinde
        fiyatlarla ilana koyabilir. Benzer şekilde bazı kurumsal firmalar da
        marka algısı veya sundukları ek hizmetler nedeniyle daha yüksek
        fiyatlandırma yapabilir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Piyasanın doğal işleyişinde, benzer özelliklere sahip araçlar arasında
        fiyatı piyasa koşullarına en uygun olan araçlar genellikle daha hızlı
        satılır ve piyasa seviyesini belirler.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Araç değerleme sürecinde yapılan yaygın hatalar
      </h2>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Araç sahiplerinin sık yaptığı hatalardan biri ilan sitelerindeki
        ortalama fiyatlara bakarak araçlarının aynı değerde olduğunu
        düşünmeleridir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Oysa profesyonel değerleme sürecinde yalnızca ortalama ilan fiyatları
        değil, aynı özelliklere sahip araçlar arasında gerçekten satılma
        ihtimali en yüksek olan emsaller incelenir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Birçok durumda piyasadaki en uygun fiyatlı emsal araç referans noktası
        olarak alınır. Bu aracın hemen üzerindeki ilanlarla birlikte oluşan
        fiyat bandı değerlendirilerek aracın son kullanıcıya hangi aralıkta
        satılabileceği analiz edilir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Çünkü ikinci el piyasasında çoğu zaman ilk satılan araç en pahalı araç
        değil, fiyatı piyasa koşullarına en uygun belirlenen araçtır.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Her araç aynı hızda satılmaz
      </h2>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Araç değerlemesinde yalnızca aracın fiziksel durumu değil, piyasadaki
        talep seviyesi de dikkate alınır.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Bazı araçlar birkaç hafta içinde satılabilirken bazı modeller aylarca
        ilanda kalabilir.
      </p>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Bu nedenle profesyonel değerleme yapılırken aracın satış hızı, alıcı
        kitlesi ve oluşabilecek stok maliyetleri de değerlendirilir. Çünkü bir
        aracın teorik değeri ile gerçek satış değeri her zaman aynı olmayabilir.
      </p>

      <h2 style={{ marginTop: '48px' }}>
        Detacars araç değerlemeye nasıl yaklaşır?
      </h2>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Detacars olarak araç değerleme sürecinde yalnızca fiyat vermeyi değil,
        fiyatın nasıl oluştuğunu da açıklamayı önemsiyoruz.
      </p>

      <ul style={{ lineHeight: '2', fontSize: '18px' }}>
        <li>Güncel emsal araçları inceleriz</li>
        <li>Aracın geçmişini ve kondisyonunu değerlendiririz</li>
        <li>Piyasadaki talep seviyesini analiz ederiz</li>
        <li>Gerçekçi satış süresini dikkate alırız</li>
        <li>Piyasa koşullarına uygun fiyat aralığı oluştururuz</li>
      </ul>

      <p style={{ lineHeight: '1.9', color: '#444' }}>
        Amacımız yalnızca teklif vermek değil, aracın gerçek piyasa değerini
        mümkün olduğunca doğru şekilde ortaya koymaktır.
      </p>

      <div
        style={{
          marginTop: '64px',
          padding: '32px',
          borderRadius: '18px',
          background: '#f6f7f6',
          textAlign: 'center',
        }}
      >
        <h2>Aracınız için ön değerlendirme alın</h2>

        <p style={{ color: '#555', lineHeight: '1.7' }}>
          Marka, model, kilometre ve hasar bilgilerini paylaşın.
          Aracınızı güncel piyasa koşulları doğrultusunda değerlendirelim.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#0e9f45',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={18} />
          WhatsApp’tan Değerlendir
        </a>
      </div>
    </main>
  );
}