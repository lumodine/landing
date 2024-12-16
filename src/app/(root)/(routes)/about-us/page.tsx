import {BuyMeACoffeeButton} from "@/components/common/buy-me-a-coffee-button";

export default function AboutUsPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold text-brand">
            Dijitalleşmenin Gücüyle İşletmenizi Büyütün
          </h1>
          <p className="text-gray-600">
            Restoranlar ve kafeler için modern bir çözüm sunuyoruz!{" "}
            {process.env.NEXT_PUBLIC_APP_NAME}, işletmelerin menülerini dijitalleştirerek hem
            müşterilere hem de işletme sahiplerine daha iyi bir deneyim sağlamayı amaçlamaktadır.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Misyon</h2>
          <p className="text-gray-600">
            Teknoloji ile işletmeleri güçlendirmek, müşterilerin ihtiyaçlarını karşılamak ve her iki
            taraf için de sorunsuz bir deneyim sunmak.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Vizyon</h2>
          <p className="text-gray-600">
            Dünyanın her köşesindeki işletmelere ulaşarak, QR menü kullanımını standart hale getiren
            global bir platform olmak.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Değerlerimiz</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Yenilikçilik:</strong> Her zaman en yeni teknolojilerle hizmet sunmaya
              çalışıyoruz.
            </li>
            <li>
              <strong>Kullanıcı Odaklılık:</strong> Kullanıcılarımızın ihtiyaçlarını anlamak ve
              çözümler sunmak birinci önceliğimiz.
            </li>
            <li>
              <strong>Çevre Duyarlılığı:</strong> Kağıt kullanımını azaltarak daha sürdürülebilir
              bir dünya için çalışıyoruz.
            </li>
            <li>
              <strong>Kolaylık:</strong> Herkesin rahatça kullanabileceği, basit ve etkili bir çözüm
              sunuyoruz.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Bizim Hikayemiz</h2>
          <p className="text-gray-600">
            {process.env.NEXT_PUBLIC_APP_NAME}, restoran sektöründeki dijitalleşme ihtiyacını fark
            eden bir ekip tarafından kuruldu. 2024 yılında faaliyete geçen platformumuz, kısa sürede
            işletme sahiplerinin ihtiyaçlarını karşılayan, kullanıcı dostu bir çözüm olarak dikkat
            çekti. Bugün, onlarca farklı ülkede binlerce işletme, müşterileri için modern bir
            deneyim sunmak adına {process.env.NEXT_PUBLIC_APP_NAME} tercih ediyor.
          </p>
          <BuyMeACoffeeButton />
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Neden {process.env.NEXT_PUBLIC_APP_NAME}?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Kolay Kullanım:</strong> Kullanıcı dostu arayüzümüz ile menülerinizi dakikalar
              içinde oluşturabilirsiniz.
            </li>
            <li>
              <strong>Çoklu Dil Desteği:</strong> İşletmenizin global müşterilerine hitap etmesini
              kolaylaştırıyoruz.
            </li>
            <li>
              <strong>Hızlı Güncelleme:</strong> Menü değişikliklerini anında yapabilir, QR kodunuzu
              değiştirmeden kullanmaya devam edebilirsiniz.
            </li>
            <li>
              <strong>Kapsamlı Analizler:</strong> Müşteri etkileşimlerini izleyebilir ve
              işletmenizin performansını artırabilirsiniz.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
