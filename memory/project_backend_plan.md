---
name: project-backend-plan
description: Stack backend choisie et workflow d'intégration prévu pour le site Bateau Ecole de la Loire
metadata:
  type: project
---

Stack recommandée (non encore implémentée) : Supabase + Stripe + Resend, tout intégré dans Next.js via server actions et webhooks — pas de backend séparé.

**Pourquoi:** Simple à déployer sur Vercel, pas de serveur Express/Laravel à maintenir, les trois services ont une intégration native Next.js.

**Composants:**
- Supabase → DB PostgreSQL + auth élève + stockage PDF
- Stripe → paiement + webhooks (déclenchement accès après paiement validé)
- Resend → emails transactionnels (confirmation, accès e-learning, notif admin)

**Flow cible:**
1. Clic "S'inscrire" → `/checkout?offer=<id>`
2. Formulaire infos élève + paiement Stripe
3. Webhook Stripe → création compte + envoi email accès
4. Élève accède au dashboard `/dashboard`

**Ordre d'implémentation prévu:**
1. Auth (Supabase auth + `/login`)
2. Checkout (Stripe Checkout Session depuis server action)
3. Webhook (`/api/stripe/webhook`)
4. Dashboard élève

**État actuel (2026-06-05):** Pas d'infra backend — frontend seul. Boutons "S'inscrire" pointent vers `/dashboard` en placeholder. Pages terminées : `/`, `/contact`, `/candidat-libre`, `/tarifs`.

**How to apply:** Quand l'utilisateur parle d'ajouter le backend, proposer de commencer par l'auth Supabase puis le checkout Stripe dans cet ordre.
