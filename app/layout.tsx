import type { Metadata } from "next";
import { Fraunces, Urbanist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shajlane — B2B Beauty Distribution",
  description:
    "Shajlane helps retailers, salons, pharmacies, and online sellers source authentic beauty and cosmetic products with efficient logistics and technology-driven operations.",
  metadataBase: new URL("https://shajlane.example"),
  openGraph: {
    title: "Shajlane — B2B Beauty Distribution",
    description:
      "Authentic products, verified suppliers, and wholesale advantage—built for professional beauty businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shajlane — B2B Beauty Distribution",
    description:
      "Authentic products, verified suppliers, and wholesale advantage—built for professional beauty businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}