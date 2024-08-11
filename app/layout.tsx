import type { Metadata } from "next";

import { Jost } from "next/font/google";

import "./globals.css";
import Navbar from "./components/shared/Navbar";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designo",
  description: "Multi-page design company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-32x32.png" />
      <body className={jost.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
