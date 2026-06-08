export default function ContactInfoCard() {
  return (
    <div className="bg-blue-950 text-blue-100 rounded-2xl p-8 h-full flex flex-col gap-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
          Coordonnées
        </p>
        <h2 className="text-2xl font-bold text-white">Bateau Ecole de la Loire</h2>
      </div>

      <ul className="space-y-6 flex-1">
        <li className="flex items-start gap-4">
          <span className="mt-0.5 shrink-0 text-blue-400">
            <MapPinIcon />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">Adresse</p>
            <address className="not-italic text-sm leading-relaxed">
              58 Boulevard de l&apos;Égalité<br />
              44100 Nantes, France
            </address>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-0.5 shrink-0 text-blue-400">
            <PhoneIcon />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">Mobile</p>
            <a
              href="tel:0762463741"
              className="text-sm hover:text-white transition-colors"
            >
              07 62 46 37 41
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-0.5 shrink-0 text-blue-400">
            <MailIcon />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">E-mail</p>
            <a
              href="mailto:bateauecoledelaloire@gmail.com"
              className="text-sm hover:text-white transition-colors break-all"
            >
              bateauecoledelaloire@gmail.com
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <span className="mt-0.5 shrink-0 text-blue-400">
            <ClockIcon />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">Horaires</p>
            <p className="text-sm leading-relaxed">
              Lundi au samedi<br />
              10h00 – 20h00
            </p>
            <p className="text-xs text-blue-400 mt-1.5">
              Accueil sur rendez-vous uniquement
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
