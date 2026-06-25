import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Success Gallery — ZAK Consultants" },
      { name: "description", content: "Approved visa stickers, client reviews and global travel moments from ZAK Consultants clients." },
      { property: "og:title", content: "Success Gallery" },
      { property: "og:description", content: "Real outcomes, real travelers." },
    ],
  }),
  component: GalleryPage,
});

const GRID = [
  { 
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", 
    h: "row-span-2", 
    label: "Schengen Visa — Approved" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvF6i6EvIz5nWFMqnnZSoOV2ZwaLEQxFSl2_9RtfYDa8e507mQH92nOkd2&s=10", 
    h: "", 
    label: "Premium Lounge — Istanbul" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXISipfyA9YnH-HfSCRHEu3MQGwfAax3NiFDvMZSqY72saE9chmqtUckxE&s=10", 
    h: "", 
    label: "Bosphorus — Türkiye Tour" 
  },
  { 
    src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", 
    h: "row-span-2", 
    label: "Business Travel — Singapore" 
  },
  { 
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", 
    h: "", 
    label: "U.K Student Visa — Granted" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3Z9pH13XcqMi-CilpcmKnt2eNW8WAIPQQXbtaFgtrRbR5eFJybl6WmY&s=10", 
    h: "", 
    label: "Group Tour — Morocco" 
  },
];

const REVIEWS = [
  { name: "Hamza R.", route: "Turkey Work Permit", text: "From profiling to embassy submission, every step felt deliberate. Approval came within the timeline they predicted." },
  { name: "Sana A.", route: "U.K Student Visa", text: "They restructured my SOP and financials in two evenings. The visa landed first attempt." },
  { name: "Bilal K.", route: "Schengen Visit Visa", text: "Calm, professional, and brutally precise with documentation. Worth every minute of the consultation." },
  { name: "Zainab M.", route: "Canada Student Route", text: "The cross-checking system they used for my study gap explanation made all the difference. Outstanding communication." },
  { name: "Asif J.", route: "Kyrgyzstan Work permit", text: "They cleared up all the regulatory confusion regarding our corporate group paperwork. Highly transparent and reliable." },
  { name: "Maryam N.", route: "Schengen Tourist Visa", text: "Honest advice on bank statement timelines. They won't file unless they know your matrix meets the threshold." },
];

function GalleryPage() {
  return (
    <Layout>
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-6 pt-12">
          <SectionHeading
            eyebrow="Success Gallery"
            title={<>Outcomes that <span className="text-gold-gradient italic">travel</span> with you</>}
            intro="A curated look at approved files and the journeys they unlocked. Personal data is obscured for privacy."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GRID.map((it, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 ${it.h}`}
              >
                <img src={it.src} alt={it.label} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-gold">{it.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Client Voices"
            title={<>Words from <span className="text-gold-gradient italic">travelers</span></>}
          />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                // OPTIMIZED: Applied high-contrast creamy white card styles and dark stone text parameters directly
                className="relative rounded-[32px] bg-[#fdfbf7] border border-stone-200 p-8 shadow-2xl flex flex-col justify-between text-slate-900 select-none min-h-[240px]"
              >
                <div>
                  <Quote className="h-7 w-7 text-amber-600/20 stroke-[1.5]" />
                  <p className="mt-4 font-serif text-base leading-relaxed italic text-stone-800">"{r.text}"</p>
                </div>
                
                <footer className="mt-7 flex items-center justify-between border-t border-stone-200 pt-5 text-sm">
                  <div>
                    <div className="text-stone-900 font-display font-semibold">{r.name}</div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-700/80 mt-0.5 font-medium">{r.route}</div>
                  </div>
                  <div className="flex gap-0.5 shrink-0 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200/60">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}