import React, {Suspense} from "react";
import "./globals.css";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "https://cdn.lumodine.com/public/favicon.ico?v=1",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "https://cdn.lumodine.com/public/favicon.ico?v=1",
    },
  ],
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link href="https://cdn.lumodine.com/public/theme.css" rel="stylesheet" />
      </head>
      <body className="theme-yellow">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
