"use client";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { Inter } from "next/font/google";
import { Geist_Sans } from "next/font/google";
import Navbar from "@/components/Includes/Navbar";
import Footer from "@/components/Includes/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ned Mwanza | Portfolio",
  description: "Software Developer Portfolio showcasing projects and skills",
  icons: {
    icon: "/icon.png",        // default icon
    shortcut: "/icon.png",    // for shortcut links
    apple: "/icon.png",       // for Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
