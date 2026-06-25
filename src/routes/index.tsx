"use client";

import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Plane, ShieldCheck, Award, ArrowRight, Star, Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { ApplyButton } from "@/components/site/ApplyButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SITE, VISA_CATALOG } from "@/lib/site";
import heroPoster from "@/assets/hero-poster.jpg";
import ctaBg from "@/assets/cta-bg.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZAK Consultants — Global Visa Solutions" },
      { property: "og:image", content: SITE.logo },
      { name: "description", content: SITE.tagline + " Work permits, visit, student and group tour visas processed from Peshawar." },
      { property: "og:title", content: "ZAK Consultants — Global Visa Solutions" },
      { property: "og:description", content: SITE.tagline },
    ],
  }),
  component: HomePage,
});

const TITLE_WORDS = ["Your", "Trusted", "Partner", "for", "Global", "Visa", "Solutions"];

const HOMEPAGE_REVIEWS = [
  { name: "Hamza R.", route: "Turkey Work Permit", text: "From profiling to embassy submission, every step felt deliberate. Approval came within the timeline they predicted." },
  { name: "Sana A.", route: "U.K Student Visa", text: "They restructured my SOP and financials in two evenings. The visa landed first attempt." },
  { name: "Bilal K.", route: "Schengen Visit Visa", text: "Calm, professional, and brutally precise with documentation. Worth every minute of the consultation." },
  { name: "Zainab M.", route: "Canada Student Route", text: "The cross-checking system they used for my study gap explanation made all the difference. Outstanding communication." },
  { name: "Asif J.", route: "Kyrgyzstan Work permit", text: "They cleared up all the regulatory confusion regarding our corporate group paperwork. Highly transparent and reliable." },
  { name: "Maryam N.", route: "Schengen Tourist Visa", text: "Honest advice on bank statement timelines. They won't file unless they know your matrix meets the threshold." },
];

function HomePage() {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-hidden">
        <Hero />
        <Metrics />
        <Categories />
        <ClientTicker />
        <ClosingCTA />
      </div>
    </Layout>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Programmatically force video playback to bypass browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay optimization caught restriction:", err);
      });
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY || 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const fadeDistance = 360; 
  const fade = Math.max(0, Math.min(1, 1 - scrollY / fadeDistance));

  return (
    <section className="relative -mt-24 flex min-h-[100svh] items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          {...{ "webkit-playsinline": "true" }}
          className="h-full w-full object-cover"
          style={{ opacity: Math.max(0.12, fade) }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 transition-opacity duration-200"
        style={{ opacity: fade }}
      >
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <img
            src={SITE.logo}
            alt="ZAK Consultants logo"
            className="h-14 w-14 rounded-full border-2 border-gold/40 object-contain bg-transparent p-1"
            width={56}
            height={56}
          />
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
            {SITE.legal}
          </p>
        </motion.div>

        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.02] text-foreground sm:text-7xl md:text-[5.5rem]">
          {TITLE_WORDS.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {w === "Global" || w === "Visa" ? (
                <span className="text-gold-gradient italic">{w}</span>
              ) : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground"
        >
          A registered Peshawar-based consultancy delivering meticulous case preparation, legal
          documentation and personal advisory for clients pursuing life beyond borders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <ApplyButton label="Apply Now" />
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground"
          >
            Explore Routes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <span className="hidden sm:inline text-white/10">|</span>

          <a
            href="/faq"
            className="text-sm uppercase tracking-[0.25em] text-gold/85 transition hover:text-gold hover:underline underline-offset-4"
          >
            Read FAQs
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function Metrics() {
  const items = [
    { icon: Award, value: 99, suffix: "%", label: "Visa Approval Rate" },
    { icon: Plane, value: 2000, suffix: "+", label: "Successful Applications" },
    { icon: ShieldCheck, value: 1, suffix: "", label: "Registered Pvt. Ltd. Firm" },
  ];
  return (
    <section className="relative py-28 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#b8893903_1px,transparent_1px),linear-gradient(to_bottom,#b8893903_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#b88939]/[0.03] rounded-full filter blur-3xl z-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-px overflow-hidden rounded-3xl border border-white/5 glass-panel sm:grid-cols-3"
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="group relative bg-slate-950/40 p-10 transition hover:bg-slate-900/60"
            >
              <it.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
              <div className="mt-6 flex items-baseline gap-1 font-display text-6xl text-gold-gradient">
                <Counter target={it.value} />
                <span>{it.suffix}</span>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">{it.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

function Categories() {
  return (
    <section className="relative py-28 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] w-full opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150C300 450 650 -50 1100 250C1350 400 1500 200 1600 100" stroke="#b88939" strokeWidth="1.2" strokeDasharray="6 6" />
          <path d="M-50 220C350 520 700 20 1150 320C1400 470 1550 270 1650 170" stroke="#b88939" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute right-[-10%] bottom-[5%] w-[400px] h-[400px] rounded-full border border-[#b88939]/[0.05] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Our Practice"
            title={
              <span 
                className="block bg-cover bg-center bg-no-repeat rounded-2xl px-6 py-4 border border-slate-200/60 shadow-md overflow-hidden my-2 bg-white/40 backdrop-blur-sm"
                style={{ backgroundImage: "url('/title_bg.jpg')" }}
              >
                <span className="block text-slate-900 text-3xl md:text-5xl font-light tracking-tight leading-tight">
                  Four <span className="text-[#b88939] italic font-normal">disciplined</span> routes to the world
                </span>
              </span>
            }
            intro="Every case is structured, profiled and prepared to embassy-grade standards by our consultancy team."
          />
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {VISA_CATALOG.map((c, i) => {
            const localBgImages = [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQFTSXlcdilGU0B_6vmrrRo6fcTJPh2Ie1JHf4Mkvr2TpFHdwqAWrK08y&s=10", 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFDnn1PFvQ1FuvfXacFdMyESLHR-M2aJPomoIQESslKM_-8i769nZ6z8&s=10", 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInVUHz008Hgktt9rpUfW2SLRpuCQOA-cLQnk0qzNiqVhqZVw2-aIp0Jg&s=10", 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF7XmqfWADBK7fAXrVRe272uinEiCZ-u-eN5VF234zKlha8PIwoGtYd6U&s=10"  
            ];

            const currentBg = localBgImages[i] || localBgImages[0];

            return (
              <motion.a
                key={c.category}
                href="/portfolio"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                
                // Optimized interactive states for cross-device support (desktop hover & mobile tap)
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                
                className="group relative overflow-hidden rounded-[28px] border border-white/10 p-8 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(184,137,57,0.15)] flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                  <img 
                    src={currentBg} 
                    alt="" 
                    style={{ opacity: 0.65 }}
                    className="h-full w-full object-cover transition-opacity duration-500 group-hover:!opacity-85 transform scale-100 group-hover:scale-105 duration-700" 
                  />
                </div>
                
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/30 to-slate-950/90 transition-colors duration-500 group-hover:from-slate-950/60 group-hover:via-slate-950/20 group-hover:to-slate-950/85" />

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400 group-hover:text-white/70 transition-colors duration-300">
                      0{i + 1}
                    </p>
                    <div className="p-2 rounded-full border border-white/10 bg-slate-900/40 text-gold transition-all duration-500 transform group-hover:rotate-45 group-hover:bg-gold group-hover:text-slate-950 group-hover:border-transparent">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="mt-6 font-display text-3xl text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    {c.category}
                  </h3>
                  <p className="mt-3 font-serif italic text-sm font-light text-slate-200 group-hover:text-white transition-colors duration-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {c.tagline}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 items-center pt-4 border-t border-white/10">
                  {c.countries.slice(0, 5).map((co) => (
                    <span 
                      key={co} 
                      className="rounded-full bg-slate-950/80 text-slate-300 border border-white/5 px-3 py-1 text-xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-white/10 transition-all duration-300"
                    >
                      {co}
                    </span>
                  ))}
                  {c.countries.length > 5 && (
                    <span className="rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 text-xs font-medium group-hover:bg-gold group-hover:text-slate-950 transition-all duration-300">
                      +{c.countries.length - 5} more
                    </span>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClientTicker() {
  return (
    <section className="relative py-12 overflow-hidden bg-transparent border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <SectionHeading
          eyebrow="Reviews"
          title={<>Client <span className="text-gold-gradient italic">Trust</span></>}
        />
      </div>

      <div className="relative flex w-full items-center overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 move-reverse-track animate-marquee whitespace-nowrap min-w-full">
          {[...HOMEPAGE_REVIEWS, ...HOMEPAGE_REVIEWS].map((r, i) => (
            <div
              key={i}
              className="inline-block w-[360px] shrink-0 rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-sm p-6 whitespace-normal"
            >
              <Quote className="h-5 w-5 text-gold/50" />
              <p className="mt-4 font-serif text-sm leading-relaxed italic text-foreground">
                "{r.text}"
              </p>
              
              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                <div>
                  <div className="text-foreground font-medium">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{r.route}</div>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .move-reverse-track {
          animation: marquee 42s linear infinite;
          animation-direction: reverse;
        }
        .move-reverse-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 glass-panel-strong p-12 text-center sm:p-20"
        >
          <img
            src={ctaBg.url}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90" />
          <div className="absolute inset-x-0 top-0 hairline" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Begin Today</p>
          <h2 className="mt-5 font-display text-4xl text-foreground sm:text-6xl">
            Your <span className="text-gold-gradient italic">passport</span>, our craft.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic text-muted-foreground">
            A single conversation. A senior consultant. A clear path forward.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ApplyButton />
            <a
              href="/faq"
              className="rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Read Portal FAQs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}