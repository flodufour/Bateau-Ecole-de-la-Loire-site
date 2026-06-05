"use client";

import { useActionState } from "react";
import Button from "@/components/ui/Button";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { success: false };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-64 rounded-2xl border border-green-200 bg-green-50 p-10 gap-4">
        <CheckCircleIcon />
        <h3 className="text-lg font-semibold text-green-800">Message envoyé !</h3>
        <p className="text-sm text-green-700">
          Merci, nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Envoyez-nous un message</h2>

      <form action={formAction} noValidate className="space-y-5">
        {state.error && (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {state.error}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Nom complet <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Jean Dupont"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Adresse e-mail <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jean@exemple.fr"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
            Sujet <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Renseignements sur les permis..."
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Votre message..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-150 cursor-pointer bg-blue-700 text-white hover:bg-blue-800 border border-blue-700 px-7 py-3.5 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Envoi en cours…" : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="h-14 w-14 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
