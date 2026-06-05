import type { Offer, OfferMode } from "@/lib/tarifs-data";
import AddToCartButton from "@/components/cart/AddToCartButton";

const modeBadge: Record<OfferMode, { bg: string; dot: string; label: string }> = {
  mixte: { bg: "bg-blue-100 text-blue-700", dot: "bg-blue-500", label: "Mixte" },
  autonomie: { bg: "bg-green-100 text-green-700", dot: "bg-green-500", label: "Autonomie" },
  traditionnel: { bg: "bg-red-100 text-red-700", dot: "bg-red-500", label: "Cours en salle" },
  cadeau: { bg: "bg-amber-100 text-amber-700", dot: "bg-amber-400", label: "Cadeau" },
};

export default function PricingCard({ offer }: { offer: Offer }) {
  const badge = modeBadge[offer.mode];

  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md ${
        offer.popular
          ? "border-blue-500 ring-1 ring-blue-500 shadow-blue-100 shadow-sm"
          : "border-slate-200"
      }`}
    >
      {/* Badges row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${badge.bg}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
          {badge.label}
        </span>
        {offer.popular && (
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white">
            Meilleure offre
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">{offer.title}</h3>
      <p className="text-sm text-slate-500 mb-3 leading-snug">{offer.subtitle}</p>

      {/* Requirement */}
      {offer.requirement && (
        <div className="flex items-start gap-2 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 mb-4">
          <AlertIcon />
          <p className="text-xs text-amber-800 leading-relaxed">{offer.requirement}</p>
        </div>
      )}

      {/* Features */}
      <ul className="flex-1 space-y-2 mb-6">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Pricing */}
      <div className="border-t border-slate-100 pt-5">
        {offer.altBasePrice ? (
          <div className="space-y-1.5 mb-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-bold text-slate-900">{offer.basePrice} €</span>
              <span className="text-xs font-medium bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                Autonomie
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-medium text-slate-400 line-through">{offer.altBasePrice} €</span>
              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                Cours en salle
              </span>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-bold text-slate-900 mb-2">{offer.basePrice} €</div>
        )}

        {offer.fees.length > 0 && (
          <ul className="space-y-0.5 mb-3">
            {offer.fees.map((fee) => (
              <li key={fee.label} className="text-xs text-slate-400">
                + {fee.amount} € {fee.label}
              </li>
            ))}
          </ul>
        )}

        {offer.mode !== "cadeau" && (
          <p className="text-sm font-bold text-blue-700 mb-1">
            {offer.altTotal
              ? `Soit ${offer.total} € ou ${offer.altTotal} € tout compris`
              : `Soit ${offer.total} € tout compris`}
            {offer.totalNote && (
              <span className="font-normal text-blue-500"> ({offer.totalNote})</span>
            )}
          </p>
        )}

        <div className="mt-4">
          <AddToCartButton
            offerId={offer.id}
            title={offer.title}
            price={offer.basePrice}
            popular={offer.popular}
          />
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-blue-600 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-amber-600 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}
