import type { Metadata } from "next";
import PermitDetailLayout from "@/components/permis/PermitDetailLayout";
import { PERMITS } from "@/lib/permis-data";

export const metadata: Metadata = {
  title: "Permis Mer Hauturier – Extension & Programme | Bateau Ecole de la Loire",
  description:
    "Tout savoir sur le permis hauturier : programme, documents, examen et tarifs. Naviguez sans limite de distance, de jour comme de nuit. Extension pour titulaires du côtier.",
  keywords: ["permis hauturier", "extension hauturière", "navigation hauturière", "Nantes"],
};

export default function HauturierPage() {
  return <PermitDetailLayout permit={PERMITS.hauturier} />;
}
