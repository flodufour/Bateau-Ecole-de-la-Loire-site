"use client";

import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type Offer = {
  title: string;
  description: string;
  price: number;
  allIn: number;
  extras: string;
  tag?: string;
  tagColor?: string;
};

const offers: Offer[] = [
  {
    title: "Permis Mer Côtier Complet",
    description: "Code option côtière (5h en salle) + 3h30 de pratique dont 2h à la barre. La formation complète.",
    price: 250,
    allIn: 358,
    extras: "+ 30 € examen · + 78 € droits fiscaux",
    tag: "Le plus populaire",
    tagColor: "bg-slate-700",
  },
  {
    title: "Permis Mer Hauturier",
    description: "Code option hauturière en autonomie. Uniquement pour titulaires d'un permis mer côtier.",
    price: 235,
    allIn: 273,
    extras: "+ 38 € droits fiscaux",
  },
  {
    title: "Côtier + Eaux Intérieures",
    description: "Permis mer côtier (code + pratique) + code option eaux intérieures (fluvial).",
    price: 305,
    allIn: 443,
    extras: "+ 30 € par examen · + 78 € droits fiscaux",
  },
  {
    title: "Côtier + Hauturier",
    description: "Permis mer côtier complet (code + pratique) avec extension hauturière. Matériel inclus.",
    price: 455,
    allIn: 601,
    extras: "+ 30 € examen · + 78 + 38 € droits fiscaux",
  },
  {
    title: "Les 3 Permis Bateau",
    description: "Côtier complet + code eaux intérieures + code hauturier. La formule tout-en-un.",
    price: 495,
    allIn: 671,
    extras: "+ 30 € par examen · + 78 + 38 € droits fiscaux",
    tag: "Meilleure valeur",
    tagColor: "bg-teal-700",
  },
  {
    title: "Permis Eaux Intérieures",
    description: "Code option eaux intérieures seul, en autonomie. Pour naviguer sur rivières et canaux.",
    price: 70,
    allIn: 100,
    extras: "+ 30 € droits fiscaux",
  },
  {
    title: "Permis Côtier Code seul",
    description: "Code option côtière uniquement, en salle ou en autonomie. Sans la partie pratique.",
    price: 120,
    allIn: 150,
    extras: "En autonomie : 70 € · + 30 € droits fiscaux",
  },
];

export default function OffresSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 100);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      className="relative py-16 lg:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Phoo_hangard.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/35" />

      <div className="relative z-10">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Nos formules</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Tous les prix incluent la formation, les tests en ligne, le livret candidat et l&apos;inscription à l&apos;examen.{" "}
            <strong className="text-white">Aucun frais de dossier.</strong>
          </p>
        </div>
      </Container>

      <div className="relative mx-4 lg:mx-8 rounded-2xl overflow-hidden">
        {/* Left fade — hidden when at scroll start */}
        <div
          className="absolute left-0 top-0 bottom-4 w-20 lg:w-28 bg-gradient-to-r from-slate-900/35 to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: atStart ? 0 : 1 }}
        />
        {/* Right fade — hidden when at scroll end */}
        <div
          className="absolute right-0 top-0 bottom-4 w-20 lg:w-28 bg-gradient-to-l from-slate-900/35 to-transparent z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: atEnd ? 0 : 1 }}
        />

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pl-[30px] pr-8 lg:pl-[70px] lg:pr-16 pb-4 snap-x snap-mandatory"
        >
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="snap-start shrink-0 w-64 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow"
            >
              {offer.tag ? (
                <div className="bg-blue-700 px-4 py-1.5 flex items-center">
                  <span className="text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {offer.tag}
                  </span>
                </div>
              ) : (
                <div className="h-[29px]" />
              )}

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-blue-950 text-sm leading-snug mb-2">{offer.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{offer.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-end gap-1.5 mb-0.5">
                    <span className="text-2xl font-bold text-blue-950">{offer.price} €</span>
                    <span className="text-slate-400 text-xs mb-1">formation</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-700 mb-1">
                    Soit {offer.allIn} € tout compris
                  </p>
                  <p className="text-xs text-slate-400 mb-4">{offer.extras}</p>
                  <Button href="/tarifs" variant="outline" size="sm" className="w-full justify-center">
                    Voir le détail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="text-center mt-8">
          <Button href="/tarifs" size="lg">
            Toutes nos formules & tarifs
          </Button>
        </div>
      </Container>
      </div>
    </section>
  );
}
