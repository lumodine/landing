"use client";

import Image from "next/image";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex w-full shrink-0 items-center py-4">
      <nav className="container flex items-center justify-between overflow-hidden">
        <div>
          <Link className="flex gap-2 items-center justify-center" href={"/"}>
            <Image
              alt={`${process.env.NEXT_PUBLIC_APP_NAME} logo`}
              className="rounded-full h-full"
              height={50}
              loading="lazy"
              src="https://cdn.lumodine.com/public/logo.jpg"
              width={50}
            />
            <b>{process.env.NEXT_PUBLIC_APP_NAME}</b>
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL!} target="_blank">
            <Button size={"sm"} variant={"outline"}>
              Giriş yap <ExternalLink />
            </Button>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`} target="_blank">
            <Button size={"sm"}>
              Kayıt ol <ExternalLink />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
Header.displayName = "Header";
