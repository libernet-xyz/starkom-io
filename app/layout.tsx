import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starkom",
  description:
    "Starkom is a quantum-resistant, recursive zkSTARK engine and the cryptographic backbone of Libernet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex max-w-3xl flex-col px-6 py-16">
          {children}
        </div>
      </body>
    </html>
  );
}
