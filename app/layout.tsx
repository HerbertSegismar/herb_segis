"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { BackgroundBeamsWithCollision } from "./_components/BgBeams";
import { BackgroundLines } from "./_components/BgLines";
import { BackgroundGradientAnimation } from "./_components/BgGradient";
import { ParticlesContainer } from "./_components/BgWeb";
import { Vortex2 } from './_components/Vortex2'
import { useState } from "react";
import { metadata } from './metadata';
import SideBar from "./_components/SideBar";
<<<<<<< HEAD


=======
>>>>>>> 3c7b3a16cd443406f3a5f7efcc031217b21537af
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
<<<<<<< HEAD
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "")}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex antialiased overflow-x-hidden`}
      >
        <Header />
        <div className="absolute -z-50 overflow-hidden">
=======
  
      <html lang="en">
        <head>
          <title>{String(metadata.title ?? "")}</title>
          <meta name="description" content={metadata.description ?? ""} />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        >
          <Header />
>>>>>>> 3c7b3a16cd443406f3a5f7efcc031217b21537af
          {bgStyle === "lines" ? (
            <BackgroundLines>{children}</BackgroundLines>
          ) : bgStyle === "gradient" ? (
            <BackgroundGradientAnimation>
              {children}
            </BackgroundGradientAnimation>
          ) : bgStyle === "beams" ? (
            <BackgroundBeamsWithCollision>
              {children}
            </BackgroundBeamsWithCollision>
          ) : bgStyle === "webs" ? (
            <ParticlesContainer>{children}</ParticlesContainer>
          ) : bgStyle === "vortex" ? (
            <Vortex2>{children}</Vortex2>
          ) : (
            <BackgroundLines>{children}</BackgroundLines>
          )}
        </div>

<<<<<<< HEAD
        <div className="absolute w-screen h-10 bg-black top-[100vh] left-0 text-white flex items-center justify-center">
          <Footer />
        </div>
        <SideBar handleBgChange={handleBgChange} />
      </body>
    </html>
=======
          <div className="w-screen h-10 bg-black relative bottom-0 left-0 text-white flex items-center justify-center">
            <Footer />
          </div>
          <SideBar handleBgChange={handleBgChange} />
        </body>
      </html>
    
>>>>>>> 3c7b3a16cd443406f3a5f7efcc031217b21537af
  );
}
