import Link from "next/link";
import socialMedias from "@/constants/socialMedias";

export const Footer = () => {
  const startYear = 2024;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const year = startYear === currentYear ? startYear : `${startYear}-${currentYear}`;

  return (
    <footer className="py-12 bg-primary/5">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="flex gap-2 items-center justify-center">
          {socialMedias.map((socialMedia: any, socialMediaIndex: number) => (
            <Link
              key={socialMediaIndex}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-95"
              href={socialMedia.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <socialMedia.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center text-xs">
          <Link className="inline-flex items-center gap-1 hover:underline" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <span>&#x2022;</span>
          <Link className="inline-flex items-center gap-1 hover:underline" href={"/cookie-policy"}>
            Cookie Policy
          </Link>
          <span>&#x2022;</span>
          <Link
            className="inline-flex items-center gap-1 hover:underline"
            href={"/terms-and-conditions"}
          >
            Terms and Conditions
          </Link>
        </div>
        <p className="text-xs">
          &copy; {year} &#x2022;{" "}
          <Link className="underline" href={process.env.NEXT_PUBLIC_LANDING_URL!} target="_blank">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>{" "}
          &#x2022; All rights reserved
        </p>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
