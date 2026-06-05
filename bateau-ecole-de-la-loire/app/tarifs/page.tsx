import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PricingLegend from "@/components/tarifs/PricingLegend";
import PricingGrid from "@/components/tarifs/PricingGrid";
import TarifsInfoPanel from "@/components/tarifs/TarifsInfoPanel";

export const metadata: Metadata = {
  title: "Formules & Tarifs – Permis Bateau | Bateau Ecole de la Loire",
  description:
    "Découvrez toutes nos formules et tarifs pour le permis bateau côtier, hauturier et fluvial à Nantes. Formation traditionnelle ou en autonomie, à partir de 100 €.",
  keywords: ["tarifs permis bateau", "prix permis bateau", "côtier", "hauturier", "fluvial", "Nantes"],
};

export default function TarifsPage() {
  return (
    <main>
      <PageHero
        title="Formules & Tarifs"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formules & tarifs" },
        ]}
      />

      <PricingLegend />

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Nos formules
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Choisissez votre permis</h2>
            <p className="mt-2 text-slate-500 text-sm">
              Tous nos prix incluent l&apos;e-learning et l&apos;inscription à l&apos;examen.
              Des questions ?{" "}
              <a
                href="mailto:bateauecoledelaloire@gmail.com"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Contactez-nous
              </a>
              .
            </p>
          </div>
          <PricingGrid />
        </Container>
      </section>

      <TarifsInfoPanel />
    </main>
  );
}
