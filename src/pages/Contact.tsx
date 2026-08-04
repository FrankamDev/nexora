import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
  User,
  Building2,
} from "lucide-react";
import { Navbar } from "../components/Navbar";

// ================= VALIDATION =================
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(80, "Nom trop long"),
  phone: z
    .string()
    .min(9, "Numéro trop court")
    .regex(/^[0-9+\s-]{9,15}$/, "Numéro de téléphone invalide"),
  email: z
    .string()
    .email("Adresse email invalide")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(800, "Message trop long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ================= COMPONENT =================
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // validation en temps réel
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    // Petit délai pour le loader
    await new Promise((res) => setTimeout(res, 1400));

    // Message WhatsApp bien formaté
    const whatsappMessage = `
*🛡️ Nouvelle demande - NEXORA*

━━━━━━━━━━━━━━━━━━━━
*👤 Nom complet*
${data.fullName}

*📱 Téléphone*
${data.phone}

${data.email ? `*📧 Email*\n${data.email}\n` : ""}
*🛠️ Service demandé*
${data.service}

*💬 Message*
${data.message}
━━━━━━━━━━━━━━━━━━━━

_Envoyé depuis le site NEXORA_
    `.trim();

    const phoneNumber = "237690372977";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    // Ouvre WhatsApp
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    reset();

    // Remet le formulaire après quelques secondes
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-28 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-500"
    >
        <Navbar />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#222226_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-5">
            <MessageSquare size={14} className="text-emerald-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] uppercase text-zinc-500 dark:text-zinc-400">
              Contactez-nous
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight mb-4">
            Besoin d’une{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              intervention rapide
            </span>{" "}
            ?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-xl mx-auto">
            Remplissez le formulaire, nous vous recontactons rapidement ou
            ouvrez directement WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Infos de contact */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                Nos coordonnées
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                      Zone d’intervention
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Yaoundé & Douala
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                      Téléphone / WhatsApp
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      690 37 29 77
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                      Email
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      contact.nexora.cm@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Intervention d’urgence sous 2h • Garantie 3 mois • Produits
                  certifiés
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                      WhatsApp s’est ouvert avec votre demande. Nous vous
                      répondrons très rapidement.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Nom */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                        />
                        <input
                          {...register("fullName")}
                          placeholder="Ex: Frank Kamgang"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName
                              ? "border-red-500 focus:ring-red-500/30"
                              : dirtyFields.fullName && !errors.fullName
                                ? "border-emerald-500 focus:ring-emerald-500/30"
                                : "border-zinc-200 dark:border-zinc-800 focus:ring-emerald-500/30"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Téléphone + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                          Téléphone *
                        </label>
                        <div className="relative">
                          <Phone
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                          />
                          <input
                            {...register("phone")}
                            placeholder="690 37 29 77"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-500/30"
                                : dirtyFields.phone && !errors.phone
                                  ? "border-emerald-500 focus:ring-emerald-500/30"
                                  : "border-zinc-200 dark:border-zinc-800 focus:ring-emerald-500/30"
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                          Email (optionnel)
                        </label>
                        <div className="relative">
                          <Mail
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                          />
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="contact.nexora.cm@gmail.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? "border-red-500 focus:ring-red-500/30"
                                : dirtyFields.email && !errors.email
                                  ? "border-emerald-500 focus:ring-emerald-500/30"
                                  : "border-zinc-200 dark:border-zinc-800 focus:ring-emerald-500/30"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Service demandé *
                      </label>
                      <div className="relative">
                        <Building2
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                        />
                        <select
                          {...register("service")}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${
                            errors.service
                              ? "border-red-500 focus:ring-red-500/30"
                              : dirtyFields.service && !errors.service
                                ? "border-emerald-500 focus:ring-emerald-500/30"
                                : "border-zinc-200 dark:border-zinc-800 focus:ring-emerald-500/30"
                          }`}
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="Dératisation">Dératisation</option>
                          <option value="Désinsectisation">
                            Désinsectisation
                          </option>
                          <option value="Désinfection">Désinfection</option>
                          <option value="Prévention & Suivi">
                            Prévention & Suivi
                          </option>
                          <option value="Urgence">
                            Intervention d’urgence
                          </option>
                        </select>
                      </div>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Votre message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Décrivez votre problème (type de nuisible, lieu, urgence...)"
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500/30"
                            : dirtyFields.message && !errors.message
                              ? "border-emerald-500 focus:ring-emerald-500/30"
                              : "border-zinc-200 dark:border-zinc-800 focus:ring-emerald-500/30"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Bouton */}
                    <motion.button
                      type="submit"
                      disabled={status === "loading" || !isValid}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Ouverture de WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Envoyer via WhatsApp
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
