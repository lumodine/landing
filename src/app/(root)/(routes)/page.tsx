import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">LumoDine</h1>
        <p className="text-gray-600 mt-2">
          QR Menü Sistemi ile işletmenizi bir adım öne taşıyın.
        </p>
      </header>

      <section className="grid gap-8 w-full max-w-4xl">
        <div className="p-6 bg-white shadow rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700">Hakkımızda</h2>
          <p className="text-gray-600 mt-2">
            LumoDine, kafeler ve restoranlar için modern QR Menü çözümleri sunar. İşletmenizi daha erişilebilir ve etkili hale getirin.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700">Sıkça Sorulan Sorular</h2>
          <p className="text-gray-600 mt-2">
            QR menü nasıl çalışır? Güvenli midir? Detaylar için SSS sayfamıza göz atın.
          </p>
          <Button variant="default" className="mt-4">Daha Fazla Bilgi</Button>
        </div>

        <div className="p-6 bg-white shadow rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700">İletişim</h2>
          <p className="text-gray-600 mt-2">
            Sorularınız mı var? Bizimle iletişime geçin ve daha fazla bilgi alın.
          </p>
        </div>
      </section>
    </main>
  );
}
