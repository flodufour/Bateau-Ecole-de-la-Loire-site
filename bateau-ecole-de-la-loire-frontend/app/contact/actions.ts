"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { success: false, error: "Veuillez indiquer votre nom (2 caractères minimum)." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Veuillez saisir une adresse e-mail valide." };
  }
  if (!subject || subject.length < 3) {
    return { success: false, error: "Veuillez indiquer un sujet (3 caractères minimum)." };
  }
  if (!message || message.length < 10) {
    return { success: false, error: "Votre message doit contenir au moins 10 caractères." };
  }

  // TODO: Integrate a transactional email service (e.g. Resend, Nodemailer)
  console.log("Contact form submission:", { name, email, subject, message });

  return { success: true };
}
