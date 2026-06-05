export type PermitId = "cotier" | "fluvial" | "hauturier";

export type Permit = {
  id: PermitId;
  title: string;
  shortTitle: string;
  slug: string;
  image: string;
  shortDesc: string;
  longDesc: string[];
  note?: string;
  ageMin: number;
  validity: string;
  area: string;
  hasPractical: boolean;
  dispensation?: string;
  prerequisite?: string;
  included: string[];
  documents: string[];
  exam: {
    questions: number;
    errorsAllowed: number;
    format: string;
  };
  theoryProgram: string[];
  practicalProgram?: string[];
};

export const PERMITS: Record<PermitId, Permit> = {
  cotier: {
    id: "cotier",
    title: "Permis Mer Côtier",
    shortTitle: "Côtier",
    slug: "cotier",
    image: "/images/cotier.jpg",
    shortDesc: "Naviguez de jour comme de nuit jusqu'à 6 milles d'un abri (11 km), sans limite de puissance ni de taille de bateau.",
    longDesc: [
      "À partir de 16 ans, le permis côtier vous permet de naviguer de jour comme de nuit, dans la limite de 6 milles d'un abri soit 11 kilomètres, sans limite de puissance et en taille du bateau. Ce permis est valable à vie et dans l'international.",
      "Votre formation théorique et pratique s'effectuera en fonction de votre disponibilité (5 heures pour la formation théorique). Possibilité d'effectuer les cours le soir de 18h à 20h30 ou le weekend.",
    ],
    dispensation: "Quand un candidat possède son permis eaux intérieures (fluvial), il est dispensé de la pratique du permis Côtier.",
    ageMin: 16,
    validity: "À vie – Valable en international",
    area: "6 milles d'un abri (11 km)",
    hasPractical: true,
    included: [
      "Inscription (numéro OEDIPP)",
      "Livre de code",
      "Livret du candidat",
      "Cours en salle (soir ou week-end)",
      "Pratique de navigation (3h30)",
      "Tests en ligne illimités (e-learning)",
    ],
    documents: [
      "2 photos d'identité récentes en couleur (photomaton)",
      "1 photocopie d'une pièce d'identité",
      "Droits d'inscription de 30 € à régler directement au centre privé",
      "Timbres fiscaux d'une valeur de 78 € (achat en bureau de tabac ou sur timbres.impots.gouv.fr)",
      "Règlement de la formation",
      "1 certificat d'aptitude physique de moins de 6 mois (cerfa n°14673*01)",
      "Demande d'inscription à une option de base",
    ],
    exam: {
      questions: 40,
      errorsAllowed: 5,
      format: "QCM sur tablette dans un centre privé agréé. Résultat immédiat.",
    },
    theoryProgram: [
      "Le balisage des côtes, des plages et les pictogrammes",
      "L'initiation au système de balisage région B",
      "Les règles de barre et de route",
      "Les signaux phoniques de manœuvre, d'avertissement et par visibilité réduite",
      "Les signaux de détresse et météorologiques",
      "Les signaux régissant le trafic portuaire",
      "Les feux et marques des bateaux",
      "Les règles de navigation entre bateaux de plaisance et bateaux professionnels",
      "Les catégories de conception des bateaux marqués CE",
      "Le nombre de personnes ou la charge embarquée",
      "Les limitations de navigation et de vitesse, distance de sécurité",
      "La conduite en visibilité réduite",
      "Le matériel d'armement et de sécurité catégorie côtière",
      "Les pièces administratives à posséder à bord",
      "L'organisation du sauvetage en mer",
      "Notions élémentaires sur les communications radio",
      "Les règles du ski nautique et des engins tractés",
      "La responsabilité du chef de bord et ses conséquences juridiques",
      "Notions d'autonomie en matière de carburant",
      "La protection de l'environnement",
      "Interdiction de vente du poisson provenant de la pêche de loisir",
      "Réglementation de la pêche sous-marine",
      "La météorologie : prévisions, échelle de Beaufort, état de la mer",
      "Initiation à la lecture d'une carte marine",
      "Les règles d'utilisation des écluses gardées ou automatiques",
    ],
    practicalProgram: [
      "Maîtriser la mise en route du moteur",
      "Maîtriser la trajectoire",
      "Maîtriser la vitesse",
      "Maîtriser l'arrêt de la propulsion",
      "Maîtriser la marche arrière",
      "Maîtriser l'utilisation des alignements",
      "Arriver et partir d'un quai",
      "Prendre un coffre",
      "Mouiller / ancrer",
      "Récupérer une personne tombée à l'eau",
    ],
  },

  fluvial: {
    id: "fluvial",
    title: "Permis Eaux Intérieures (Fluvial)",
    shortTitle: "Fluvial",
    slug: "fluvial",
    image: "/images/fluvial.jpg",
    shortDesc: "Naviguez sur rivières, canaux, fleuves et lacs artificiels de jour comme de nuit, avec des bateaux jusqu'à 20 mètres.",
    longDesc: [
      "À partir de 16 ans, le permis eaux intérieures (fluvial) vous permet de naviguer sur les rivières, canaux, fleuves et lacs artificiels de jour comme de nuit avec des bateaux d'une longueur inférieure à 20 mètres, sans limitation de puissance. Ce permis est valable à vie et dans l'international.",
      "L'inscription (numéro OEDIPP), le livre de code et les tests en ligne illimités sont inclus dans le tarif.",
    ],
    note: "Entre Saint-Nazaire et Nantes, la Loire est un domaine fluvial et maritime. Après le pont Anne de Bretagne ou le pont des Trois Continents, elle devient fluviale.",
    dispensation: "Quand un candidat possède son permis mer côtier, il est dispensé de la pratique du permis eaux intérieures (fluvial).",
    prerequisite: "Original du permis mer requis si extension",
    ageMin: 16,
    validity: "À vie – Valable en international",
    area: "Rivières, canaux, fleuves, lacs – bateaux < 20 m",
    hasPractical: true,
    included: [
      "Inscription (numéro OEDIPP)",
      "Livre de code numérique",
      "Tests en ligne illimités (e-learning)",
    ],
    documents: [
      "1 photo d'identité récente en couleur (photomaton)",
      "1 photocopie d'une pièce d'identité",
      "Droits d'inscription de 30 € à régler directement au centre privé",
      "Règlement de la formation",
      "Demande d'inscription à une option de base",
      "L'original de votre permis mer (si extension)",
    ],
    exam: {
      questions: 40,
      errorsAllowed: 5,
      format: "QCM sur tablette dans un centre privé agréé. Résultat immédiat.",
    },
    theoryProgram: [
      "Les caractéristiques des voies et plans d'eau",
      "Le fonctionnement des écluses gardées, automatiques ou manuelles",
      "Le fonctionnement des barrages et les consignes de sécurité",
      "Les conditions de stationnement et d'amarrage",
      "La définition des termes en usage courants",
      "Le devoir de vigilance",
      "Les règles de route et de stationnement",
      "La signalisation visuelle et sonore, le balisage des voies navigables",
      "La signalisation des bateaux et les marques d'identification",
      "Les dispositions particulières aux menues embarcations",
      "Les notions sur l'organisation des services chargés des voies navigables",
      "Les notions élémentaires sur les règlements particuliers de police",
      "La réglementation relative au titre de conduite",
      "Le nombre de personnes ou la charge embarquée",
      "Mouiller / ancrer",
      "Récupérer une personne tombée à l'eau",
    ],
  },

  hauturier: {
    id: "hauturier",
    title: "Permis Mer Hauturier",
    shortTitle: "Hauturier",
    slug: "hauturier",
    image: "/images/hauturier.jpg",
    shortDesc: "Naviguez de jour comme de nuit, sans limite de distance, de puissance ni de taille de bateau, en France et à l'international.",
    longDesc: [
      "À partir de 16 ans, le permis hauturier vous permet de naviguer de jour comme de nuit, sans limite de distance, de puissance et de taille de bateau. Ce permis est valable à vie et dans l'international.",
      "C'est une extension du permis mer côtier, obtenue uniquement par les titulaires de ce permis. La formation est entièrement en autonomie : vous recevez le support pédagogique complet par courrier et préparez l'examen à votre rythme.",
    ],
    prerequisite: "Titulaires du permis mer côtier uniquement",
    ageMin: 16,
    validity: "À vie – Valable en international",
    area: "Sans limite de distance",
    hasPractical: false,
    included: [
      "Inscription (numéro OEDIPP)",
      "Livre de code hauturier",
      "Cahier d'exercices de navigation",
      "Carte marine n°9999 du SHOM",
      "Rapporteur de navigation",
      "Cours en vidéo",
    ],
    documents: [
      "2 photos d'identité récentes en couleur (photomaton)",
      "1 photocopie d'une pièce d'identité",
      "Timbres fiscaux d'une valeur de 38 € (achat en bureau de tabac ou sur timbres.impots.gouv.fr)",
      "Règlement de la formation",
      "Demande d'extension hauturière",
      "L'original de votre permis mer côtier",
    ],
    exam: {
      questions: 20,
      errorsAllowed: 3,
      format: "Épreuve écrite : QCM et exercices de calcul de navigation (carte, rapporteur, marées). Aucune épreuve pratique sur l'eau.",
    },
    theoryProgram: [
      "Les fondements de la navigation hauturière et côtière avancée",
      "L'utilisation des instruments de navigation (rapporteur, compas, calculatrice)",
      "La lecture et l'utilisation des cartes marines SHOM",
      "Le calcul de la marée (hauteur d'eau, heures de pleine et basse mer)",
      "La navigation à l'estime (cap, vitesse, courants)",
      "Les règles du RIPAM (Règlement International pour Prévenir les Abordages en Mer)",
      "La météorologie marine (fronts, dépressions, anticyclones)",
      "L'utilisation de l'échelle de Beaufort et des bulletins météo officiels",
      "Les courants marins et leur influence sur la navigation",
      "La navigation par visibilité réduite (brume, nuit)",
      "Les communications radio longue distance (VHF, EPIRB, SART)",
      "La sécurité et la survie en mer (équipements, procédures)",
      "Les signaux de détresse et les procédures SAR",
      "L'avitaillement et la gestion de l'autonomie du bord",
      "Les réglementations internationales et françaises en navigation hauturière",
    ],
  },
};

export const PERMIT_LIST: Permit[] = Object.values(PERMITS);
