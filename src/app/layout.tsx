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

export const metadata: Metadata = {
  title: "Audio Practices — закрытая тестовая версия",
  description:
    "Небольшая библиотека аудиопрактик для внимания к телу, мягкого движения и коротких пауз в течение дня.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Audio Practices — закрытая тестовая версия",
    description:
      "Аудиопрактики для прогулки, работы сидя, короткой паузы и спокойного восстановления.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
