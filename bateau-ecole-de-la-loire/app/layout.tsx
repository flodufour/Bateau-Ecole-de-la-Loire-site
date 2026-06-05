import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/components/cart/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bateauecoledelaloire.fr"
  ),
  title: "Bateau Ecole de la Loire – Permis bateau Nantes",
  description:
    "Permis bateau Nantes, mer et fluvial. Bateau Ecole de la Loire vous propose les meilleurs tarifs pour votre permis bateau côtier, hauturier et eaux intérieures.",
  keywords: ["permis bateau", "Nantes", "mer", "fluvial", "côtier", "hauturier"],
  openGraph: {
    title: "Bateau Ecole de la Loire – Permis bateau Nantes",
    description:
      "Permis bateau Nantes, mer et fluvial. Formation côtier, hauturier et eaux intérieures — les meilleurs tarifs à Nantes.",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/cotier.jpg",
        width: 1200,
        height: 630,
        alt: "Permis bateau Nantes – Bateau Ecole de la Loire",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
