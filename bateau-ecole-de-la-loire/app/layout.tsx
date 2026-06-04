import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Bateau Ecole de la Loire – Permis bateau Nantes",
  description:
    "Permis bateau Nantes, mer et fluvial. Bateau Ecole de la Loire vous propose les meilleurs tarifs pour votre permis bateau côtier, hauturier et eaux intérieures.",
  keywords: ["permis bateau", "Nantes", "mer", "fluvial", "côtier", "hauturier"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
