const steps = [
  {
    num: "01",
    title: "Examen théorique (code)",
    badge: "Côtier & Fluvial",
    points: [
      "30 questions à choix multiples",
      "5 erreurs maximum pour réussir (25/30)",
      "Durée : environ 45 minutes",
      "Résultat immédiat en fin de séance",
      "Disponible tous les jours dans toute la France",
    ],
  },
  {
    num: "02",
    title: "Épreuve pratique (navigation)",
    badge: "Côtier & Fluvial",
    points: [
      "Sur l'eau avec un examinateur agréé",
      "Départ, manœuvres, règles de barre et route",
      "Sécurité à bord et équipements",
      "Durée : environ 20-30 minutes",
      "Organisée avec l'école ou en candidat libre",
    ],
  },
  {
    num: "03",
    title: "Extension hauturière",
    badge: "Hauturier uniquement",
    points: [
      "Épreuve écrite uniquement (pas de pratique)",
      "Navigation côtière et hauturière, météo, réglementation",
      "Exercices de calcul avec carte et rapporteur",
      "Durée : 3 à 4 heures",
      "Pour titulaires du permis côtier uniquement",
    ],
  },
];

export default function ExamProcess() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <span className="text-4xl font-black text-slate-100 leading-none">{step.num}</span>
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
              {step.badge}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
          <ul className="space-y-2 flex-1">
            {step.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckIcon />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
