"use client";

import Image from "next/image";
import Link from "next/link";
import {ExternalLink, Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export const Header = () => {
  return (
    <header className="flex w-full shrink-0 items-center py-4 sticky top-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between">
        <div>
          <Link className="flex gap-2 items-center" href={"/"}>
            <Image
              alt={`${process.env.NEXT_PUBLIC_APP_NAME} logo`}
              className="h-full"
              height={50}
              loading="lazy"
              src="https://cdn.lumodine.com/public/logo.jpg?v=1"
              width={50}
            />
            <b className="hidden sm:block">{process.env.NEXT_PUBLIC_APP_NAME}</b>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link className="hover:underline" href={"/"}>
            Home
          </Link>
          <Link className="hover:underline" href={"/about-us"}>
            About Us
          </Link>
        </div>

        <div className="hidden md:flex gap-2 items-center">
          <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL!} target="_blank">
            <Button size={"sm"} variant={"outline"}>
              Sign In <ExternalLink className="ml-1" />
            </Button>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`} target="_blank">
            <Button size={"sm"}>
              Sign Up <ExternalLink className="ml-1" />
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="p-2" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48">
              <nav className="flex flex-col gap-2">
                <Link className="hover:underline" href={"/"}>
                  Home
                </Link>
                <Link className="hover:underline" href={"/about-us"}>
                  About Us
                </Link>
                <Link
                  className="flex items-center gap-1 hover:underline"
                  href={process.env.NEXT_PUBLIC_DASHBOARD_URL!}
                  target="_blank"
                >
                  Sign In <ExternalLink size={14} />
                </Link>
                <Link
                  className="flex items-center gap-1 hover:underline"
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`}
                  target="_blank"
                >
                  Sign Up <ExternalLink size={14} />
                </Link>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};
Header.displayName = "Header";
