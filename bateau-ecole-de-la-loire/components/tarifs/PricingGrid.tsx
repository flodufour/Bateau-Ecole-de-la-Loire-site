import { OFFERS } from "@/lib/tarifs-data";
import PricingCard from "@/components/tarifs/PricingCard";

export default function PricingGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {OFFERS.map((offer) => (
        <PricingCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
