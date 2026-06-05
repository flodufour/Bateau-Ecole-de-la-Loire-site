import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CadeauCallout() {
  return (
    <section className="bg-blue-900 text-white">
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-2">Idée cadeau</p>
            <h2 className="text-2xl font-bold mb-2">
              Offrez un permis bateau
            </h2>
            <p className="text-blue-200">
              Recevez une carte cadeau à offrir. Le bénéficiaire s&apos;inscrit dans l&apos;année dès qu&apos;il souhaite démarrer sa formation.
            </p>
          </div>
          <Button href="/tarifs" variant="white" size="lg" className="shrink-0">
            Consulter nos offres
          </Button>
        </div>
      </Container>
    </section>
  );
}
