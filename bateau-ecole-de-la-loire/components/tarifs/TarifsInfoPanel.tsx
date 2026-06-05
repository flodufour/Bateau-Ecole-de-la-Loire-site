import Link from "next/link";

const included = [
  "Le livret du candidat, le livre de code et les tests en ligne",
  "Les frais de dossier",
  "Pour le hauturier : matériel complet (carte, calculatrice, règle, cahier d'exercices, cours en vidéo)",
];

const conditions = [
  "Paiement en 3 fois sans frais",
  "-10 % pour 3 personnes s'inscrivant simultanément",
  "Timbres fiscaux et prestation payés séparément",
  "Tarifs révisables sans préavis",
];

const documents = [
  { label: "Option de base (côtier et/ou fluvial)", href: "/documents/permis-option-de-base-maj.pdf" },
  { label: "Extension hauturière", href: "/documents/extension.pdf" },
  { label: "Certificat médical", href: "/documents/certificat-medical.pdf" },
  { label: "Timbres fiscaux (site officiel)", href: "https://timbres.impots.gouv.fr/", external: true },
];

export default function TarifsInfoPanel() {
  return (
    <section className="bg-blue-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Inclus */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Compris dans les tarifs
            </p>
            <h3 className="text-white font-bold text-lg mb-5">Ce qui est inclus</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-blue-200">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                Conditions
              </p>
              <ul className="space-y-3">
                {conditions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-blue-200">
                    <InfoIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Dossier d&apos;inscription
            </p>
            <h3 className="text-white font-bold text-lg mb-5">Télécharger les documents</h3>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc.label}>
                  <Link
                    href={doc.href}
                    target={doc.external ? "_blank" : undefined}
                    rel={doc.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-xl bg-blue-900 hover:bg-blue-800 transition-colors px-4 py-3 text-sm text-blue-100 group"
                  >
                    <FileIcon />
                    <span className="flex-1">{doc.label}</span>
                    <DownloadIcon />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-blue-400 leading-relaxed">
              Possibilité de passer votre examen côtier ou fluvial à Nantes et désormais dans toute la France en candidat libre.{" "}
              <Link href="/candidat-libre" className="text-blue-300 hover:text-white underline transition-colors">
                En savoir plus →
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Horaires & contact
            </p>
            <h3 className="text-white font-bold text-lg mb-5">Bateau École de la Loire</h3>
            <address className="not-italic text-sm text-blue-200 leading-relaxed mb-6">
              58 boulevard de l&apos;Égalité<br />
              44100 Nantes<br /><br />
              Lundi au samedi, 10h00 – 20h00<br />
              <span className="text-blue-400 text-xs">Accueil sur rendez-vous uniquement</span>
            </address>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:bateauecoledelaloire@gmail.com"
                  className="flex items-center gap-3 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <MailIcon />
                  bateauecoledelaloire@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0762463741"
                  className="flex items-center gap-3 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <PhoneIcon />
                  07 62 46 37 41
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-500 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
