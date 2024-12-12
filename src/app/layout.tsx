import {Suspense} from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr-TR">
      <head>
        <link href="https://cdn.lumodine.com/public/theme.css" rel="stylesheet" />
      </head>
      <body className="theme-yellow">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
