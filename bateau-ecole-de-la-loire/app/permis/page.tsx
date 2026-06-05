import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { PERMIT_LIST } from "@/lib/permis-data";

export const metadata: Metadata = {
  title: "Les Permis Bateau – Côtier, Fluvial, Hauturier | Bateau Ecole de la Loire",
  description:
    "Découvrez les 3 permis bateau : côtier (mer, 6 milles), eaux intérieures (fluvial) et hauturier (sans limite). Formation à Nantes avec Bateau Ecole de la Loire.",
  keywords: ["permis bateau", "permis côtier", "permis fluvial", "hauturier", "Nantes"],
};

export default function PermisPage() {
  return (
    <main>
      <PageHero
        title="Les Permis Bateau"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Les permis" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Choisissez votre permis
            </p>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-4">
              Quel permis vous correspond ?
            </h2>
            <p className="text-slate-500 leading-relaxed">
              En France, trois options de permis bateau existent selon votre terrain de navigation — mer côtière, eaux intérieures (rivières et canaux) ou navigation hauturière en pleine mer. Tous sont valables à vie et reconnus à l&apos;international.
            </p>
          </div>
        </Container>
      </section>

      {/* Permit cards */}
      <section className="pb-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {PERMIT_LIST.map((permit) => (
              <article
                key={permit.id}
                className="group rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={permit.image}
                    alt={permit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="inline-block rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1">
                      {permit.shortTitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {permit.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {permit.shortDesc}
                    </p>
                  </div>

                  {/* Key facts */}
                  <div className="space-y-2">
                    <FactRow label="Âge minimum" value={`${permit.ageMin} ans`} />
                    <FactRow label="Zone" value={permit.area} />
                    <FactRow label="Validité" value={permit.validity} />
                    {permit.prerequisite && (
                      <FactRow label="Prérequis" value={permit.prerequisite} />
                    )}
                  </div>

                  <div className="mt-auto">
                    <Button
                      href={`/permis/${permit.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Compare CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-14">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-slate-900 font-semibold text-lg mb-1">
                Vous ne savez pas quel permis choisir ?
              </p>
              <p className="text-slate-500 text-sm">
                Notre équipe vous guide selon votre projet de navigation.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="md">
                Nous contacter
              </Button>
              <Button href="/tarifs" variant="outline" size="md">
                Voir les tarifs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-2 py-1.5 border-b border-slate-100 last:border-0 text-sm">
      <span className="text-slate-400 shrink-0">{label}</span>
      <span className="text-slate-700 font-medium text-right">{value}</span>
    </div>
  );
}
