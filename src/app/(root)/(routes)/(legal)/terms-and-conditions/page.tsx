export default function TermsAndConditionsPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Kullanım Şartları</h1>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME} platformunu kullanmadan önce bu kullanım şartlarını
            dikkatlice okuyunuz. Platformumuzu kullanarak, bu şartları kabul etmiş sayılırsınız.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Kullanıcı Yükümlülükleri</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Platforma sağladığınız bilgilerin doğru ve güncel olduğunu taahhüt edersiniz.</li>
            <li>Hizmetlerimizi yasal olmayan amaçlar için kullanamazsınız.</li>
            <li>
              Platformu kullanırken diğer kullanıcıların haklarını ihlal edecek davranışlardan
              kaçınmalısınız.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">
            {process.env.NEXT_PUBLIC_APP_NAME}’in Hak ve Sorumlulukları
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Platformun sürekli ve kesintisiz çalışmasını sağlamak için elimizden geleni yaparız,
              ancak teknik aksaklıklar nedeniyle hizmet kesintileri yaşanabilir.
            </li>
            <li>
              Kullanıcıların sağladığı verilerin güvenliğini sağlamak için gerekli önlemleri alırız.
            </li>
            <li>Üçüncü taraf bağlantılardan kaynaklanan sorunlardan sorumlu değiliz.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Fikri Mülkiyet Hakları</h2>
          <p>
            Platformda yer alan tüm içerik, tasarım, logo ve diğer materyaller{" "}
            {process.env.NEXT_PUBLIC_APP_NAME}’ye aittir. İzinsiz olarak kopyalanamaz, dağıtılamaz
            veya ticari amaçla kullanılamaz.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Sorumluluk Reddi</h2>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME}, kullanıcılar tarafından oluşturulan içeriklerden
            sorumlu değildir. Platformun kötüye kullanımı durumunda, yasal sorumluluk tamamen
            kullanıcıya aittir.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Şartların Değiştirilmesi</h2>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME}, bu kullanım şartlarını önceden bildirimde
            bulunmaksızın değiştirme hakkını saklı tutar. Kullanıcılar, bu sayfayı düzenli olarak
            kontrol etmekle yükümlüdür.
          </p>
        </div>
      </section>
    </main>
  );
}
