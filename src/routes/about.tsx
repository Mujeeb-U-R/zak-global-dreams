import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FileText, ScrollText, UserCheck, Briefcase, Users2, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ApplyButton } from "@/components/site/ApplyButton";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Legacy & Team — ZAK Consultants" },
      { name: "description", content: "Meticulous case preparation, legal documentation handling, and structured profiling built on trust." },
    ],
  }),
  component: AboutPage,
});

const HERO_TITLE_WORDS = ["A", "discipline", "built", "on", "trust,", "evidence", "and", "precise", "paperwork."];

function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <OurCompany />
      <OurLegacy />
      <OurTeam />
    </Layout>
  );
}

{/* --- 1. HERO: CINEMATIC DARK ASPECT MATCHING HOMEPAGE HERO --- */}
function AboutHero() {
  return (
    <section className="relative -mt-24 flex min-h-[70svh] items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img
          src={aboutHero}
          alt="ZAK Corporate Background"
          className="h-full w-full object-cover opacity-90 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-20">
        <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Our Practice</span>
        
        {/* Exact same premium typography dynamic blur reveal animation from Homepage */}
        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.05] text-white sm:text-7xl md:text-[5rem] tracking-tight">
          {HERO_TITLE_WORDS.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {w === "trust," || w === "evidence" || w === "precise" ? (
                <span className="text-gold-gradient italic">{w}</span>
              ) : w}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}

{/* --- 2. OUR COMPANY: CLEAN LAYOUT BALANCING SLATE TEXTS --- */}
function OurCompany() {
  return (
    <section className="relative py-28 bg-transparent">
      <div className="mx-auto max-w-7xl gap-16 px-6 grid lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Who we are"
            title={<>Built for the modern <span className="text-[#b88939] italic">global citizen</span></>}
          />
        </div>
        <div className="lg:col-span-7 space-y-6">
          {/* Using text-slate-600 to perfectly match the category tagline color weight on Home */}
          <p className="font-serif text-xl italic leading-relaxed text-slate-600 font-light">
            ZAK Consultants (Pvt.) Ltd. is a registered private limited firm headquartered at GS Tower, Ring Road, Peshawar. We operate at the intersection of legal documentation, embassy procedure, and personal advisory—turning ambiguous visa journeys into structured outcomes.
          </p>
          <p className="font-serif text-xl italic leading-relaxed text-slate-600 font-light">
            Every client engagement begins with profiling, continues through evidence assembly, and is closed with a defensible submission. We do not promise miracles; we deliver the case your file always deserved.
          </p>
        </div>
      </div>
    </section>
  );
}

{/* --- 3. OUR LEGACY: METRIC SYSTEM GLASSPANEL NODES --- */}
function OurLegacy() {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-gold">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mt-2">Our Operational Journey</h2>
        </div>

        {/* Dynamic sliding line entry animation matching home lists */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
          {[
            { year: "Phase I", title: "The Advisory Inception", desc: "Formed as a specialized dossier execution unit to serve regional high-net-worth individuals navigating tier-1 global visa pathways." },
            { year: "Phase II", title: "Corporate Hardening", desc: "Formally chartered as ZAK Consultants (Pvt.) Ltd., standardizing operations across a state-of-the-art advisory ecosystem." },
            { year: "Phase III", title: "Embassy Link Integration", desc: "Achieved 98.4% validation consistency by establishing strict, in-house verification audits before submission layers." }
          ].map((milestone, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#b88939] group-hover:bg-[#b88939] transition-all duration-300 shadow-[0_0_10px_rgba(184,137,57,0.3)]" />
              <div className="md:absolute md:-left-36 md:top-0 font-mono text-sm font-semibold text-[#b88939] mb-1 md:mb-0">
                {milestone.year}
              </div>
              <div className="max-w-3xl">
                <h3 className="text-xl text-slate-900 font-medium group-hover:text-[#b88939] transition-colors duration-300">{milestone.title}</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed font-light">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* --- 4. OUR TEAM: INTERACTIVE CARDS POPPING FROM WHITE-CREAM INTO PREMIUM HEX GOLD --- */}
function OurTeam() {
  return (
    <section className="relative py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-gold">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 mt-2">The Advisory Council</h2>
          <p className="text-slate-600 mt-3 text-sm max-w-md mx-auto font-light">Senior partners driving legal documentation strategy and cross-border alignment matrixes.</p>
        </div>

        {/* Identical Interactive Configuration to your home cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {[
            { name: "Mujeeb Ur Rehman", role: "Managing Director", strategy: "Sovereign Pathways & Corporate Strategy" },
            { name: "Muzamil Shiraz", role: "Partner & Head of Risk Management", strategy: "Legal Evidence Assembly & Profiling Architecture" },
            { name: "Abdul Rafhay Hussain", role: "Chief Operational Advisory", strategy: "Global Mobility Solutions & Verification Frameworks" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              
              className="group relative overflow-hidden rounded-[28px] border border-[#b88939]/10 bg-white/70 backdrop-blur-md p-8 transition-all duration-500 ease-out hover:bg-[#b88939] hover:border-[#b88939] hover:shadow-[0_20px_50px_rgba(184,137,57,0.3)] hover:-translate-y-1 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="aspect-[4/5] w-full rounded-2xl bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-400 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white/60 transition-all duration-500">
                  <Users2 className="w-10 h-10 stroke-[0.75]" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-slate-900 group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#b88939] group-hover:text-white/80 transition-colors duration-300 mt-1">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 border-t border-slate-200/60 pt-4 mt-6 italic font-light group-hover:text-white/90 group-hover:border-white/20 transition-all duration-500">
                Focus: {member.strategy}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-serif text-3xl italic text-slate-900 sm:text-4xl font-light leading-snug">
            “Secure the case your global legacy always deserved.”
          </p>
          <div className="mt-10 flex justify-center"><ApplyButton /></div>
        </div>
      </div>
    </section>
  );
}