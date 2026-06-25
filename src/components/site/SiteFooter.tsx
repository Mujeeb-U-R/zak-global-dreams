import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-slate-800/60 bg-[#0f172b]">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={SITE.logo}
                alt="ZAK Consultants logo"
                className="h-10 w-10 rounded-full border-2 border-gold/40 object-contain bg-transparent p-1"
                width={40}
                height={40}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg text-white">ZAK Consultants</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Pvt. Ltd.
                </span>
              </div>
            </div>
            
            <p className="mt-6 max-w-sm font-serif text-lg italic text-slate-300">
              “{SITE.tagline}”
            </p>

            {/* --- ADDED: BRAND HARMONIZED SOCIAL TRAY (Sourced from SiteNav) --- */}
            <div className="mt-6 flex items-center gap-4 text-slate-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              {/* TikTok Custom SVG */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.6 4.17 1.12 1.32 2.75 2.15 4.43 2.3v3.83c-1.7-.06-3.38-.63-4.74-1.68-.26-.2-.5-.42-.73-.65v6.43c.02 3.8-2.5 7.42-6.25 8.16-3.88.87-8.12-1.2-9.45-4.96C-.2 13.56 1.42 8.91 5.4 7.74c1.4-.43 2.9-.38 4.25.18v3.91c-1.12-.54-2.46-.53-3.55.07-1.37.72-2.13 2.27-1.89 3.82.3 1.83 2.05 3.16 3.89 2.87 1.48-.2 2.63-1.42 2.76-2.92.01-1.83.01-11.66.01-15.61h1.65z"/>
                </svg>
              </a>
              {/* LinkedIn Custom SVG */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold/90 font-mono">
              {SITE.legal}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono">Navigate</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Visa Routes</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Success Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono">Office</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span className="leading-relaxed">{SITE.address}</span></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{SITE.hours}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`tel:+${SITE.whatsappNumber}`} className="hover:text-white transition-colors">{SITE.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center font-mono">
          <span>© {new Date().getFullYear()} ZAK Consultants (Pvt.) Ltd. All rights reserved.</span>
          <span>Crafted with precision in Peshawar, Pakistan.</span>
        </div>
      </div>
    </footer>
  );
}