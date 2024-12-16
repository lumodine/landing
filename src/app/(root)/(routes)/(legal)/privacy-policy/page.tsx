export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold text-brand">Gizlilik Politikası</h1>
          <p className="text-gray-600">
            {process.env.NEXT_PUBLIC_APP_NAME} olarak, kullanıcılarımızın gizliliğine büyük önem
            veriyoruz. Bu gizlilik politikası, kişisel verilerinizin nasıl toplandığını,
            kullanıldığını ve korunduğunu açıklar.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Kişisel Verilerin Toplanması</h2>
          <p className="text-gray-600">
            Platformumuzu kullandığınızda, adınız, e-posta adresiniz ve IP adresiniz gibi kişisel
            verileriniz toplanabilir. Bu veriler, hizmetlerimizi sunmak ve geliştirmek amacıyla
            kullanılır.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Verilerin Kullanımı</h2>
          <p className="text-gray-600">
            Toplanan veriler, hizmetlerimizi iyileştirmek, kullanıcı deneyimini geliştirmek ve yasal
            yükümlülüklerimizi yerine getirmek için kullanılır. Verileriniz, izniniz olmadan üçüncü
            şahıslarla paylaşılmaz.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Verilerin Korunması</h2>
          <p className="text-gray-600">
            Kişisel verilerinizin güvenliği için gerekli teknik ve idari önlemleri alıyoruz. Ancak,
            internet üzerinden veri iletiminin tamamen güvenli olduğunu garanti edemeyiz.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Haklarınız</h2>
          <p className="text-gray-600">
            Kişisel verilerinize erişme, düzeltme, silme ve işlemeyi kısıtlama haklarına sahipsiniz.
            Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
    </main>
  );
}
