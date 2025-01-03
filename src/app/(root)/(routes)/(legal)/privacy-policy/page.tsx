import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p>
            As {process.env.NEXT_PUBLIC_APP_NAME}, we prioritize the privacy of our users. This
            privacy policy explains how your personal data is collected, used, and protected.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Collection of Personal Data</h2>
          <p>
            When you use our platform, your personal data such as your name, email address, and IP
            address may be collected. These data are used to provide and improve our services.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Use of Data</h2>
          <p>
            Collected data is used to improve our services, enhance user experience, and fulfill
            legal obligations. Your data is not shared with third parties without your permission.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Protection of Data</h2>
          <p>
            We take necessary technical and administrative measures to ensure the security of your
            personal data. However, we cannot guarantee the complete security of data transmitted
            over the internet.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            You have the right to access, correct, delete, and limit processing of your personal
            data. You can contact us to exercise these rights.
          </p>
        </div>
      </section>
    </main>
  );
}
