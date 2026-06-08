import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PermitHero from "./PermitHero";
import type { Permit } from "@/lib/permis-data";

export default function PermitDetailLayout({ permit }: { permit: Permit }) {
  return (
    <main>
      <PermitHero permit={permit} />

      {/* Overview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {permit.longDesc.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">
                  {para}
                </p>
              ))}

              {permit.dispensation && (
                <div className="rounded-xl bg-green-50 border border-green-100 px-5 py-4">
                  <p className="text-sm text-green-800 leading-relaxed">
                    <strong>Dispense :</strong> {permit.dispensation}
                  </p>
                </div>
              )}

              {permit.note && (
                <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>À savoir :</strong> {permit.note}
                  </p>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                  Inclus dans le tarif
                </h3>
                <ul className="space-y-2.5">
                  {permit.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key facts sidebar */}
            <div className="space-y-4 lg:sticky lg:top-24 self-start">
              <KeyFact label="Âge minimum" value={`${permit.ageMin} ans`} />
              <KeyFact label="Zone de navigation" value={permit.area} />
              <KeyFact label="Validité" value={permit.validity} />
              {permit.prerequisite && (
                <KeyFact label="Prérequis" value={permit.prerequisite} />
              )}
              <div className="pt-2 space-y-3">
                <Button href="/tarifs" variant="primary" size="md" className="w-full">
                  Voir les tarifs
                </Button>
                <Button href="/contact" variant="outline" size="md" className="w-full">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Documents & Exam */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Documents */}
            <div className="rounded-2xl bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <DocIcon />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Dossier & pièces à fournir
                </h2>
              </div>
              <ul className="space-y-3">
                {permit.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam */}
            <div className="rounded-2xl bg-blue-950 p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-900 flex items-center justify-center shrink-0">
                  <ExamIcon />
                </div>
                <h2 className="text-xl font-bold text-white">L&apos;examen</h2>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-5xl font-black text-white leading-none">
                    {permit.exam.questions}
                  </p>
                  <p className="text-xs text-blue-400 mt-1 font-medium uppercase tracking-wide">
                    questions
                  </p>
                </div>
                <div className="h-12 w-px bg-blue-800" />
                <div className="text-center">
                  <p className="text-5xl font-black text-blue-300 leading-none">
                    {permit.exam.errorsAllowed}
                  </p>
                  <p className="text-xs text-blue-400 mt-1 font-medium uppercase tracking-wide">
                    erreurs admises
                  </p>
                </div>
              </div>

              <p className="text-sm text-blue-200 leading-relaxed">
                {permit.exam.format}
              </p>

              {!permit.hasPractical && (
                <div className="rounded-lg bg-blue-900/50 border border-blue-800 px-4 py-3">
                  <p className="text-xs text-blue-300">
                    Aucune épreuve pratique sur l&apos;eau pour ce permis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Theory Curriculum */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
              Formation théorique
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Au programme du cours
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {permit.theoryProgram.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm text-slate-600 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span className="shrink-0 font-bold text-blue-500 text-xs mt-0.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* Practical Curriculum */}
          {permit.practicalProgram && (
            <div className="mt-12">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                  Formation pratique
                </p>
                <h3 className="text-2xl font-bold text-slate-900">
                  Objectifs de navigation
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {permit.practicalProgram.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-600 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3"
                  >
                    <span className="shrink-0 font-bold text-blue-600 text-xs mt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-12">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                Prêt à obtenir votre {permit.shortTitle.toLowerCase()} ?
              </p>
              <p className="text-blue-300 text-sm">
                Consultez nos tarifs ou contactez-nous pour toute question.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/tarifs" variant="white" size="md">
                Voir les tarifs
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-blue-700 text-blue-100 font-semibold px-5 py-2.5 text-base hover:bg-blue-900 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function KeyFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="font-semibold text-slate-900 text-sm">{value}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 mt-0.5 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg
      className="h-5 w-5 text-slate-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function ExamIcon() {
  return (
    <svg
      className="h-5 w-5 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  );
}
