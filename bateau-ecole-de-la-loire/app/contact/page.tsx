import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Contact – Bateau Ecole de la Loire",
  description:
    "Contactez Bateau Ecole de la Loire à Nantes. Adresse, téléphone, e-mail et formulaire de contact pour votre permis bateau côtier ou fluvial.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ContactInfoCard />
            <ContactForm />
          </div>
        </Container>
      </section>

      <MapEmbed />
    </>
  );
}
