"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartBadge() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      className="relative text-blue-100 hover:text-white p-2 rounded-md hover:bg-blue-800 transition-colors"
      title="Mon panier"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-blue-400 text-blue-950 text-[10px] font-bold flex items-center justify-center leading-none">
          {count}
        </span>
      )}
    </Link>
  );
}
