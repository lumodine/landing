import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="py-12 space-y-12">
      <section className="text-center">
        <div className="container space-y-4">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p>
            Please read these terms and conditions carefully before using our platform. By using our
            platform, you agree to these terms.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You commit to providing accurate and up-to-date information to the platform.</li>
            <li>You cannot use our services for unlawful purposes.</li>
            <li>You must not violate the rights of other users while using the platform.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">
            {process.env.NEXT_PUBLIC_APP_NAME}’s Responsibilities and Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do our best to ensure the platform runs continuously and without interruptions, but
              technical issues may cause service interruptions.
            </li>
            <li>
              We take necessary measures to ensure the security of the data provided by users.
            </li>
            <li>We are not responsible for issues arising from third-party connections.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property Rights</h2>
          <p>
            All content, design, logo, and other materials on the platform are owned by{" "}
            {process.env.NEXT_PUBLIC_APP_NAME}. They cannot be copied, distributed, or used for
            commercial purposes without permission.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Liability Disclaimer</h2>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME} is not responsible for content created by users. In
            case of misuse of the platform, the legal responsibility is entirely with the user.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-4">
          <h2 className="text-2xl font-semibold">Change of Terms</h2>
          <p>
            {process.env.NEXT_PUBLIC_APP_NAME} reserves the right to modify these terms and
            conditions without prior notice. Users are responsible for regularly checking this page.
          </p>
        </div>
      </section>
    </main>
  );
}
