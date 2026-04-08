import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Fab from "../components/common/Fab";

export const metadata: Metadata = {
  title: "Bouillon Baron | Food & Drinks",
  description: "All Food landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
        <Fab />
      </body>
    </html>
  );
}
