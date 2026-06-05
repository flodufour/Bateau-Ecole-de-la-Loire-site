import Link from "next/link";

const documents = [
  {
    label: "Option de base (côtier et/ou fluvial)",
    href: "/documents/permis-option-de-base-maj.pdf",
    icon: <FileIcon />,
  },
  {
    label: "Extension hauturière",
    href: "/documents/extension.pdf",
    icon: <FileIcon />,
  },
  {
    label: "Certificat médical",
    href: "/documents/certificat-medical.pdf",
    icon: <FileIcon />,
  },
  {
    label: "Timbres fiscaux (site officiel)",
    href: "https://timbres.impots.gouv.fr/",
    icon: <ExternalIcon />,
    external: true,
  },
];

export default function DocumentsCard() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Documents */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
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
                <span className="shrink-0 text-blue-400 group-hover:text-white transition-colors">
                  {doc.icon}
                </span>
                <span className="flex-1">{doc.label}</span>
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
          Horaires & contact
        </p>
        <h3 className="text-white font-bold text-lg mb-5">Bateau École de la Loire</h3>
        <address className="not-italic text-sm text-blue-200 leading-relaxed mb-5">
          58 boulevard de l&apos;Égalité<br />
          44100 Nantes<br /><br />
          Ouvert du lundi au samedi<br />
          10h00 – 20h00<br />
          <span className="text-blue-400 text-xs">Accueil sur rendez-vous uniquement</span>
        </address>
        <ul className="space-y-3">
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
  );
}

function FileIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 text-blue-500 group-hover:text-blue-300 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
