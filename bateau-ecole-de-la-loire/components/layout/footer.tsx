import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bureaux */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Les bureaux
            </h3>
            <p className="text-sm leading-relaxed">
              58 boulevard de l&apos;Égalité<br />
              44100 Nantes
            </p>
            <p className="text-sm mt-3">
              Ouvert du lundi au samedi<br />
              10h00 – 20h00
            </p>
            <p className="text-xs text-blue-300 mt-2">Accueil sur rendez-vous uniquement</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="tel:0762463741"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <PhoneIcon /> 07 62 46 37 41
                </a>
              </li>
              <li>
                <a
                  href="mailto:bateauecole@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <MailIcon /> bateauecole@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Examens */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Dates d&apos;examen
            </h3>
            <p className="text-sm leading-relaxed">
              Des examens ont lieu <strong className="text-white">tous les jours</strong> dans toute la France (centres La Poste et autres).
            </p>
            <Link
              href="/examens"
              className="inline-block mt-3 text-blue-300 hover:text-white text-sm underline underline-offset-2"
            >
              Voir les prochaines dates →
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="text-sm space-y-2">
              {[
                { label: "Les permis", href: "/permis" },
                { label: "Formules & tarifs", href: "/tarifs" },
                { label: "Candidat libre", href: "/candidat-libre" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-blue-900">
        <Container className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <p>© 2026 Bateau École de la Loire – Permis bateau Nantes</p>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </Container>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
