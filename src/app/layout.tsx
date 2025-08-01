import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/components/Navbar"


export const metadata: Metadata = {
  title: "Iphone-CloneLandingPage",
  description: "Iphone landing page clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
