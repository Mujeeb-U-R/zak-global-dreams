import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as UsersRound } from "../_libs/lucide-react.mjs";
import { n as Layout, r as SectionHeading, t as ApplyButton } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D4n9Pcur.js
var import_jsx_runtime = require_jsx_runtime();
var about_hero_default = "/assets/about-hero-CmSP4V9c.jpg";
var HERO_TITLE_WORDS = [
	"A",
	"discipline",
	"built",
	"on",
	"trust,",
	"evidence",
	"and",
	"precise",
	"paperwork."
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurCompany, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurLegacy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurTeam, {})
	] });
}
function AboutHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative -mt-24 flex min-h-[70svh] items-center overflow-hidden bg-slate-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: about_hero_default,
				alt: "ZAK Corporate Background",
				className: "h-full w-full object-cover opacity-90 filter grayscale contrast-125"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] uppercase tracking-[0.5em] text-gold",
				children: "Our Practice"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-5xl font-display text-5xl leading-[1.05] text-white sm:text-7xl md:text-[5rem] tracking-tight",
				children: HERO_TITLE_WORDS.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						y: 30,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						delay: .2 + i * .06,
						duration: .85,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mr-3 inline-block",
					children: w === "trust," || w === "evidence" || w === "precise" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient italic",
						children: w
					}) : w
				}, i))
			})]
		})]
	});
}
function OurCompany() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl gap-16 px-6 grid lg:grid-cols-12 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Who we are",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built for the modern ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#b88939] italic",
						children: "global citizen"
					})] })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-xl italic leading-relaxed text-slate-600 font-light",
					children: "ZAK Consultants (Pvt.) Ltd. is a registered private limited firm headquartered at GS Tower, Ring Road, Peshawar. We operate at the intersection of legal documentation, embassy procedure, and personal advisory—turning ambiguous visa journeys into structured outcomes."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-xl italic leading-relaxed text-slate-600 font-light",
					children: "Every client engagement begins with profiling, continues through evidence assembly, and is closed with a defensible submission. We do not promise miracles; we deliver the case your file always deserved."
				})]
			})]
		})
	});
}
function OurLegacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-20 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-mono uppercase tracking-[0.4em] text-gold",
					children: "Milestones"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl md:text-5xl font-display text-slate-900 mt-2",
					children: "Our Operational Journey"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-l border-slate-200 ml-4 md:ml-32 space-y-12",
				children: [
					{
						year: "Phase I",
						title: "The Advisory Inception",
						desc: "Formed as a specialized dossier execution unit to serve regional high-net-worth individuals navigating tier-1 global visa pathways."
					},
					{
						year: "Phase II",
						title: "Corporate Hardening",
						desc: "Formally chartered as ZAK Consultants (Pvt.) Ltd., standardizing operations across a state-of-the-art advisory ecosystem."
					},
					{
						year: "Phase III",
						title: "Embassy Link Integration",
						desc: "Achieved 98.4% validation consistency by establishing strict, in-house verification audits before submission layers."
					}
				].map((milestone, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						delay: index * .15,
						duration: .6
					},
					className: "relative pl-8 md:pl-12 group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#b88939] group-hover:bg-[#b88939] transition-all duration-300 shadow-[0_0_10px_rgba(184,137,57,0.3)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:absolute md:-left-36 md:top-0 font-mono text-sm font-semibold text-[#b88939] mb-1 md:mb-0",
							children: milestone.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl text-slate-900 font-medium group-hover:text-[#b88939] transition-colors duration-300",
								children: milestone.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-600 mt-2 text-sm leading-relaxed font-light",
								children: milestone.desc
							})]
						})
					]
				}, index))
			})]
		})
	});
}
function OurTeam() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono uppercase tracking-[0.4em] text-gold",
							children: "Leadership"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-display text-slate-900 mt-2",
							children: "The Advisory Council"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-600 mt-3 text-sm max-w-md mx-auto font-light",
							children: "Senior partners driving legal documentation strategy and cross-border alignment matrixes."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto",
					children: [
						{
							name: "Mujeeb Ur Rehman",
							role: "Managing Director",
							strategy: "Sovereign Pathways & Corporate Strategy"
						},
						{
							name: "Muzamil Shiraz",
							role: "Partner & Head of Risk Management",
							strategy: "Legal Evidence Assembly & Profiling Architecture"
						},
						{
							name: "Abdul Rafhay Hussain",
							role: "Chief Operational Advisory",
							strategy: "Global Mobility Solutions & Verification Frameworks"
						}
					].map((member, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							delay: i * .1,
							duration: .7
						},
						className: "group relative overflow-hidden rounded-[28px] border border-[#b88939]/10 bg-white/70 backdrop-blur-md p-8 transition-all duration-500 ease-out hover:bg-[#b88939] hover:border-[#b88939] hover:shadow-[0_20px_50px_rgba(184,137,57,0.3)] hover:-translate-y-1 flex flex-col justify-between min-h-[320px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] w-full rounded-2xl bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-400 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-white/60 transition-all duration-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { className: "w-10 h-10 stroke-[0.75]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl text-slate-900 group-hover:text-white transition-colors duration-300",
								children: member.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-mono uppercase tracking-widest text-[#b88939] group-hover:text-white/80 transition-colors duration-300 mt-1",
								children: member.role
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-600 border-t border-slate-200/60 pt-4 mt-6 italic font-light group-hover:text-white/90 group-hover:border-white/20 transition-all duration-500",
							children: ["Focus: ", member.strategy]
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-24 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl italic text-slate-900 sm:text-4xl font-light leading-snug",
						children: "“Secure the case your global legacy always deserved.”"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyButton, {})
					})]
				})
			]
		})
	});
}
//#endregion
export { AboutPage as component };
