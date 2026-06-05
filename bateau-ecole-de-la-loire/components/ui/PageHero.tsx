import Link from "next/link";
import Container from "@/components/ui/Container";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="bg-blue-950 text-white py-14">
      <Container>
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-blue-300 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
      </Container>
    </section>
  );
}
