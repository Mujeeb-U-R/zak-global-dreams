import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CalendarDays, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useApplyModal } from "@/components/site/ApplyModalProvider";
import { VISA_CATALOG, COUNTRY_FLAG } from "@/lib/site";
import portfolioHero from "@/assets/portfolio-hero.jpg.asset.json";
import { COUNTRY_IMAGE } from "@/assets/country";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Visa Portfolio & Routes — ZAK Consultants" },
      { name: "description", content: "Explore work permits, visit visas, group tours and student visa routes across Kyrgyzstan, Turkey, Schengen, U.S.A, Canada, U.K and more." },
      { property: "og:title", content: "Visa Portfolio & Routes" },
      { property: "og:description", content: "Filterable directory of every visa route we process." },
    ],
  }),
  component: PortfolioPage,
});

const TABS = ["All", ...VISA_CATALOG.map((c) => c.category)] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const { open } = useApplyModal();

  const cards = (active === "All" ? VISA_CATALOG : VISA_CATALOG.filter((c) => c.category === active))
    .flatMap((cat) =>
      cat.countries.map((country) => ({
        country,
        category: cat.category,
        processing: cat.processing,
        duration: cat.duration,
      })),
    );

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pb-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]">
          <img
            src={portfolioHero.url}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative pt-12">
          <SectionHeading
            eyebrow="Visa Portfolio"
            title={<>Every <span className="text-gold-gradient italic">route</span> we file, in one place</>}
            intro="Filter by category to see the destinations we actively process. Each card opens a tailored assessment."
          />

          {/* OPTIMIZED: Applied crisp horizontal touch scroll padding for clean, un-stacked mobile filter selections */}
          <div className="mt-12 flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 scrollbar-none">
            {TABS.map((t) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={t}
                onClick={() => setActive(t)}
                className={`relative rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition whitespace-nowrap active:scale-95 ${
                  active === t
                    ? "border-gold/60 bg-gold/10 text-gold gold-glow"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground active:bg-white/5"
                }`}
              >
                {t}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {cards.map((c) => {
                const imageSource = COUNTRY_IMAGE[c.country] || COUNTRY_IMAGE[c.country.toLowerCase()];

                return (
                  <motion.article
                    key={`${c.category}-${c.country}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    
                    // OPTIMIZED: Replaced raw hover layout translations with tactile mobile tap-scaling models
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    
                    className="group relative overflow-hidden rounded-[32px] border border-white/10 p-7 transition-all duration-500 shadow-2xl min-h-[380px] flex flex-col justify-between select-none"
                    style={{ backgroundColor: "#060a12" }}
                  >
                    {/* BACKGROUND LAYER MATRIX */}
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[32px]">
                      {imageSource && (
                        <img
                          src={imageSource}
                          alt=""
                          aria-hidden="true"
                          width={768}
                          height={512}
                          loading="eager"
                          style={{ opacity: 0.65 }}
                          className="h-full w-full object-cover transition-opacity duration-500 group-hover:!opacity-85 transform scale-100 group-hover:scale-105 duration-700"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                    </div>

                    {/* FOREGROUND INTERFACE MATRIX */}
                    <div className="relative z-20 flex flex-col justify-between h-full w-full flex-1">
                      
                      {/* TOP ROW */}
                      <div className="flex items-center justify-between w-full">
                        <span className="text-4xl drop-shadow-md">{COUNTRY_FLAG[c.country] ?? "🌐"}</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gold pointer-events-none font-mono bg-slate-950/90 px-3 py-1 rounded-full border border-white/10">
                          {c.category}
                        </span>
                      </div>

                      {/* BOTTOM DATA MATRIX */}
                      <div className="relative mt-auto pt-16">
                        <h3 className="font-display text-3xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                          {c.country}
                        </h3>

                        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs">
                          <div>
                            <dt className="flex items-center gap-1.5 text-slate-200 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                              <Clock className="h-3.5 w-3.5 text-gold shrink-0" />
                              Processing
                            </dt>
                            <dd className="mt-1 text-white text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{c.processing}</dd>
                          </div>
                          <div>
                            <dt className="flex items-center gap-1.5 text-slate-200 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                              <CalendarDays className="h-3.5 w-3.5 text-gold shrink-0" />
                              Duration
                            </dt>
                            <dd className="mt-1 text-white text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{c.duration}</dd>
                          </div>
                        </dl>

                        {/* OPTIMIZED: Sized baseline target and mapped full interactive click tracking directly */}
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={() => open({ destination: c.country, category: c.category })}
                          className="relative mt-6 inline-flex w-full items-center justify-between rounded-full border border-gold/60 bg-slate-950/90 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-white active:bg-gold active:text-white hover:shadow-[0_4px_20px_rgba(184,137,57,0.4)]"
                        >
                          Check Eligibility
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                      </div>

                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
}