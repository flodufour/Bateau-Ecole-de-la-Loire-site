import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import type { Permit } from "@/lib/permis-data";

export default function PermitHero({ permit }: { permit: Permit }) {
  return (
    <div className="relative h-72 md:h-96 overflow-hidden">
      <Image
        src={permit.image}
        alt={permit.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-950/65" />
      <div className="absolute inset-0 flex flex-col justify-end">
        <Container className="pb-10">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-sm text-blue-300 mb-3"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/permis" className="hover:text-white transition-colors">
              Les permis
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white font-medium">{permit.shortTitle}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {permit.title}
          </h1>
        </Container>
      </div>
    </div>
  );
}
