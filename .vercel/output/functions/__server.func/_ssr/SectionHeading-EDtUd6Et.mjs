import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { _ as Clock, c as Phone, d as Menu, f as MapPin, g as Facebook, m as Instagram, p as Mail, t as X, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as useApplyModal, r as SITE } from "./ApplyModalProvider-OO51rRbf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-EDtUd6Et.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ApplyButton({ size = "lg", full, label = "Get Started", preset }) {
	const { open } = useApplyModal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => open(preset),
		className: `
        group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium uppercase tracking-[0.18em] transition-all duration-500 ease-out 
        bg-[#b88939] text-white border border-[#b88939]
        hover:bg-[#0f172b] hover:border-[#0f172b] hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(184,137,57,0.2)]
        active:scale-[0.98]
        ${size === "sm" ? "h-9 px-4 text-xs" : "h-12 px-7 text-sm"} 
        ${full ? "w-full" : ""}
      `,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative z-10",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" })
		]
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/portfolio",
		label: "Visa Routes"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -24,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed top-0 left-0 right-0 z-50 w-full flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full bg-slate-950 text-slate-400 border-b border-white/5 text-[11px] font-medium tracking-wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl h-9 px-6 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${SITE.email}`,
								className: "flex items-center gap-2 hover:text-white transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.email })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center gap-4 text-slate-400 border-l border-r border-white/10 px-6 h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://facebook.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://tiktok.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-3.5 w-3.5 fill-current",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.6 4.17 1.12 1.32 2.75 2.15 4.43 2.3v3.83c-1.7-.06-3.38-.63-4.74-1.68-.26-.2-.5-.42-.73-.65v6.43c.02 3.8-2.5 7.42-6.25 8.16-3.88.87-8.12-1.2-9.45-4.96C-.2 13.56 1.42 8.91 5.4 7.74c1.4-.43 2.9-.38 4.25.18v3.91c-1.12-.54-2.46-.53-3.55.07-1.37.72-2.13 2.27-1.89 3.82.3 1.83 2.05 3.16 3.89 2.87 1.48-.2 2.63-1.42 2.76-2.92.01-1.83.01-11.66.01-15.61h1.65z" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://linkedin.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-3.5 w-3.5 fill-current",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-slate-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/faq",
									className: "hover:text-white transition-colors",
									children: "Support"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/10",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-white transition-colors",
									children: "Location Map"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-full transition-all duration-300 bg-[#0f172b] border-b border-slate-800/60 backdrop-blur-md flex items-center ${scrolled ? "h-16" : "h-20"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl px-6 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: SITE.logo,
								alt: "ZAK Consultants logo",
								className: "h-10 w-10 rounded-full border-2 border-gold/40 object-contain bg-transparent p-1",
								width: 40,
								height: 40
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-semibold tracking-wide text-white",
									children: "ZAK Consultants"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.3em] text-slate-400",
									children: "Pvt. Ltd."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "relative text-sm font-medium text-slate-300 transition-colors hover:text-gold-deep nav-link-no-lift",
								activeProps: { className: "!text-gold" },
								children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [item.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "nav-underline",
									className: "absolute -bottom-1.5 left-0 right-0 h-px bg-gold"
								})] })
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyButton, { size: "sm" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							type: "button",
							onClick: () => setOpen((s) => !s),
							whileTap: { scale: .92 },
							className: "md:hidden text-white p-2 -mr-2 flex items-center justify-center rounded-lg active:bg-white/5 transition-colors",
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-gold" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				transition: {
					duration: .25,
					ease: "easeInOut"
				},
				className: "absolute left-0 right-0 border-b border-slate-800/60 bg-[#0f172b]/95 backdrop-blur-xl p-6 md:hidden shadow-2xl z-40",
				style: { top: scrolled ? "calc(36px + 4rem)" : "calc(36px + 5rem)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						whileTap: { scale: .98 },
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "block rounded-xl px-4 py-3 text-sm text-slate-300 font-medium active:bg-white/10 active:text-gold transition-all",
							activeProps: { className: "!text-gold bg-white/[0.03]" },
							children: item.label
						})
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 pt-4 border-t border-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyButton, {
							size: "sm",
							full: true
						})
					})]
				})
			}) })
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-32 border-t border-slate-800/60 bg-[#0f172b]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline absolute inset-x-0 top-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: SITE.logo,
								alt: "ZAK Consultants logo",
								className: "h-10 w-10 rounded-full border-2 border-gold/40 object-contain bg-transparent p-1",
								width: 40,
								height: 40
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-white",
									children: "ZAK Consultants"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.3em] text-slate-400",
									children: "Pvt. Ltd."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-sm font-serif text-lg italic text-slate-300",
							children: [
								"“",
								SITE.tagline,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-1 text-slate-400 -ml-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileTap: { scale: .9 },
									href: "https://facebook.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-lg active:bg-white/5 active:text-gold text-slate-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileTap: { scale: .9 },
									href: "https://instagram.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-lg active:bg-white/5 active:text-gold text-slate-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileTap: { scale: .9 },
									href: "https://tiktok.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-lg active:bg-white/5 active:text-gold text-slate-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 fill-current",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.6 4.17 1.12 1.32 2.75 2.15 4.43 2.3v3.83c-1.7-.06-3.38-.63-4.74-1.68-.26-.2-.5-.42-.73-.65v6.43c.02 3.8-2.5 7.42-6.25 8.16-3.88.87-8.12-1.2-9.45-4.96C-.2 13.56 1.42 8.91 5.4 7.74c1.4-.43 2.9-.38 4.25.18v3.91c-1.12-.54-2.46-.53-3.55.07-1.37.72-2.13 2.27-1.89 3.82.3 1.83 2.05 3.16 3.89 2.87 1.48-.2 2.63-1.42 2.76-2.92.01-1.83.01-11.66.01-15.61h1.65z" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileTap: { scale: .9 },
									href: "https://linkedin.com",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-lg active:bg-white/5 active:text-gold text-slate-400 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 fill-current",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs uppercase tracking-[0.25em] text-gold/90 font-mono",
							children: SITE.legal
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-slate-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "Home"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portfolio",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "Visa Routes"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "Success Gallery"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "FAQ"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "block py-1.5 hover:text-white active:text-gold transition-colors",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono",
						children: "Office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-slate-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leading-relaxed",
								children: SITE.address
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.hours })]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-4 text-xs uppercase tracking-[0.25em] text-gold font-mono",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-slate-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:+${SITE.whatsappNumber}`,
								className: "block py-0.5 hover:text-white active:text-gold transition-colors",
								children: SITE.phoneDisplay
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SITE.email}`,
								className: "block py-0.5 hover:text-white active:text-gold transition-colors",
								children: SITE.email
							})]
						})]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center font-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ZAK Consultants (Pvt.) Ltd. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crafted with precision in Peshawar, Pakistan." })]
			})]
		})]
	});
}
function Layout({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative min-h-screen ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/[0.05] blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-700/[0.04] blur-[140px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SectionHeading({ eyebrow, title, intro, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
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
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.4em] text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground",
				children: intro
			})
		]
	});
}
//#endregion
export { Layout as n, SectionHeading as r, ApplyButton as t };
