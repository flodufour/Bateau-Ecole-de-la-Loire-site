import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ExamProcess from "@/components/examens/ExamProcess";
import ExamBooking from "@/components/examens/ExamBooking";

export const metadata: Metadata = {
  title: "Examens – Permis Bateau | Bateau Ecole de la Loire",
  description:
    "Examens du permis bateau disponibles tous les jours dans toute la France. Centres La Poste et centres agréés. Inscrivez-vous via l'école ou en candidat libre.",
};

export default function ExamensPage() {
  return (
    <main>
      <PageHero
        title="Examens"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Examens" },
        ]}
      />

      {/* Comment se déroule l'examen */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Le déroulement
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Comment se passe l&apos;examen ?
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              L&apos;examen du permis bateau se compose d&apos;une épreuve théorique et d&apos;une épreuve pratique sur l&apos;eau. Le hauturier est une extension théorique uniquement.
            </p>
          </div>
          <ExamProcess />
        </Container>
      </section>

      {/* Réserver */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Réservation
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Comment réserver votre examen ?
            </h2>
            <p className="text-slate-500 text-sm">
              Deux options selon votre situation : via l&apos;école (nous gérons tout) ou en candidat libre directement auprès d&apos;un centre agréé.
            </p>
          </div>
          <ExamBooking />
        </Container>
      </section>

      {/* Note bas de page */}
      <section className="bg-blue-950 py-10">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold mb-1">Une question sur votre examen ?</p>
              <p className="text-blue-300 text-sm">
                Contactez-nous par mail ou téléphone, nous vous guidons selon votre situation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-blue-950 font-semibold px-5 py-2.5 text-sm hover:bg-blue-50 transition-colors"
              >
                Nous contacter
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-blue-700 text-blue-100 font-semibold px-5 py-2.5 text-sm hover:bg-blue-900 transition-colors"
              >
                Page contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
