import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { S as ArrowRight, b as Award, i as ShieldCheck, n as Star, o as Quote, r as Shield, s as Plane } from "../_libs/lucide-react.mjs";
import { i as VISA_CATALOG, r as SITE } from "./ApplyModalProvider-OO51rRbf.mjs";
import { n as Layout, r as SectionHeading, t as ApplyButton } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKSouPz0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_poster_default = "/assets/hero-poster-99mHVFxp.jpg";
var cta_bg_jpg_asset_default = {
	version: 1,
	asset_id: "4fdd09ea-4d01-4ca8-8c3f-d838e2aaa939",
	project_id: "2bb9e87d-498b-47ac-af15-bb20603291bb",
	url: "/__l5e/assets-v1/4fdd09ea-4d01-4ca8-8c3f-d838e2aaa939/cta-bg.jpg",
	r2_key: "a/v1/2bb9e87d-498b-47ac-af15-bb20603291bb/4fdd09ea-4d01-4ca8-8c3f-d838e2aaa939/cta-bg.jpg",
	original_filename: "cta-bg.jpg",
	size: 143457,
	content_type: "image/jpeg",
	created_at: "2026-06-23T18:31:10Z"
};
var TITLE_WORDS = [
	"Your",
	"Trusted",
	"Partner",
	"for",
	"Global",
	"Visa",
	"Solutions"
];
var HOMEPAGE_REVIEWS = [
	{
		name: "Hamza R.",
		route: "Turkey Work Permit",
		text: "From profiling to embassy submission, every step felt deliberate. Approval came within the timeline they predicted. Their precision-engineered case strategy saved us months of rework."
	},
	{
		name: "Sana A.",
		route: "U.K Student Visa",
		text: "They restructured my SOP and financials in two evenings. The visa landed first attempt. Exceptional attention to small documentation metrics."
	},
	{
		name: "Bilal K.",
		route: "Schengen Visit Visa",
		text: "Calm, professional, and brutally precise with documentation. Worth every minute of the consultation. They won't file unless your metrics clear the core threshold safely."
	},
	{
		name: "Zainab M.",
		route: "Canada Student Route",
		text: "The cross-checking system they used for my study gap explanation made all the difference. Outstanding communication loops from start to finish."
	},
	{
		name: "Asif J.",
		route: "Kyrgyzstan Work permit",
		text: "They cleared up all the regulatory confusion regarding our corporate group paperwork. Highly transparent and reliable asset tracking."
	},
	{
		name: "Maryam N.",
		route: "Schengen Tourist Visa",
		text: "Honest advice on bank statement timelines. They won't file unless they know your matrix matches the required embassy thresholds perfectly."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metrics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientTicker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCTA, {})
		]
	}) });
}
function Hero() {
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (videoRef.current) videoRef.current.play().catch((err) => {
			console.log("Autoplay optimization caught restriction:", err);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative -mt-24 flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#030712]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 select-none pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: "/hero-video.mp4",
						poster: hero_poster_default,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						className: "h-full w-full object-cover scale-[1.02] brightness-[0.7]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0.35)_0%,rgba(3,7,18,0.85)_85%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-[#030712]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-5xl px-6 pt-36 pb-20 text-center flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 15
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[10px] font-medium tracking-[0.35em] uppercase text-amber-400/90 shadow-[0_4px_20px_rgba(0,0,0,0.4)] mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5 text-amber-400 fill-amber-400/10 stroke-[1.8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.legal })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-4xl",
						children: TITLE_WORDS.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 20,
								filter: "blur(4px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							transition: {
								delay: .15 + i * .06,
								duration: .75,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mr-3 inline-block",
							children: w === "Global" || w === "Visa" || w === "Solutions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic font-serif font-normal tracking-normal drop-shadow-sm px-0.5",
								children: w
							}) : w
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 15
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .7,
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-8 max-w-2xl font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-light",
						children: "A registered Peshawar-based consultancy delivering meticulous case preparation, legal documentation and personal advisory for clients pursuing life beyond borders."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .9,
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyButton, { label: "Get Started" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6 sm:pl-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/portfolio",
									className: "group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 hover:text-white transition-colors duration-300",
									children: ["Explore Routes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-amber-400 transition-transform duration-300 transform group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-px bg-white/10 hidden sm:inline" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/faq",
									className: "text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/80 hover:text-amber-400 hover:underline underline-offset-4 transition-all duration-300",
									children: "Read FAQs"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-10 opacity-30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-mono tracking-[0.4em] uppercase text-slate-400",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-px bg-gradient-to-b from-white via-white/50 to-transparent" })]
			})
		]
	});
}
function Metrics() {
	const items = [
		{
			icon: Award,
			value: 99,
			suffix: "%",
			label: "Visa Approval Rate"
		},
		{
			icon: Plane,
			value: 2e3,
			suffix: "+",
			label: "Successful Applications"
		},
		{
			icon: ShieldCheck,
			value: 1,
			suffix: "",
			label: "Registered Pvt. Ltd. Firm"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 overflow-hidden bg-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-[linear-gradient(to_right,#b8893903_1px,transparent_1px),linear-gradient(to_bottom,#b8893903_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#b88939]/[0.03] rounded-full filter blur-3xl z-0 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						duration: .8,
						ease: "easeOut"
					},
					className: "grid gap-px overflow-hidden rounded-3xl border border-white/5 glass-panel sm:grid-cols-3",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-slate-950/40 p-10 transition hover:bg-slate-900/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-baseline gap-1 font-display text-6xl text-gold-gradient",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { target: it.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.suffix })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground",
								children: it.label
							})
						]
					}, i))
				})
			})
		]
	});
}
function Counter({ target }) {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!isInView) return;
		let raf = 0;
		const start = performance.now();
		const dur = 1600;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(eased * target));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [isInView, target]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: n.toLocaleString()
	});
}
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 overflow-hidden bg-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 -z-10 h-[600px] w-full opacity-20 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "100%",
					height: "100%",
					viewBox: "0 0 1440 600",
					fill: "none",
					className: "w-full h-full",
					preserveAspectRatio: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-100 150C300 450 650 -50 1100 250C1350 400 1500 200 1600 100",
						stroke: "#b88939",
						strokeWidth: "1.2",
						strokeDasharray: "6 6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-50 220C350 520 700 20 1150 320C1400 470 1550 270 1650 170",
						stroke: "#b88939",
						strokeWidth: "0.5",
						opacity: "0.4"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-10%] bottom-[5%] w-[400px] h-[400px] rounded-full border border-[#b88939]/[0.05] pointer-events-none -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						margin: "-80px"
					},
					transition: { duration: .7 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our Practice",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block bg-cover bg-center bg-no-repeat rounded-2xl px-6 py-4 border border-slate-200/60 shadow-md overflow-hidden my-2 bg-white/40 backdrop-blur-sm",
							style: { backgroundImage: "url('/title_bg.jpg')" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-slate-900 text-3xl md:text-5xl font-light tracking-tight leading-tight",
								children: [
									"Four ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#b88939] italic font-normal",
										children: "disciplined"
									}),
									" routes to the world"
								]
							})
						}),
						intro: "Every case is structured, profiled and prepared to embassy-grade standards by our consultancy team."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-2",
					children: VISA_CATALOG.map((c, i) => {
						const localBgImages = [
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQFTSXlcdilGU0B_6vmrrRo6fcTJPh2Ie1JHf4Mkvr2TpFHdwqAWrK08y&s=10",
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFDnn1PFvQ1FuvfXacFdMyESLHR-M2aJPomoIQESslKM_-8i769nZ6z8&s=10",
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInVUHz008Hgktt9rpUfW2SLRpuCQOA-cLQnk0qzNiqVhqZVw2-aIp0Jg&s=10",
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF7XmqfWADBK7fAXrVRe272uinEiCZ-u-eN5VF234zKlha8PIwoGtYd6U&s=10"
						];
						const currentBg = localBgImages[i] || localBgImages[0];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: "/portfolio",
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-80px"
							},
							transition: {
								delay: i * .1,
								duration: .7,
								ease: "easeOut"
							},
							whileHover: {
								y: -4,
								scale: 1.01
							},
							whileTap: { scale: .98 },
							className: "group relative overflow-hidden rounded-[28px] border border-white/10 p-8 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(184,137,57,0.15)] flex flex-col justify-between min-h-[260px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 -z-20 h-full w-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: currentBg,
										alt: "",
										style: { opacity: .65 },
										className: "h-full w-full object-cover transition-opacity duration-500 group-hover:!opacity-85 transform scale-100 group-hover:scale-105 duration-700"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/30 to-slate-950/90 transition-colors duration-500 group-hover:from-slate-950/60 group-hover:via-slate-950/20 group-hover:to-slate-950/85" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400 group-hover:text-white/70 transition-colors duration-300",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 rounded-full border border-white/10 bg-slate-900/40 text-gold transition-all duration-500 transform group-hover:rotate-45 group-hover:bg-gold group-hover:text-slate-950 group-hover:border-transparent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-3xl text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
										children: c.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-serif italic text-sm font-light text-slate-200 group-hover:text-white transition-colors duration-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]",
										children: c.tagline
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-2 items-center pt-4 border-t border-white/10",
									children: [c.countries.slice(0, 5).map((co) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-slate-950/80 text-slate-300 border border-white/5 px-3 py-1 text-xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-white/10 transition-all duration-300",
										children: co
									}, co)), c.countries.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 text-xs font-medium group-hover:bg-gold group-hover:text-slate-950 transition-all duration-300",
										children: [
											"+",
											c.countries.length - 5,
											" more"
										]
									})]
								})
							]
						}, c.category);
					})
				})]
			})
		]
	});
}
function ClientTicker() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const speedTimeout = window.matchMedia("(max-w: 640px)").matches ? 3500 : 6e3;
		const timer = setInterval(() => {
			next();
		}, speedTimeout);
		return () => clearInterval(timer);
	}, [index]);
	const next = () => {
		setIndex((prev) => (prev + 1) % HOMEPAGE_REVIEWS.length);
	};
	const prev = () => {
		setIndex((prev) => (prev - 1 + HOMEPAGE_REVIEWS.length) % HOMEPAGE_REVIEWS.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 bg-transparent border-t border-b border-white/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Reviews",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Client ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient italic",
						children: "Trust"
					})] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full px-6 overflow-visible",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl overflow-visible",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full overflow-visible",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { x: `-${index * 100}%` },
							transition: {
								type: "spring",
								stiffness: 220,
								damping: 26
							},
							className: "flex w-full will-change-transform overflow-visible",
							children: HOMEPAGE_REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full shrink-0 pr-4 sm:pr-8 overflow-visible",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-4xl mx-auto rounded-3xl bg-[#fdfbf7] border border-stone-200/80 p-8 sm:p-14 shadow-[0_20px_50px_rgba(27,24,17,0.08)] flex flex-col justify-between min-h-[280px] text-slate-900 select-none transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(27,24,17,0.12)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-9 w-9 text-amber-600/15 stroke-[1.2]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 font-serif text-base sm:text-lg leading-relaxed italic text-stone-800 whitespace-normal",
										children: [
											"\"",
											r.text,
											"\""
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-8 border-t border-stone-200/60 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-stone-900 font-display font-bold text-base tracking-tight",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-mono uppercase tracking-[0.2em] text-amber-700 font-medium mt-1",
											children: r.route
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-0.5 shrink-0 bg-stone-100 p-2 rounded-full border border-stone-200/50 self-start sm:self-auto shadow-inner",
											children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-500 text-amber-500" }, j))
										})]
									})]
								})
							}, i))
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-7xl mx-auto px-6 z-20 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 select-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: {
								scale: 1.05,
								borderColor: "rgba(180, 83, 9, 0.4)"
							},
							whileTap: { scale: .95 },
							onClick: prev,
							className: "h-11 w-11 rounded-full border border-stone-300/80 bg-stone-100/20 text-stone-700 hover:text-amber-700 hover:bg-[#fdfbf7] flex items-center justify-center transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
							"aria-label": "Previous review",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-180 stroke-[1.3]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 px-2",
							children: HOMEPAGE_REVIEWS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIndex(i),
								className: `h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-6 bg-amber-600" : "w-1.5 bg-stone-300 hover:bg-stone-400"}`,
								"aria-label": `Go to slide ${i + 1}`
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: {
								scale: 1.05,
								borderColor: "rgba(180, 83, 9, 0.4)"
							},
							whileTap: { scale: .95 },
							onClick: next,
							className: "h-11 w-11 rounded-full border border-stone-300/80 bg-stone-100/20 text-stone-700 hover:text-amber-700 hover:bg-[#fdfbf7] flex items-center justify-center transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
							"aria-label": "Next review",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 stroke-[1.3]" })
						})
					]
				})
			})
		]
	});
}
function ClosingCTA() {
	const bgUrl = cta_bg_jpg_asset_default?.url || "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: { duration: .8 },
				className: "relative overflow-hidden rounded-3xl border border-gold/20 glass-panel-strong p-12 text-center sm:p-20",
				children: [
					bgUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bgUrl,
						alt: "",
						"aria-hidden": "true",
						width: 1920,
						height: 1080,
						loading: "lazy",
						className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/70 via-slate-950/80 to-slate-950/90" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold",
						children: "Begin Today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-4xl text-foreground sm:text-6xl",
						children: [
							"Your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-gradient italic",
								children: "passport"
							}),
							", our craft."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl font-serif text-lg italic text-muted-foreground",
						children: "A single conversation. A senior consultant. A clear path forward."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyButton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/faq",
							className: "rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-300",
							children: "Read Portal FAQs"
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { HomePage as component };
