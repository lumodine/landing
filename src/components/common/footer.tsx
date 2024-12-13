import {ExternalLink} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const startYear = 2024;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const year = startYear === currentYear ? startYear : `${startYear}-${currentYear}`;

  return (
    <footer className="my-12">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="flex gap-2 items-center justify-center">
          <Link
            className="text-xs inline-flex items-center gap-1 hover:underline"
            href={"/privacy-policy"}
            target="_blank"
          >
            Gizlilik Politikası <ExternalLink className="w-3 h-3" />
          </Link>
          <Link
            className="text-xs inline-flex items-center gap-1 hover:underline"
            href={"/cookie-policy"}
            target="_blank"
          >
            Çerez Politikası <ExternalLink className="w-3 h-3" />
          </Link>
          <Link
            className="text-xs inline-flex items-center gap-1 hover:underline"
            href={"/terms-of-service"}
            target="_blank"
          >
            Kullanım Şartları <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
        <p className="text-xs">
          &copy; {year} &#x2022;{" "}
          <Link className="underline" href={process.env.NEXT_PUBLIC_LANDING_URL!} target="_blank">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>{" "}
          &#x2022; Tüm hakları saklıdır
        </p>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
