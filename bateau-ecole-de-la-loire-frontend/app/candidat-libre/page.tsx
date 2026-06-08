import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PermitUpgradeOptions from "@/components/candidat-libre/PermitUpgradeOptions";
import DossierProcess from "@/components/candidat-libre/DossierProcess";
import CitiesCarousel from "@/components/candidat-libre/CitiesCarousel";
import DocumentsCard from "@/components/candidat-libre/DocumentsCard";

export const metadata: Metadata = {
  title: "Candidat Libre – Permis Bateau en Autonomie | Bateau Ecole de la Loire",
  description:
    "Obtenez une option du permis bateau en candidat libre et en autonomie partout en France. Côtier, fluvial, hauturier – kit complet envoyé à domicile. Bateau Ecole de la Loire, Nantes.",
  keywords: ["candidat libre", "permis bateau autonomie", "hauturier", "fluvial", "côtier", "Nantes"],
};

export default function CandidatLibrePage() {
  return (
    <main>
      <PageHero
        title="Permis Bateau Candidat Libre"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Candidat Libre" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Permis bateau en autonomie
                </p>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  Obtenez votre permis en 15 jours, partout en France
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Vous souhaitez obtenir une option du permis bateau en 15 jours ? Ces offres clés en main à tout petits prix sont faites pour vous — disponibles dans toute la France.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pour les personnes pouvant se déplacer sur Nantes, il est également possible de passer votre premier permis bateau en formation traditionnelle sur plusieurs soirées, en weekend, ou sur une à deux journées.
              </p>
              <div className="rounded-xl bg-amber-50 border border-amber-200 px-5 py-4 flex items-start gap-3">
                <AlertIcon />
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>À qui s&apos;adressent ces offres ?</strong><br />
                  Ces prestations en autonomie ou candidat libre s&apos;adressent <strong>uniquement aux personnes déjà titulaires d&apos;un permis bateau</strong> (côtier, hauturier ou eaux intérieures).
                </p>
              </div>
              <p className="text-sm text-slate-500">
                Pour plus d&apos;informations :{" "}
                <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                  contactez-nous
                </Link>
              </p>
            </div>

            <PermitUpgradeOptions />
          </div>
        </Container>
      </section>

      {/* How to apply */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Comment procéder
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Inscrivez-vous en 2 étapes</h2>
          </div>
          <DossierProcess />
        </Container>
      </section>

      {/* Cities */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Centres d&apos;examen
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Villes proposant des examens
            </h2>
            <p className="text-slate-500 text-sm">
              Liste non exhaustive. Certaines villes ne proposent pas toutes les options –{" "}
              <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                nous consulter
              </Link>{" "}
              pour vérifier les disponibilités.
            </p>
          </div>
        </Container>
        <CitiesCarousel />
      </section>

      {/* Documents & contact CTA */}
      <section className="bg-blue-950 py-14">
        <Container>
          <DocumentsCard />
        </Container>
      </section>
    </main>
  );
}

function AlertIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-amber-600 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}
