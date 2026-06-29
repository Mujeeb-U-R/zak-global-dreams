import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";
import { VISA_CATALOG } from "@/lib/site";

const schema = z.object({
  firstName: z.string().trim().min(2, "Please enter your first name").max(50),
  lastName: z.string().trim().min(2, "Please enter your last name").max(50),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  destination: z.string().trim().min(2).max(60),
  category: z.enum(["Work Permit", "Visit Visa", "Group Tour + Visit Visa", "Student Visa"]),
  employment: z.enum(["Employed", "Business Owner", "Student"]),
  bankStatement: z.enum(["Yes", "No"]),
});

const CATEGORIES = ["Work Permit", "Visit Visa", "Group Tour + Visit Visa", "Student Visa"] as const;
const EMPLOYMENT = ["Employed", "Business Owner", "Student"] as const;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preset?: { destination?: string; category?: string };
}

export function ApplyModal({ isOpen, onClose, preset }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    destination: "",
    category: "Visit Visa" as (typeof CATEGORIES)[number],
    employment: "Employed" as (typeof EMPLOYMENT)[number],
    bankStatement: "Yes" as "Yes" | "No",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  useEffect(() => {
    if (isOpen && preset) {
      setForm((f) => ({
        ...f,
        destination: preset.destination ?? f.destination,
        category: (CATEGORIES as readonly string[]).includes(preset.category ?? "")
          ? (preset.category as (typeof CATEGORIES)[number])
          : f.category,
      }));
    }
  }, [isOpen, preset]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleFormspreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    
    setErrors({});
    setFormStatus("SUBMITTING");

    const { firstName, lastName, ...rest } = result.data;
    const computedFullName = `${firstName} ${lastName}`.trim();

    try {
      const response = await fetch("https://formspree.io/f/mjgqoevn", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: computedFullName,
          ...rest
        }),
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          destination: "",
          category: "Visit Visa",
          employment: "Employed",
          bankStatement: "Yes",
        });
        
        setTimeout(() => {
          setFormStatus("IDLE");
          onClose();
        }, 2500);
      } else {
        setFormStatus("ERROR");
      }
    } catch (err) {
      console.error("Formspree data transmission failed:", err);
      setFormStatus("ERROR");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-none glass-panel-strong rounded-3xl p-6 sm:p-10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Close Button Trigger */}
            <motion.button
              whileTap={{ scale: 0.90 }}
              onClick={onClose}
              className="absolute right-4 top-4 z-50 p-2.5 rounded-full border border-white/10 bg-slate-900/95 text-gold shadow-md backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-foreground flex items-center justify-center"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* --- FIXED VIEWPORT POPUP OVERLAY PANEL FOR SUCCESS STATES --- */}
            <AnimatePresence>
              {formStatus === "SUCCESS" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-[60] bg-slate-950/95 backdrop-blur-lg flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  >
                    <CheckCircle className="h-8 w-8 stroke-[1.5]" />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-medium tracking-tight px-4">
                    Form sent successfully!
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 max-w-sm font-light leading-relaxed px-6">
                    Your assessment portfolio has been routed to our compliance desk. A senior consultant will follow up shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Form Fields Container */}
            <div className="overflow-y-auto pr-2 sm:pr-0 scrollbar-thin w-full flex-1">
              <header className="mb-8 pr-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Visa Assessment</p>
                <h2 className="mt-3 font-display text-2xl text-foreground sm:text-4xl">
                  Begin your <span className="text-gold-gradient">journey</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share your background metrics. Our compliance unit will assess your credentials and dispatch strategy data straight to your email inbox.
                </p>
              </header>

              <form onSubmit={handleFormspreeSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" error={errors.firstName}>
                  <input
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    className="input-base text-base"
                  />
                </Field>

                <Field label="Last Name" error={errors.lastName}>
                  <input
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    className="input-base text-base"
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    type="tel"
                    placeholder="+92 3xx xxxxxxx"
                    className="input-base text-base"
                  />
                </Field>

                <Field label="Destination Country" error={errors.destination}>
                  <input
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    list="dest-list"
                    placeholder="e.g. Turkey"
                    className="input-base text-base"
                  />
                  <datalist id="dest-list">
                    {VISA_CATALOG.flatMap((c) => c.countries).map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </Field>

                <Field label="Visa Category">
                  <select 
                    value={form.category} 
                    onChange={(e) => update("category", e.target.value as (typeof CATEGORIES)[number])} 
                    className="input-base text-base bg-slate-900"
                  >
                    {CATEGORIES.map((c) => <option key={c} className="bg-slate-900">{c}</option>)}
                  </select>
                </Field>

                <Field label="Employment Status">
                  <select 
                    value={form.employment} 
                    onChange={(e) => update("employment", e.target.value as (typeof EMPLOYMENT)[number])} 
                    className="input-base text-base bg-slate-900"
                  >
                    {EMPLOYMENT.map((c) => <option key={c} className="bg-slate-900">{c}</option>)}
                  </select>
                </Field>

                <Field label="6-Month Bank Statement Available?" className="sm:col-span-2">
                  <div className="flex gap-3">
                    {(["Yes", "No"] as const).map((v) => (
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        key={v}
                        type="button"
                        onClick={() => update("bankStatement", v)}
                        className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                          form.bankStatement === v
                            ? "border-gold/60 bg-gold/10 text-gold"
                            : "border-white/10 text-muted-foreground"
                        }`}
                      >
                        {v}
                      </motion.button>
                    ))}
                  </div>
                </Field>

                <div className="sm:col-span-2 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 pb-2">
                  <div className="text-center sm:text-left min-h-[32px] flex items-center">
                    {formStatus === "ERROR" && (
                      <p className="text-xs text-rose-400 font-medium">
                        Transmission error. Please verify fields and try again.
                      </p>
                    )}
                    {formStatus === "SUBMITTING" && (
                      <p className="text-xs text-amber-400 font-medium animate-pulse">
                        Encrypting portfolio records...
                      </p>
                    )}
                  </div>
                  
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={formStatus === "SUBMITTING"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 gold-glow transition-all disabled:opacity-50"
                  >
                    {formStatus === "SUBMITTING" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    Submit Profile
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label, error, className, children,
}: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-2 w-full ${className ?? ""}`}>
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive font-medium mt-0.5">{error}</span>}
    </label>
  );
}