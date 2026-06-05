import type { Metadata } from "next";
import PermitDetailLayout from "@/components/permis/PermitDetailLayout";
import { PERMITS } from "@/lib/permis-data";

export const metadata: Metadata = {
  title: "Permis Mer Côtier – Formation & Examen | Bateau Ecole de la Loire",
  description:
    "Tout savoir sur le permis mer côtier : programme, documents, examen et tarifs. Naviguez jusqu'à 6 milles d'un abri, de jour comme de nuit. Formation à Nantes.",
  keywords: ["permis côtier", "permis mer", "permis bateau côtier", "Nantes", "formation"],
};

export default function CotierPage() {
  return <PermitDetailLayout permit={PERMITS.cotier} />;
}
