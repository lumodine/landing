import {BuyMeACoffeeButton} from "@/components/common/buy-me-a-coffee-button";

export default function AboutUsPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Grow Your Business with Digitalization</h1>
          <p>
            We provide a modern solution for restaurants and cafes!{" "}
            {process.env.NEXT_PUBLIC_APP_NAME}, we aim to provide a better experience for both
            customers and business owners by digitalizing their menus.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p>
            Strengthen businesses with technology, meet customer needs, and provide a seamless
            experience for both parties.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p>
            To become a global platform that makes QR menu usage standard in businesses around the
            world.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Innovation:</strong> We always strive to provide the latest technologies.
            </li>
            <li>
              <strong>User Focus:</strong> Understanding and providing solutions to our users&apos;
              needs is our first priority.
            </li>
            <li>
              <strong>Environmental Awareness:</strong> We work to reduce paper usage to create a
              more sustainable world.
            </li>
            <li>
              <strong>Ease of Use:</strong> We provide a simple and effective solution that is easy
              for everyone to use.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME}, the digitalization need in the restaurant industry
            was identified by a team. The platform we launched in 2024 quickly became a solution
            that met the needs of business owners and attracted attention as a user-friendly
            solution. Today, hundreds of businesses in dozens of countries use{" "}
            {process.env.NEXT_PUBLIC_APP_NAME} to provide a modern experience for their customers.
          </p>
          <BuyMeACoffeeButton />
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Why {process.env.NEXT_PUBLIC_APP_NAME}?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Easy to Use:</strong> Our user-friendly interface allows you to create your
              menu in minutes.
            </li>
            <li>
              <strong>Multi-Language Support:</strong> Our platform supports multiple languages,
              making it easier for your business to reach global customers.
            </li>
            <li>
              <strong>Quick Updates:</strong> You can make menu changes instantly without changing
              your QR code.
            </li>
            <li>
              <strong>Comprehensive Analytics:</strong> You can track customer interactions and
              improve your business performance.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
