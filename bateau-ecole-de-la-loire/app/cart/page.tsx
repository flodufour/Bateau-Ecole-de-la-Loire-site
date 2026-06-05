"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartContext";
import { OFFERS } from "@/lib/tarifs-data";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main>
        <section className="bg-blue-950 text-white py-14">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>›</span>
              <span className="text-white font-medium">Mon panier</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold">Mon panier</h1>
          </Container>
        </section>

        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
                <CartIcon className="h-8 w-8 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Votre panier est vide</h2>
              <p className="text-slate-500 mb-8">
                Parcourez nos formules et ajoutez une formation à votre panier.
              </p>
              <Button href="/tarifs" variant="primary" size="lg">
                Voir les formules
              </Button>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-blue-950 text-white py-14">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-white font-medium">Mon panier</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">Mon panier</h1>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const offer = OFFERS.find((o) => o.id === item.offerId);
                return (
                  <div
                    key={item.offerId}
                    className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      {offer?.fees && offer.fees.length > 0 && (
                        <ul className="mt-2 space-y-0.5">
                          {offer.fees.map((fee) => (
                            <li key={fee.label} className="text-xs text-slate-400">
                              + {fee.amount} € {fee.label} (à régler séparément)
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xl font-bold text-slate-900">{item.price} €</span>
                      <button
                        onClick={() => removeFromCart(item.offerId)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        aria-label="Retirer du panier"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={clearCart}
                className="text-sm text-slate-400 hover:text-red-500 transition-colors mt-2"
              >
                Vider le panier
              </button>
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="font-bold text-slate-900 text-lg mb-5">Récapitulatif</h2>

                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.offerId} className="flex justify-between text-sm">
                      <span className="text-slate-600 flex-1 pr-4">{item.title}</span>
                      <span className="font-medium text-slate-900 shrink-0">{item.price} €</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">Total formation</span>
                    <span className="text-2xl font-bold text-blue-700">{subtotal} €</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Timbres fiscaux et droits d&apos;examen non inclus — à régler séparément.
                  </p>
                </div>

                {/* TODO: check auth state — redirect to /login if not connected */}
                <Button href="/login" variant="primary" size="lg" className="w-full">
                  Finaliser la commande
                </Button>
                <p className="text-xs text-slate-400 text-center mt-3">
                  Vous devez être connecté pour finaliser votre inscription.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}
