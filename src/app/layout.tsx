import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manisa Nayak | AI Builder & Full Stack Developer",
  description: "I build intelligent, beautiful, and impactful digital experiences using modern technologies and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans relative" suppressHydrationWarning>
        <div className="ambient-glow top-0 left-0"></div>
        <div className="ambient-glow-gold bottom-0 right-0"></div>
        {children}
      </body>
    </html>
  );
}
