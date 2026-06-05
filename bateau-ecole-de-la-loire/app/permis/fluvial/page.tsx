import type { Metadata } from "next";
import PermitDetailLayout from "@/components/permis/PermitDetailLayout";
import { PERMITS } from "@/lib/permis-data";

export const metadata: Metadata = {
  title: "Permis Eaux Intérieures (Fluvial) – Formation & Examen | Bateau Ecole de la Loire",
  description:
    "Tout savoir sur le permis eaux intérieures (fluvial) : programme, documents, examen et tarifs. Naviguez sur rivières, canaux et fleuves. Formation à Nantes.",
  keywords: ["permis fluvial", "permis eaux intérieures", "permis rivière", "Nantes", "Loire"],
};

export default function FluvialPage() {
  return <PermitDetailLayout permit={PERMITS.fluvial} />;
}
