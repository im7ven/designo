import type { Metadata } from "next";

import { Jost } from "next/font/google";

import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
});

Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
