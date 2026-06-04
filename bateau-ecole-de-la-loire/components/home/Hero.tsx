import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: "/icons/shield-check.svg",
    title: "Tout inclus",
    desc: "Cours théoriques, e-learning illimité, livret candidat, pratique 3h30, inscription à l'examen. Aucun frais caché, aucun frais de dossier.",
  },
  {
    icon: "/icons/calendar.svg",
    title: "Horaires flexibles",
    desc: "Cours le soir et le week-end. Formation sur mesure selon vos disponibilités. Examen disponible tous les jours partout en France.",
  },
  {
    icon: "/icons/anchor.svg",
    title: "Pratique sur la Loire",
    desc: "Notre Jeanneau Merry Fisher 695 au départ des Machines de l'île. Conditions réelles : marée, courant, balisage maritime et fluvial.",
  },
  {
    icon: "/icons/trophy.svg",
    title: "100 % de réussite",
    desc: "Moniteur agréé et capitaine de la marine marchande. Disponible pour vous conseiller même après l'obtention de votre permis.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">

      {/* Decorative helm SVG — background, right side, blurred */}
      <div className="pointer-events-none select-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[560px] lg:w-[700px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-full opacity-[0.07] blur-[3px] animate-[spin_90s_linear_infinite]"
        />
      </div>

      {/* Dark-to-transparent gradient overlay so text side is solid */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-transparent pointer-events-none" />

      <Container className="relative py-20 lg:py-28">

        {/* Headline block */}
        <div className="max-w-3xl">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            École de conduite nautique — Nantes
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Votre permis bateau<br />
            <span className="text-blue-300">à Nantes</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
            Permis mer côtier, hauturier et eaux intérieures. Formation complète, meilleurs tarifs, résultats garantis.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/tarifs" size="lg">
              Voir les formules
            </Button>
            <Button href="/contact" size="lg" variant="white">
              Nous contacter
            </Button>
          </div>

          <a
            href="https://maps.app.goo.gl/9mJpQKXVssmfizUW6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-5 group"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/70 text-sm group-hover:text-white transition-colors">
              <strong className="text-white font-semibold">5,0</strong> · +20 avis Google
            </span>
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="animate-fade-in-up bg-white/10 border border-white/20 rounded-lg p-6"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.icon} alt="" className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white text-base leading-snug">{f.title}</h3>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
