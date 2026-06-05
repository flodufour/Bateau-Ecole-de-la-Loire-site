export type OfferMode = "traditionnel" | "autonomie" | "mixte" | "cadeau";

export type Fee = {
  label: string;
  amount: number;
};

export type Offer = {
  id: string;
  title: string;
  subtitle: string;
  requirement?: string;
  features: string[];
  basePrice: number;
  altBasePrice?: number;
  fees: Fee[];
  total: number;
  altTotal?: number;
  totalNote?: string;
  mode: OfferMode;
  popular?: boolean;
};

export const OFFERS: Offer[] = [
  {
    id: "cotier-complet",
    title: "Permis Mer Côtier Complet",
    subtitle: "Code côtier – 5h en salle + 3h30 de pratique",
    basePrice: 250,
    fees: [
      { label: "Examen", amount: 30 },
      { label: "Droits fiscaux", amount: 78 },
    ],
    total: 358,
    mode: "mixte",
    features: [
      "Livre de code numérique",
      "Tests internet illimités (e-learning)",
      "5 heures de cours en salle",
      "3h30 de pratique de navigation",
      "Inscription à l'examen",
    ],
  },
  {
    id: "carte-cadeau",
    title: "Carte Cadeau",
    subtitle: "Valable sur toutes les prestations",
    basePrice: 50,
    fees: [],
    total: 50,
    mode: "cadeau",
    features: [
      "Valable sur toutes les formules",
      "Commandez à son nom avec vos coordonnées",
      "Permis complet ou cartes cadeaux multiples",
      "Remise en main propre sur rendez-vous possible",
    ],
  },
  {
    id: "hauturier",
    title: "Permis Mer Hauturier",
    subtitle: "Code hauturier en autonomie",
    requirement: "Titulaires du permis mer côtier uniquement",
    basePrice: 235,
    fees: [{ label: "Droits fiscaux", amount: 38 }],
    total: 273,
    totalNote: "matériel inclus",
    mode: "autonomie",
    features: [
      "Support pédagogique complet (livre, carte, rapporteur)",
      "Cours en vidéo",
      "Inscription à l'examen dans votre département",
      "Matériel inclus",
    ],
  },
  {
    id: "cotier-fluvial",
    title: "Permis Côtier Complet + Eaux Intérieures",
    subtitle: "Côtier (code + pratique) + code fluvial en autonomie",
    basePrice: 305,
    fees: [
      { label: "30 € × 2 examens", amount: 60 },
      { label: "Droits fiscaux", amount: 78 },
    ],
    total: 443,
    mode: "mixte",
    features: [
      "Livres de code côtier et fluvial",
      "Tests internet illimités",
      "5h cours en salle + 3h30 pratique (côtier)",
      "Fluvial entièrement en autonomie",
      "Inscription aux deux examens",
    ],
  },
  {
    id: "cotier-hauturier",
    title: "Permis Côtier Complet + Hauturier",
    subtitle: "Côtier (code + pratique) + hauturier en autonomie",
    basePrice: 455,
    fees: [
      { label: "Examen côtier", amount: 30 },
      { label: "Droits fiscaux côtier", amount: 78 },
      { label: "Droits fiscaux hauturier", amount: 38 },
    ],
    total: 601,
    totalNote: "matériel inclus",
    mode: "mixte",
    features: [
      "Livre de code côtier + support hauturier complet",
      "Tests internet illimités",
      "5h cours en salle + 3h30 pratique",
      "Matériel hauturier inclus (carte, rapporteur, etc.)",
    ],
  },
  {
    id: "hauturier-fluvial",
    title: "Hauturier + Eaux Intérieures Code Seul",
    subtitle: "Les deux codes en autonomie",
    requirement: "Titulaires du permis mer côtier uniquement",
    basePrice: 285,
    fees: [
      { label: "Examen fluvial", amount: 30 },
      { label: "Droits fiscaux hauturier", amount: 38 },
    ],
    total: 333,
    totalNote: "matériel inclus",
    mode: "autonomie",
    features: [
      "Support hauturier complet par courrier",
      "Livre de code fluvial numérique",
      "Cours en vidéo (hauturier)",
      "Inscription aux deux examens",
    ],
  },
  {
    id: "trois-permis",
    title: "Les 3 Permis Bateau",
    subtitle: "Côtier complet + Fluvial code + Hauturier code",
    basePrice: 495,
    fees: [
      { label: "30 € × 2 examens", amount: 60 },
      { label: "Droits fiscaux côtier + hauturier", amount: 116 },
    ],
    total: 671,
    totalNote: "matériel inclus",
    mode: "mixte",
    popular: true,
    features: [
      "Tous les supports pédagogiques inclus",
      "Tests internet illimités",
      "5h cours en salle + 3h30 pratique (côtier)",
      "Fluvial et hauturier en autonomie",
      "Matériel hauturier complet inclus",
    ],
  },
  {
    id: "fluvial-code",
    title: "Eaux Intérieures (Fluvial) Code Seul",
    subtitle: "Code fluvial en autonomie",
    requirement: "Titulaires du permis mer uniquement",
    basePrice: 70,
    fees: [{ label: "Droits d'inscription", amount: 30 }],
    total: 100,
    mode: "autonomie",
    features: [
      "Livre de code numérique",
      "Tests internet illimités",
      "Inscription à l'examen dans votre département",
    ],
  },
  {
    id: "cotier-code",
    title: "Permis Mer Côtier Code Seul",
    subtitle: "Code côtier – autonomie ou cours en salle",
    requirement: "Titulaires du permis eaux intérieures uniquement",
    basePrice: 70,
    altBasePrice: 120,
    fees: [{ label: "Droits d'inscription", amount: 30 }],
    total: 100,
    altTotal: 150,
    mode: "autonomie",
    features: [
      "Livre de code numérique + tests illimités",
      "Inscription à l'examen",
      "Option cours en salle disponible (+50 €)",
    ],
  },
];
