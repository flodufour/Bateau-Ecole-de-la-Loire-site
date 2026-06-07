"use client";

import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

type Props = {
  offerId: string;
  title: string;
  price: number;
  popular?: boolean;
};

export default function AddToCartButton({ offerId, title, price, popular }: Props) {
  const { addToCart, removeFromCart, items } = useCart();
  const router = useRouter();
  const inCart = items.some((i) => i.offerId === offerId);

  const handleClick = () => {
    if (inCart) {
      removeFromCart(offerId);
    } else {
      addToCart({ offerId, title, price });
      router.push("/cart");
    }
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 w-full px-5 py-2.5 text-base cursor-pointer";

  const classes = inCart
    ? `${base} bg-green-600 text-white border border-green-600 hover:bg-red-500 hover:border-red-500`
    : popular
    ? `${base} bg-blue-700 text-white hover:bg-blue-800 border border-blue-700`
    : `${base} bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-50`;

  return (
    <button onClick={handleClick} className={classes}>
      {inCart ? (
        <>
          <CheckIcon />
          Ajouté au panier
        </>
      ) : (
        <>
          <CartIcon />
          Ajouter au panier
        </>
      )}
    </button>
  );
}

function CartIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
