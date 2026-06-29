import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as Star, o as Quote } from "../_libs/lucide-react.mjs";
import { n as Layout, r as SectionHeading } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BzV2W6e2.js
var import_jsx_runtime = require_jsx_runtime();
var GRID = [
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
	}
];
var REVIEWS = [
	{
		name: "Hamza R.",
		route: "Turkey Work Permit",
		text: "From profiling to embassy submission, every step felt deliberate. Approval came within the timeline they predicted."
	},
	{
		name: "Sana A.",
		route: "U.K Student Visa",
		text: "They restructured my SOP and financials in two evenings. The visa landed first attempt."
	},
	{
		name: "Bilal K.",
		route: "Schengen Visit Visa",
		text: "Calm, professional, and brutally precise with documentation. Worth every minute of the consultation."
	},
	{
		name: "Zainab M.",
		route: "Canada Student Route",
		text: "The cross-checking system they used for my study gap explanation made all the difference. Outstanding communication."
	},
	{
		name: "Asif J.",
		route: "Kyrgyzstan Work permit",
		text: "They cleared up all the regulatory confusion regarding our corporate group paperwork. Highly transparent and reliable."
	},
	{
		name: "Maryam N.",
		route: "Schengen Tourist Visa",
		text: "Honest advice on bank statement timelines. They won't file unless they know your matrix meets the threshold."
	}
];
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 pt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Success Gallery",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Outcomes that ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold-gradient italic",
							children: "travel"
						}),
						" with you"
					] }),
					intro: "A curated look at approved files and the journeys they unlocked. Personal data is obscured for privacy."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: GRID.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							delay: i * .08,
							duration: .7
						},
						className: `group relative overflow-hidden rounded-2xl border border-white/5 ${it.h}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: it.src,
								alt: it.label,
								className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-gold",
								children: it.label
							})
						]
					}, i))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Client Voices",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Words from ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient italic",
						children: "travelers"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .1,
							duration: .7
						},
						className: "relative rounded-[32px] bg-[#fdfbf7] border border-stone-200 p-8 shadow-2xl flex flex-col justify-between text-slate-900 select-none min-h-[240px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-amber-600/20 stroke-[1.5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-serif text-base leading-relaxed italic text-stone-800",
							children: [
								"\"",
								r.text,
								"\""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-7 flex items-center justify-between border-t border-stone-200 pt-5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-stone-900 font-display font-semibold",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-mono uppercase tracking-wider text-amber-700/80 mt-0.5 font-medium",
								children: r.route
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 shrink-0 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200/60",
								children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-500 text-amber-500" }, j))
							})]
						})]
					}, i))
				})]
			})
		})
	] });
}
//#endregion
export { GalleryPage as component };
