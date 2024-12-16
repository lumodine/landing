import {Banknote, Building2, Check, ExternalLink, Globe, Paintbrush} from "lucide-react";
import Link from "next/link";
import {BuyMeACoffeeButton} from "@/components/common/buy-me-a-coffee-button";
import {Button} from "@/components/ui/button";
import currencyService from "@/services/currency.service";
import languageService from "@/services/language.service";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME} nedir?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME}, restoranlar ve kafeler için dijital QR menü oluşturmanızı sağlayan bir platformdur. Menülerinizi hızlı ve kolay bir şekilde oluşturabilir, çoklu dil desteği ile müşterilerinize farklı dillerde sunabilirsiniz.`,
  },
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME} nasıl çalışır?`,
    answer:
      "Sisteme işletmenizi ekledikten sonra menülerinizi düzenlersiniz. Platformumuz, menülerinizi QR kodlar aracılığıyla müşterilere ulaştırır. Müşteriler QR kodu tarayarak doğrudan menüye erişebilirler.",
  },
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME}’in avantajları nelerdir?`,
    answer:
      "Menülerin hızlıca güncellenmesi, çoklu dil ve para birimi desteği, temiz ve kullanıcı dostu arayüz, kağıt menü masraflarını ortadan kaldırması gibi avantajları vardır.",
  },
  {
    question: `Hangi işletmeler ${process.env.NEXT_PUBLIC_APP_NAME} kullanabilir?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME}, restoranlar, kafeler, barlar, oteller ve tüm yiyecek-içecek hizmeti sunan işletmeler için uygundur.`,
  },
  {
    question: "QR kodlar nasıl oluşturulur?",
    answer:
      "QR kodlar, işletmenizi ekledikten sonra ${process.env.NEXT_PUBLIC_APP_NAME} panelinden otomatik olarak oluşturulur. Menüdeki değişiklikler QR kodu etkilemez.",
  },
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME} QR kodları başka bir dilde nasıl görünür?`,
    answer:
      "Platformumuz çoklu dil desteği sunar. Müşteriler, tarayıcı veya cihaz ayarlarına göre menüyü uygun dilde görüntüleyebilir.",
  },
  {
    question: "QR kod tarama sonrası hangi bilgileri içerir?",
    answer:
      "Tarayıcı QR kodu taradıktan sonra, menü başlıkları, ürün açıklamaları, fiyat bilgileri ve dil seçenekleri gibi bilgileri içeren bir sayfaya yönlendirilir.",
  },
  {
    question: "Menüme resim ekleyebilir miyim?",
    answer: `Evet, ${process.env.NEXT_PUBLIC_APP_NAME} dashboard’u üzerinden menü öğelerinize resim ekleyebilirsiniz.`,
  },
  {
    question: "QR kodumun çalışmadığını nasıl anlayabilirim?",
    answer:
      "Eğer bir QR kod çalışmıyorsa, sistemimiz size bir uyarı gönderir. Ayrıca dashboard üzerinden QR kod bağlantılarını test edebilirsiniz.",
  },
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME}’in fiyatları nelerdir?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} tamamen ücretsiz bir projedir. Sadece bu projenin gelişmesini ve devam etmesini istiyorsanız projeyi destekleyebilirsiniz.`,
  },
  {
    question: "Sorun yaşadığımda nasıl destek alabilirim?",
    answer:
      "Herhangi bir sorunla karşılaşırsanız, iletişim sayfamız üzerinden bizimle iletişime geçebilirsiniz. Destek ekibimiz size en kısa sürede yardımcı olacaktır.",
  },
  {
    question: "Verilerim güvende mi?",
    answer: `Evet, ${process.env.NEXT_PUBLIC_APP_NAME} kişisel verilerinizi GDPR ve KVKK uyumluluğuna uygun olarak saklar. Verileriniz şifrelenir ve güvenli sunucularda korunur.`,
  },
  {
    question: "Sisteminiz çevrimdışı çalışabilir mi?",
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} tamamen çevrimiçi çalışan bir platformdur. Ancak müşteriler QR kodu taradıktan sonra menü sayfasını önbelleğe alabilir ve bağlantı sorunlarında bile içeriği görüntüleyebilir.`,
  },
  {
    question: `Birden fazla şubem var, ${process.env.NEXT_PUBLIC_APP_NAME} kullanabilir miyim?`,
    answer:
      "Evet, çoklu şube desteğimiz sayesinde her şubeniz için ayrı menüler oluşturabilirsiniz.",
  },
  {
    question: "Kendi özel dilimi ekleyebilir miyim?",
    answer: `Evet, ${process.env.NEXT_PUBLIC_APP_NAME} özel dil ekleme özelliğini destekler. İhtiyaçlarınıza uygun bir dil oluşturabilir ve menü içeriğinizi bu dilde sunabilirsiniz.`,
  },
  {
    question: "Müşteriler hangi cihazlarda QR menüyü görüntüleyebilir?",
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} QR menüleri, internet tarayıcısına sahip herhangi bir cihazda (akıllı telefon, tablet, bilgisayar) görüntülenebilir.`,
  },
  {
    question: "QR kodları yazdırmak için özel bir yazıcı gerekli mi?",
    answer:
      "Hayır, QR kodlarınızı standart bir yazıcı ile yazdırabilirsiniz. Kodlarınızı menüler, masa kartları veya duvar afişleri üzerinde kullanabilirsiniz.",
  },
];

export default async function HomePage() {
  const [{data: currencies}, {data: languages}] = await Promise.all([
    currencyService.getAll(),
    languageService.getAll(),
  ]);

  return (
    <>
      <section className="py-16">
        <div className="container text-center">
          <p className="text-lg mb-3 text-primary-foreground/80">
            İşletmeniz için <b>QR Menü</b> oluşturun
          </p>
          <h1 className="text-5xl font-bold mb-4">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
          <p className="text-xl mb-12">
            Hızlı, güvenilir ve kullanıcı dostu QR Menü oluşturucu ile tanışın
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Building2 />
              </div>
              <span className="font-semibold block">İşletmenize özel web sitesi</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Banknote />
              </div>
              <span className="font-semibold block">Çoklu para birimi desteği</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Globe />
              </div>
              <div>
                <span className="font-semibold block">Çoklu dil desteği</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Paintbrush />
              </div>
              <div>
                <span className="font-semibold block">Çoklu yazı tipi/tema desteği</span>
              </div>
            </div>
          </div>

          <Button asChild className="animate-bounce" size={"lg"} variant={"default"}>
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`} target="_blank">
              Hemen kullanmaya başla <ExternalLink />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                  <Globe />
                </div>
                <h3 className="text-2xl font-bold">Çoklu Dil Desteği</h3>
              </div>
              <p className="text-lg mb-6">
                Menünüzü <b>{languages.length}</b> dilde sunarak uluslararası müşterilerinize
                kolaylık sağlayın:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {languages.map((language: any, languageIndex: number) => (
                  <li key={languageIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" /> {language.name} -{" "}
                    {language.shortName}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                  <Banknote />
                </div>
                <h3 className="text-2xl font-bold">Çoklu Para Birimi</h3>
              </div>
              <p className="text-lg mb-6">
                <b>{currencies.length}</b> para birimi desteğiyle global ödeme çözümleri:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {currencies.map((currency: any, currencyIndex: number) => (
                  <li key={currencyIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" /> {currency.code} - {currency.symbol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Sıkça sorulan sorular</h2>
          <Accordion className="w-full" type="multiple">
            {faqs.map((faq: any, faqIndex: number) => (
              <AccordionItem key={faqIndex} value={faqIndex.toString()}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container text-center">
          <h3 className="text-2xl font-bold mb-4">Projeyi desteklemek ister misiniz?</h3>
          <BuyMeACoffeeButton />
        </div>
      </section>
    </>
  );
}
