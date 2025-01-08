"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { useState } from "react";
import { metadata } from "./metadata";
import BgSetter from "./_components/BgSetter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bgStyle, setBgStyle] = useState("lines");

  const handleBgChange = (style: string) => {
    setBgStyle(style);
  };

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "")}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="w-screen h-screen container flex flex-col">
          <header className="absolute top-0 left-0 z-50 flex flex-1">
            <Header />
          </header>
          <div className="absolute top-56 left-0"><BgSetter/></div>
          <div className="~mt-24/64 ~pb-12/24">{children}</div>
          <footer className="fixed mt-10 flex w-screen text-white items-center justify-center bg-black h-10 left-0 bottom-0">
            © herb segis 2025
          </footer>
        </div>
      </body>
    </html>
  );
}
