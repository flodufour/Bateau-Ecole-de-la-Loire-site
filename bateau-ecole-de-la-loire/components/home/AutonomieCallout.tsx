import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function AutonomieCallout() {
  return (
    <section className="bg-blue-900 text-white">
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white text-black text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                Nouveau
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1">Le permis en autonomie</h2>
            <p className="max-w-xl">
              Préparez certains permis sans cours en salle. Support pédagogique, tests en ligne et inscription à l&apos;examen inclus. Possible dans toute la France.
            </p>
          </div>
          <Button href="/candidat-libre" variant="white" size="lg" className="shrink-0">
            En savoir plus
          </Button>
        </div>
      </Container>
    </section>
  );
}
