export default function CookiePolicyPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p>
            As {process.env.NEXT_PUBLIC_APP_NAME}, we use cookies to enhance user experience. This
            cookie policy explains how cookies are used and managed.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">What are Cookies?</h2>
          <p>
            Cookies are small text files placed on your browser by the websites you visit. These
            files are used to ensure the proper functioning of the site or to provide a more
            efficient experience.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Types of Cookies Used</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Session Cookies:</strong> Required for the site to function properly and are
              deleted when you close your browser.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> Used to remember your preferences and improve
              future visits.
            </li>
            <li>
              <strong>Analytic Cookies:</strong> Help us understand how the site is used and improve
              performance.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to serve relevant ads to your interests.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Use of Cookies</h2>
          <p>
            Cookies are used to enhance user experience, improve site performance, and provide more
            personalized services. The data collected through cookies can be anonymized and shared
            with third parties.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Management of Cookies</h2>
          <p>
            You can manage your cookie preferences through your browser settings. You can disable or
            delete cookies. However, disabling certain cookies may affect the proper functioning of
            certain features of our site.
          </p>
        </div>
      </section>
    </main>
  );
}
