import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { UtilityBar } from "./components/UtilityBar";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Genset Tech, Inc. | Generator Sales, Service & Maintenance",
    template: "%s | Genset Tech, Inc.",
  },
  description:
    "Generator sales, service, preventative maintenance, inspections, repairs, fuel samples, oil samples, and load-bank support in Cross Plains and Canaan, Indiana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <UtilityBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
