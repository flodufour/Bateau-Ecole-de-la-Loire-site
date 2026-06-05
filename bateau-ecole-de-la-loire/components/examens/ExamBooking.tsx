import Link from "next/link";

export default function ExamBooking() {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* Via l'école */}
      <div className="rounded-2xl bg-blue-950 text-blue-100 p-8 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Option 1
          </p>
          <h3 className="text-xl font-bold text-white mb-1">Via l&apos;école</h3>
          <p className="text-sm text-blue-300 leading-relaxed">
            Nous vous inscrivons à la date et au centre de votre choix et vous envoyons votre convocation.
          </p>
        </div>

        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <CheckIcon />
            <span>Inscription gérée de A à Z par l&apos;école</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon />
            <span>Convocation reçue par courrier ou e-mail</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon />
            <span>Examen dans le centre de votre choix en France</span>
          </li>
        </ul>

        <div className="mt-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-blue-950 font-semibold px-5 py-2.5 text-sm hover:bg-blue-50 transition-colors w-full"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* En candidat libre */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Option 2
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">En candidat libre</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Réservez directement votre créneau d&apos;examen dans le centre agréé le plus proche. La Poste propose des sessions théoriques tous les jours dans toute la France.
          </p>
        </div>

        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-start gap-3">
            <CheckIcon blue />
            <span>Des examens disponibles <strong>tous les jours</strong> partout en France</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon blue />
            <span>Centres La Poste, centres privés agréés</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckIcon blue />
            <span>Résultat immédiat à l&apos;issue de l&apos;examen</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertIcon />
            <span className="text-amber-700">
              Réservé aux titulaires d&apos;un permis bateau pour les options supplémentaires.{" "}
              <Link href="/candidat-libre" className="underline hover:text-amber-900">
                En savoir plus →
              </Link>
            </span>
          </li>
        </ul>

        <div className="flex flex-col gap-3 mt-auto">
          <a
            href="https://www.laposte.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 text-white font-semibold px-5 py-2.5 text-sm hover:bg-blue-800 transition-colors"
          >
            <ExternalIcon />
            Trouver un bureau La Poste
          </a>
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F14292"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 text-slate-600 font-semibold px-5 py-2.5 text-sm hover:bg-slate-50 transition-colors"
          >
            <ExternalIcon />
            Infos officielles – service-public.fr
          </a>
        </div>
      </div>

    </div>
  );
}

function CheckIcon({ blue }: { blue?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 mt-0.5 ${blue ? "text-blue-600" : "text-green-400"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}


function ExternalIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
