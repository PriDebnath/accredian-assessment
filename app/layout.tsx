import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Accredian"
const description = "https://enterprise.accredian.com/"

export const metadata: Metadata = {
  title,
  description,
  authors: {
    name: "Pritam Debnath",
    url: "https://github.com/PriDebnath/portfolio-v2"
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://raw.githubusercontent.com/PriDebnath/accredian-assessment/refs/heads/main/public/images/app-demo-desktop.png",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
