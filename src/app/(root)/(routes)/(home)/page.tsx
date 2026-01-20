import {Banknote, Building2, Check, ExternalLink, Globe, Paintbrush} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import currencyService from "@/services/currency.service";
import languageService from "@/services/language.service";
import subscriptionService from "@/services/subscription.service";
import {PricingSection} from "@/components/pricing/pricing-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const dynamic = "force-dynamic";

const faqs = [
  {
    question: `What is ${process.env.NEXT_PUBLIC_APP_NAME}?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} is a platform that allows you to create digital QR menus for restaurants and cafes. You can easily create your menus, and display them in different languages with multi-language support.`,
  },
  {
    question: `How does ${process.env.NEXT_PUBLIC_APP_NAME} work?`,
    answer:
      "After adding your business to the system, you can edit your menus. Our platform delivers your menus to customers through QR codes. Customers can directly access the menu by scanning the QR code.",
  },
  {
    question: `What are the advantages of ${process.env.NEXT_PUBLIC_APP_NAME}?`,
    answer:
      "Fast menu updates, multi-language and currency support, clean and user-friendly interface, and eliminating paper menu expenses are some of the advantages.",
  },
  {
    question: `Which businesses can use ${process.env.NEXT_PUBLIC_APP_NAME}?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} is suitable for restaurants, cafes, bars, hotels, and all food and beverage service providers.`,
  },
  {
    question: "How are QR codes created?",
    answer: `QR codes are automatically created through the ${process.env.NEXT_PUBLIC_APP_NAME} panel after adding your business. Changes in the menu do not affect the QR code.`,
  },
  {
    question: `${process.env.NEXT_PUBLIC_APP_NAME} QR codes look like in different languages?`,
    answer:
      "Our platform supports multi-language. Customers can view the menu in the appropriate language based on their browser or device settings.",
  },
  {
    question: "What information is included after scanning the QR code?",
    answer:
      "After scanning the QR code, the browser redirects to a page containing menu headers, product descriptions, price information, and language options.",
  },
  {
    question: "Can I add images to my menu?",
    answer: `Yes, you can add images to your menu items through the ${process.env.NEXT_PUBLIC_APP_NAME} dashboard.`,
  },
  {
    question: "How can I know if my QR code is not working?",
    answer:
      "If a QR code is not working, our system sends you an alert. You can also test the QR code links through the dashboard.",
  },
  {
    question: `What are the prices of ${process.env.NEXT_PUBLIC_APP_NAME}?`,
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} offers subscription plans to access all features. Check our pricing section for available plans.`,
  },
  {
    question: "Is my data secure?",
    answer: `Yes, ${process.env.NEXT_PUBLIC_APP_NAME} stores your personal data in compliance with GDPR and KVKK. Your data is encrypted and stored securely on our servers.`,
  },
  {
    question: "Can your system work offline?",
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} is a completely online platform. However, customers can cache the menu page after scanning the QR code, and view the content even in case of connection problems.`,
  },
  {
    question: "What devices can customers view the QR menu on?",
    answer: `${process.env.NEXT_PUBLIC_APP_NAME} QR menus can be viewed on any device with an internet browser (smartphone, tablet, computer).`,
  },
  {
    question: "Do I need a special printer to print QR codes?",
    answer:
      "No, you can print your QR codes with a standard printer. You can use them on menus, table cards, or wall posters.",
  },
];

const demoTenantId = "6777e577b0e405883d397d0a";

export default async function HomePage() {
  const [{data: currencies}, {data: languages}, {data: products}] = await Promise.all([
    currencyService.getAll().catch(() => ({data: []})),
    languageService.getAll().catch(() => ({data: []})),
    subscriptionService.getPlans().catch(() => ({data: []})),
  ]);

  return (
    <>
      <section className="py-16">
        <div className="container text-center">
          <p className="text-lg mb-3 text-primary-foreground/80">
            Create <b>QR Menu</b> for your business
          </p>
          <h1 className="text-5xl font-bold mb-4">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
          <p className="text-xl mb-12">
            Meet the <b>QR Menu</b> creator, fast, reliable, and user-friendly
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Building2 />
              </div>
              <span className="font-semibold block">Custom website for your business</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Banknote />
              </div>
              <span className="font-semibold block">Multi-currency support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Globe />
              </div>
              <div>
                <span className="font-semibold block">Multi-language support</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Paintbrush />
              </div>
              <div>
                <span className="font-semibold block">Multi-font/theme support</span>
              </div>
            </div>
          </div>

          <Button asChild className="animate-bounce" size={"lg"} variant={"default"}>
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`} target="_blank">
              Start using now <ExternalLink />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Demo QR Menu</h2>
          <div className="flex justify-center mb-6">
            <img
              alt="Demo QR Code"
              className="w-40 h-40"
              src={`https://cdn.lumodine.com/${demoTenantId}/q/9b7b575f400b58c023dc8890bd541b8824f6b8ab615bfc408afc193212238a09.png`}
            />
          </div>
          <Button asChild size={"lg"} variant={"default"}>
            <Link
              href={`${process.env.NEXT_PUBLIC_QR_URL?.replaceAll("{id}", demoTenantId)}/?event=click-link`}
              target="_blank"
            >
              View Demo QR Menu <ExternalLink />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                  <Globe />
                </div>
                <h3 className="text-2xl font-bold">Multi-language support</h3>
              </div>
              <p className="text-lg mb-6">
                Display your menu in <b>{languages.length}</b> languages to provide convenience for
                international customers:
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
                <h3 className="text-2xl font-bold">Multi-currency support</h3>
              </div>
              <p className="text-lg mb-6">
                <b>{currencies.length}</b> currency support for global payment solutions:
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

      <PricingSection products={products || []} />

      <section className="bg-primary/10 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
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
    </>
  );
}
