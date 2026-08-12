import type { Metadata } from "next";
import { Inter, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const stackSansHeadline = Stack_Sans_Headline({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stack-sans-headline",
});

export const metadata: Metadata = {
  title: "Starkom — Quantum Resistant zkSTARK Engine",
  description:
    "Starkom is a cutting-edge, quantum-resistant, natively recursive zkSTARK engine, and the cryptographic backbone of Libernet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${stackSansHeadline.variable} h-full antialiased`}
    >
      <body className="bg-starkom-bg text-starkom-ink font-sans flex min-h-full flex-col overflow-x-hidden font-light">
        {children}
      </body>
    </html>
  );
}
