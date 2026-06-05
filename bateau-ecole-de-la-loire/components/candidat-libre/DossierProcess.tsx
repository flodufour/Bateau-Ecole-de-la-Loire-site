const itemsToSend = [
  "La demande d'inscription à une option de base",
  "La demande d'extension hauturière (pour le permis hauturier)",
  "Une photo d'identité récente couleur (photomaton)",
  "Une photocopie de votre pièce d'identité",
  "Les timbres fiscaux (38 € pour le hauturier – achat en bureau de tabac ou sur timbres.impots.gouv.fr)",
  "Les droits d'inscription de 30 € à régler directement au centre privé (côtier ou eaux intérieures)",
  "L'original de votre permis bateau mer ou eaux intérieures",
  "Le règlement selon l'option choisie",
  "La précision du lieu où vous souhaitez passer votre examen",
];

const itemsReceived = [
  { label: "Le livre de code", detail: "Côtier, hauturier ou eaux intérieures selon l'option choisie" },
  { label: "Accès illimité aux tests en ligne", detail: "Pour côtier et fluvial – identiques à ceux de l'examen (e-learning)" },
  { label: "En plus pour le hauturier :", detail: null, isHeading: true },
  { label: "Numéro OEDIPP", detail: "Inscription officielle à l'examen hauturier" },
  { label: "Cahier d'exercices + carte 9999 du SHOM", detail: null },
  { label: "Rapporteur de navigation", detail: "Simple d'utilisation" },
  { label: "Cours en vidéo", detail: null },
  { label: "Calendrier des examens dans votre région", detail: null },
];

export default function DossierProcess() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Send */}
      <div className="rounded-2xl bg-blue-950 text-blue-100 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Étape 1</p>
        <h2 className="text-xl font-bold text-white mb-1">Envoyez votre dossier</h2>
        <p className="text-sm text-blue-300 mb-6">
          Par courrier simple (ne pas envoyer en recommandé) à :
        </p>
        <address className="not-italic text-sm text-blue-200 bg-blue-900 rounded-xl px-5 py-4 mb-6 leading-relaxed">
          Bateau École de la Loire<br />
          58 Boulevard de l&apos;Égalité<br />
          44100 Nantes
        </address>
        <ul className="space-y-3">
          {itemsToSend.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-blue-800 text-blue-300 text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Receive */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Étape 2</p>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Vous recevrez rapidement</h2>
        <p className="text-sm text-slate-500 mb-6">
          Votre kit complet pour vous préparer en toute autonomie.
        </p>
        <ul className="space-y-3">
          {itemsReceived.map((item, i) => (
            item.isHeading ? (
              <li key={i} className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">{item.label}</p>
              </li>
            ) : (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckIcon />
                <span>
                  <span className="font-medium">{item.label}</span>
                  {item.detail && (
                    <span className="text-slate-500"> – {item.detail}</span>
                  )}
                </span>
              </li>
            )
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-600 bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
          Une fois prêt, communiquez-nous la date souhaitée : nous vous inscrivons et vous envoyons votre convocation.
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-blue-600 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
