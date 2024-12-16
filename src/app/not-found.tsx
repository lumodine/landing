import {Metadata} from "next";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: "noindex, nofollow",
};

export default function NotFoundPage() {
  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-4xl">Page Not Found!</h1>

        <p className="my-4">Sorry, we couldn&apos;t find the page you were looking for.</p>

        <Link href={"/"}>
          <Button variant={"default"}>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
