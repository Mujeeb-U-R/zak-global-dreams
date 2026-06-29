import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { _ as Clock, a as Send, c as Phone, f as MapPin, p as Mail, u as MessageCircle } from "../_libs/lucide-react.mjs";
import { r as SITE } from "./ApplyModalProvider-OO51rRbf.mjs";
import { n as Layout, r as SectionHeading } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bgdw5s-Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function buildWhatsAppUrl(data) {
	const lines = [
		"*ZAK Consultants — New Visa Assessment*",
		"",
		`*Full Name:* ${data.fullName}`,
		`*Phone:* ${data.phone}`,
		`*Destination:* ${data.destination}`,
		`*Visa Category:* ${data.category}`,
		`*Employment Status:* ${data.employment}`,
		`*6-Month Bank Statement:* ${data.bankStatement}`,
		"",
		"Please advise on eligibility and next steps. Thank you."
	];
	const text = encodeURIComponent(lines.join("\n"));
	return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
var contact_hero_jpg_asset_default = {
	version: 1,
	asset_id: "da74c324-0475-4c5c-8ce2-e3a6d6e56e33",
	project_id: "2bb9e87d-498b-47ac-af15-bb20603291bb",
	url: "/__l5e/assets-v1/da74c324-0475-4c5c-8ce2-e3a6d6e56e33/contact-hero.jpg",
	r2_key: "a/v1/2bb9e87d-498b-47ac-af15-bb20603291bb/da74c324-0475-4c5c-8ce2-e3a6d6e56e33/contact-hero.jpg",
	original_filename: "contact-hero.jpg",
	size: 86178,
	content_type: "image/jpeg",
	created_at: "2026-06-23T18:31:07Z"
};
function ContactPage() {
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const send = (e) => {
		e.preventDefault();
		const url = buildWhatsAppUrl({
			fullName: `${firstName} ${lastName}`.trim() || "Quick Inquiry",
			phone: phone || "—",
			destination: "—",
			category: "General Inquiry",
			employment: "—",
			bankStatement: "No"
		});
		const intro = encodeURIComponent(`\n\n*Message:* ${msg || "(no message)"}`);
		window.open(url + intro, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: contact_hero_jpg_asset_default.url,
				alt: "",
				"aria-hidden": "true",
				width: 1920,
				height: 1080,
				fetchPriority: "high",
				decoding: "async",
				className: "h-full w-full object-cover opacity-35"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 relative pt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Get in touch",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Visit us in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold-gradient italic",
					children: "Peshawar"
				})] }),
				intro: "Walk in, dial in, or message us on WhatsApp. A senior consultant will respond personally."
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "overflow-hidden rounded-3xl border border-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "ZAK Consultants Office Map",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7342963349092!2d71.45425507435851!3d33.97366822187761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911d507fd6ddf%3A0x493a3de071281f6d!2sZAK%20Consultants%20(PVT.)%20LTD.!5e0!3m2!1sen!2sus!4v1782351036066!5m2!1sen!2sus",
						className: "h-[380px] w-full grayscale-[40%]",
						loading: "lazy",
						style: { border: 0 },
						allowFullScreen: true,
						referrerPolicy: "strict-origin-when-cross-origin"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-px overflow-hidden rounded-3xl border border-white/5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: MapPin,
							title: "Office (Click to Open Map)",
							lines: [SITE.address],
							href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7342963349092!2d71.45425507435851!3d33.97366822187761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911d507fd6ddf%3A0x493a3de071281f6d!2sZAK%20Consultants%20(PVT.)%20LTD.!5e0!3m2!1sen!2sus!4v1782351036066!5m2!1sen!2sus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Clock,
							title: "Hours",
							lines: [SITE.hours, "Open every day"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Phone,
							title: "WhatsApp & Call",
							lines: [SITE.phoneDisplay],
							href: `tel:+${SITE.whatsappNumber}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Mail,
							title: "Email",
							lines: [SITE.email],
							href: `mailto:${SITE.email}`
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				onSubmit: send,
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "h-fit rounded-3xl border border-white/5 glass-panel-strong p-8 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-foreground",
							children: "Quick inquiry"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Sends directly to our WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
										children: "First Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: firstName,
										onChange: (e) => setFirstName(e.target.value),
										className: "input-base",
										placeholder: "First name"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
										children: "Last Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: lastName,
										onChange: (e) => setLastName(e.target.value),
										className: "input-base",
										placeholder: "Last name"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									className: "input-base",
									placeholder: "+92 3xx xxxxxxx"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: msg,
									onChange: (e) => setMsg(e.target.value),
									rows: 4,
									className: "input-base resize-none",
									placeholder: "Tell us where you'd like to travel..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 gold-glow gold-glow-hover transition-transform hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send via WhatsApp"]
							})
						]
					})
				]
			})]
		})
	})] });
}
function Info({ icon: Icon, title, lines, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
		href,
		...href ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		className: "block bg-slate-950/40 p-7 transition hover:bg-slate-900/60 group cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold transition-transform group-hover:scale-110 duration-300" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-gold transition-colors duration-300",
				children: title
			}),
			lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-foreground",
				children: l
			}, i))
		]
	});
}
//#endregion
export { ContactPage as component };
