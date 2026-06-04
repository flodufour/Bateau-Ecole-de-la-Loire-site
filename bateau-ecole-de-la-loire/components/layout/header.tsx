"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Les permis", href: "/permis" },
  { label: "Formules & tarifs", href: "/tarifs" },
  { label: "Dates d'examen", href: "/examens" },
  { label: "Contact", href: "/contact" },
  { label: "Candidat libre", href: "/candidat-libre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-950 shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-white font-bold text-base lg:text-lg tracking-wide hover:text-blue-200 transition-colors shrink-0"
          >
            BATEAU ÉCOLE DE LA LOIRE
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/dashboard/panier"
              className="text-blue-100 hover:text-white p-2 rounded-md hover:bg-blue-800 transition-colors"
              title="Mon panier"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="text-blue-100 hover:text-white p-2 rounded-md hover:bg-blue-800 transition-colors"
              title="Mon compte"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-blue-100 hover:text-white p-2 rounded-md"
            aria-label="Menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden bg-blue-900 border-t border-blue-800">
          <Container className="py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-blue-700 mt-2 pt-3 flex gap-4 px-3">
              <Link href="/dashboard/panier" onClick={() => setOpen(false)} className="text-blue-200 hover:text-white text-sm">
                Mon panier
              </Link>
              <Link href="/dashboard" onClick={() => setOpen(false)} className="text-blue-200 hover:text-white text-sm">
                Mon compte
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
