export default function CookiePolicyPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Çerez Politikası</h1>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME} olarak, kullanıcı deneyimini geliştirmek için
            çerezler kullanıyoruz. Bu çerez politikası, çerezlerin nasıl kullanıldığını ve
            yönetildiğini açıklar.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza yerleştirilen küçük
            metin dosyalarıdır. Bu dosyalar, sitenin işleyişini sağlamak veya daha verimli
            çalışmasını temin etmek için kullanılır.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Kullanılan Çerez Türleri</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Oturum Çerezleri:</strong> Sitenin düzgün çalışması için gereklidir ve
              tarayıcınızı kapattığınızda silinir.
            </li>
            <li>
              <strong>Kalıcı Çerezler:</strong> Tercihlerinizi hatırlamak ve gelecekteki
              ziyaretlerinizi iyileştirmek için kullanılır.
            </li>
            <li>
              <strong>Analitik Çerezler:</strong> Sitemizin nasıl kullanıldığını anlamamıza yardımcı
              olur ve performansını artırır.
            </li>
            <li>
              <strong>Reklam Çerezleri:</strong> İlgi alanlarınıza uygun reklamlar sunmak için
              kullanılır.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Çerezlerin Kullanımı</h2>
          <p>
            Çerezler, kullanıcı deneyimini geliştirmek, sitemizin performansını artırmak ve size
            daha kişiselleştirilmiş hizmetler sunmak için kullanılır. Çerezler aracılığıyla toplanan
            veriler anonimleştirilebilir ve üçüncü taraflarla paylaşılabilir.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Çerezlerin Yönetimi</h2>
          <p>
            Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz. Çerezleri devre dışı
            bırakabilir veya silebilirsiniz. Ancak, bazı çerezlerin devre dışı bırakılması durumunda
            sitemizin belirli özellikleri düzgün çalışmayabilir.
          </p>
        </div>
      </section>
    </main>
  );
}
