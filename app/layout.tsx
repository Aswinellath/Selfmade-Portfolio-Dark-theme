import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASWIN E | QA Engineer | Automation | Playwright",
  description: "QA Engineer with 3+ years experience in automation testing using Playwright, Selenium, CI/CD pipelines and backend validation.",
  keywords: [
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "SDET",
    "Selenium",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
