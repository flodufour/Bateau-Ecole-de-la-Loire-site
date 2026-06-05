const items = [
  {
    icon: <BookIcon />,
    title: "Inclus dans toutes les formules",
    body: "Livre de code, tests internet illimités (e-learning), inscription à l'examen de votre choix et pratique de navigation.",
  },
  {
    icon: <PercentIcon />,
    title: "-10 % dès 3 inscriptions simultanées",
    body: "Réduction de 10 % sur le prix de la prestation pour 3 personnes s'inscrivant en même temps.",
  },
  {
    icon: <GiftIcon />,
    title: "Offrir un permis bateau",
    body: "Commandez directement à son nom avec vos coordonnées. La personne nous contacte quand elle est prête pour fixer les cours, l'examen et la pratique.",
  },
];

export default function PricingLegend() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Bon à savoir
          </p>
          <h2 className="text-2xl font-bold text-slate-900">Avant de choisir votre formule</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-blue-700">{item.icon}</span>
              <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-slate-600"><strong>Mixte</strong> – cours en salle + autonomie</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
            <span className="text-slate-600"><strong>Autonomie</strong> – entièrement à distance</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block h-3 w-3 rounded-full bg-amber-400" />
            <span className="text-slate-600"><strong>Cadeau</strong> – bon cadeau toutes formules</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function PercentIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M17 17h.01M7 17L17 7M9.5 7a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );
}
