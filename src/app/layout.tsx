import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Gulzar, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Smart Way Learning Institute",
  description: "Master forex trading with our bilingual curriculum in English and Urdu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${gulzar.variable} ${playfair.variable} antialiased bg-bg-APP text-text-PRIMARY min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
