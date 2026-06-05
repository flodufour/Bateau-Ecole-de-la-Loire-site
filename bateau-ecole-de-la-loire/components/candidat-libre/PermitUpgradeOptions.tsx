const upgradeScenarios = [
  {
    currentPermit: "Permis Mer Côtier",
    description: "Vous êtes titulaire du permis mer côtier",
    options: [
      "Permis Eaux Intérieures (fluvial) – code seul",
      "Hauturier",
      "Fluvial code seul + Hauturier",
    ],
  },
  {
    currentPermit: "Permis Eaux Intérieures (Fluvial)",
    description: "Vous êtes titulaire du permis eaux intérieures",
    options: [
      "Permis Mer Côtier – code seul",
      "Permis Mer Côtier + Hauturier",
    ],
  },
];

export default function PermitUpgradeOptions() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Options disponibles</h2>
      <p className="text-slate-500 text-sm mb-8">
        Selon votre permis actuel, voici les extensions accessibles en candidat libre.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {upgradeScenarios.map((scenario) => (
          <div
            key={scenario.currentPermit}
            className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">
                Vous avez
              </p>
              <h3 className="text-lg font-bold text-slate-900">{scenario.currentPermit}</h3>
              <p className="text-sm text-slate-500 mt-1">{scenario.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Vous pouvez obtenir
              </p>
              <ul className="space-y-2">
                {scenario.options.map((option) => (
                  <li key={option} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckIcon />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
