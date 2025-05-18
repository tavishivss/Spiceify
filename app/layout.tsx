import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Bhumi Ratan Harbal",
  description:
    "Explore the world of authentic spices with Dev Bhumi Ratan Harbal. Our collection features a diverse range of handpicked, premium-quality spices sourced directly from the lush landscapes of India. Dive into a universe of rich flavors and aromas, perfect for culinary enthusiasts and professional chefs alike. From exotic turmeric and fragrant cardamom to robust cumin and fiery chili, each spice is carefully selected to bring the freshest, most authentic taste to your kitchen. Join us in a journey that celebrates traditional spice craftsmanship blended with modern culinary innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
