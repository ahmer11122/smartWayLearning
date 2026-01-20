import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Gulzar } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const gulzar = Gulzar({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Forex Learning Hub",
  description: "Premium bilingual financial education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${gulzar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
