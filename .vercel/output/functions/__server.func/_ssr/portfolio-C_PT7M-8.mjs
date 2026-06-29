import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { _ as Clock, x as ArrowUpRight, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { a as useApplyModal, i as VISA_CATALOG, n as COUNTRY_FLAG } from "./ApplyModalProvider-OO51rRbf.mjs";
import { n as Layout, r as SectionHeading } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-C_PT7M-8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var portfolio_hero_jpg_asset_default = {
	version: 1,
	asset_id: "06d719a0-52a8-4243-8811-a814ab01a934",
	project_id: "2bb9e87d-498b-47ac-af15-bb20603291bb",
	url: "/__l5e/assets-v1/06d719a0-52a8-4243-8811-a814ab01a934/portfolio-hero.jpg",
	r2_key: "a/v1/2bb9e87d-498b-47ac-af15-bb20603291bb/06d719a0-52a8-4243-8811-a814ab01a934/portfolio-hero.jpg",
	original_filename: "portfolio-hero.jpg",
	size: 220269,
	content_type: "image/jpeg",
	created_at: "2026-06-23T18:31:04Z"
};
var COUNTRY_IMAGE = {
	"Kyrgyzstan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIk5YEJOSLYaLjpyd2DecVXitHjag0W61qOF3JD6iGA1NVHWAHn7RLPg&s=10",
	"Turkey": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufvmmFKfFagypdjr_-l60KVZxJVfpsAM2Up_ItdRSFZ4EfzHa1nrlFbs&s=10",
	"Serbia": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk465aWNXwts3LBWQ-nrCswPmLzdvkfJ2sAhY7qi0Ow&s=10",
	"Greece / Cyprus": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvjYOJJHpd0uK7jjpP-AwYubnztCL3eApwfUlVw22McMwFsFeJmPO31UW&s=10",
	"U.S.A": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHM-iFdbXTiqx7Asg1Rj96zpSFWFYwrbX9D_o4noLSQ&s=10",
	"Canada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5IYci8ypsOlLzOoInQrUSACUzTjOtmJIxe_9NV1JMQ&s=10",
	"Europe (Schengen)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB72SCy0jrS8cx8RzFuY-hTYAbU7Y-T_3tsw8F8OyUPfPSJckz34NLHQ&s=10",
	"Japan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETecxLG9UHCAuuFDhsJbYg3XdAuB5C6SypixHGz85lQ&s=10",
	"Singapore": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4E1AUrHe8JliVDf0gOZW7UHhGebH-V6nMZtcJVjyHUg&s=10",
	"Uzbekistan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrOj57YBcdIitAlAnKZYz8wZ4O8mAx7WTG1oDOc6D9Q&s=10",
	"Malaysia": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsFIy7KEf0zt6Q2ZKs3LPJs2hvphpigdeo2vY9BNQ-Q&s",
	"Morocco": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz9d3Gu0PBM-iZ8r0qPvXFGVn5DhMXDFDd4o1Tl8GJw&s=10",
	"Indonesia": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljjVGy3CL1JTk3lZLKMF_gJQSwLvsk7nvtYvnj8VvSQ&s=10",
	"Maldives": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFmJxikjS2Jp5Ku1s8jKOQhu19_QyHvTmg-EfVmLd_A&s=10",
	"Thailand": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9ueWf_wPyearqNXyTdq0Olj3f4KK3JU9CNxF9VY28A&s=10",
	"Sri Lanka": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkgSemf54AvvcIAhu5kvUTE5hl2SXZWpJxMB4zbA3Ww&s=10",
	"U.K": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBooj6PiZycG-WJUiIdptB8b_FSTz4kDvX2wQcVrIeZA&s=10",
	"Europe": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC40JFF3dznRSbS-bp0q2NAYlcCExlq85YkI7OtoXPg&s=10",
	"China": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDe5cgf7RA7mvm2ly79wpY9EcgmYJjFXSeEJ2i7wApCyl2Lz5ssy5t6g8y&s=10"
};
var TABS = ["All", ...VISA_CATALOG.map((c) => c.category)];
function PortfolioPage() {
	const [active, setActive] = (0, import_react.useState)("All");
	const { open } = useApplyModal();
	const cards = (active === "All" ? VISA_CATALOG : VISA_CATALOG.filter((c) => c.category === active)).flatMap((cat) => cat.countries.map((country) => ({
		country,
		category: cat.category,
		processing: cat.processing,
		duration: cat.duration
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: portfolio_hero_jpg_asset_default.url,
				alt: "",
				"aria-hidden": "true",
				width: 1920,
				height: 1080,
				fetchPriority: "high",
				decoding: "async",
				className: "h-full w-full object-cover opacity-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 relative pt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Visa Portfolio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Every ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient italic",
						children: "route"
					}),
					" we file, in one place"
				] }),
				intro: "Filter by category to see the destinations we actively process. Each card opens a tailored assessment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 scrollbar-none",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					whileTap: { scale: .95 },
					onClick: () => setActive(t),
					className: `relative rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition whitespace-nowrap active:scale-95 ${active === t ? "border-gold/60 bg-gold/10 text-gold gold-glow" : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground active:bg-white/5"}`,
					children: t
				}, t))
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: cards.map((c) => {
						const imageSource = COUNTRY_IMAGE[c.country] || COUNTRY_IMAGE[c.country.toLowerCase()];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .4 },
							whileHover: {
								y: -4,
								scale: 1.01
							},
							whileTap: { scale: .99 },
							className: "group relative overflow-hidden rounded-[32px] border border-white/10 p-7 transition-all duration-500 shadow-2xl min-h-[380px] flex flex-col justify-between select-none",
							style: { backgroundColor: "#060a12" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[32px]",
								children: [imageSource && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: imageSource,
									alt: "",
									"aria-hidden": "true",
									width: 768,
									height: 512,
									loading: "eager",
									style: { opacity: .65 },
									className: "h-full w-full object-cover transition-opacity duration-500 group-hover:!opacity-85 transform scale-100 group-hover:scale-105 duration-700"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-20 flex flex-col justify-between h-full w-full flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl drop-shadow-md",
										children: COUNTRY_FLAG[c.country] ?? "🌐"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.25em] text-gold pointer-events-none font-mono bg-slate-950/90 px-3 py-1 rounded-full border border-white/10",
										children: c.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-auto pt-16",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
											children: c.country
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
												className: "flex items-center gap-1.5 text-slate-200 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-gold shrink-0" }), "Processing"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 text-white text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]",
												children: c.processing
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
												className: "flex items-center gap-1.5 text-slate-200 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5 text-gold shrink-0" }), "Duration"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1 text-white text-sm font-semibold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]",
												children: c.duration
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
											whileTap: { scale: .96 },
											onClick: () => open({
												destination: c.country,
												category: c.category
											}),
											className: "relative mt-6 inline-flex w-full items-center justify-between rounded-full border border-gold/60 bg-slate-950/90 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-white active:bg-gold active:text-white hover:shadow-[0_4px_20px_rgba(184,137,57,0.4)]",
											children: ["Check Eligibility", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
										})
									]
								})]
							})]
						}, `${c.category}-${c.country}`);
					})
				})
			})
		})
	})] });
}
//#endregion
export { PortfolioPage as component };
