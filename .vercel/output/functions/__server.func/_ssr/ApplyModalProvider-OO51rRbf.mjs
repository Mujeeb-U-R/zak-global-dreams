import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { E as CircleCheckBig, a as Send, t as X, w as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ApplyModalProvider-OO51rRbf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "ZAK Consultants (Pvt.) Ltd.",
	short: "ZAK Consultants",
	logo: "/zak_logo-removebg-preview.png",
	tagline: "Your Trusted Partner for Global Visa Solutions",
	phoneDisplay: "+92 334 944 8824",
	whatsappNumber: "923349448824",
	email: "zakconsultants21@gmail.com",
	address: "Office No. G-62, 5th Floor, GS Tower, Ring Road, Near Hayatabad Toll Plaza, Peshawar",
	hours: "Monday-Saturday: 10:00 AM – 6:00 PM",
	legal: "Registered Private Limited Firm, Pakistan",
	mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7342963349092!2d71.45425507435851!3d33.97366822187761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911d507fd6ddf%3A0x493a3de071281f6d!2sZAK%20Consultants%20(PVT.)%20LTD.!5e0!3m2!1sen!2sus!4v1782351036066!5m2!1sen!2sus"
};
var VISA_CATALOG = [
	{
		category: "Work Permit",
		tagline: "Legal employment routes with end-to-end documentation.",
		processing: "45–90 days",
		duration: "1–2 years renewable",
		countries: [
			"Kyrgyzstan",
			"Turkey",
			"Serbia",
			"Greece / Cyprus"
		]
	},
	{
		category: "Visit Visa",
		tagline: "Premier leisure & business travel processing.",
		processing: "15–45 days",
		duration: "Up to 10 years (multi-entry)",
		countries: [
			"U.S.A",
			"Canada",
			"Europe (Schengen)",
			"Japan"
		]
	},
	{
		category: "Group Tour",
		tagline: "Curated group departures with full hospitality.",
		processing: "10–30 days",
		duration: "7–21 day itineraries",
		countries: [
			"Turkey",
			"Singapore",
			"Uzbekistan",
			"Malaysia",
			"Morocco",
			"Indonesia",
			"Maldives",
			"Thailand",
			"Sri Lanka"
		]
	},
	{
		category: "Student Visa",
		tagline: "Accredited admissions & visa filing support.",
		processing: "30–90 days",
		duration: "Course length + post-study",
		countries: [
			"U.K",
			"Europe",
			"Turkey",
			"Thailand",
			"Indonesia",
			"China"
		]
	}
];
var COUNTRY_FLAG = {
	Kyrgyzstan: "🇰🇬",
	Turkey: "🇹🇷",
	Serbia: "🇷🇸",
	"Greece / Cyprus": "🇬🇷",
	"U.S.A": "🇺🇸",
	Canada: "🇨🇦",
	"Europe (Schengen)": "🇪🇺",
	Japan: "🇯🇵",
	Singapore: "🇸🇬",
	Uzbekistan: "🇺🇿",
	Malaysia: "🇲🇾",
	Morocco: "🇲🇦",
	Indonesia: "🇮🇩",
	Maldives: "🇲🇻",
	Thailand: "🇹🇭",
	"Sri Lanka": "🇱🇰",
	"U.K": "🇬🇧",
	Europe: "🇪🇺",
	China: "🇨🇳"
};
var schema = objectType({
	firstName: stringType().trim().min(2, "Please enter your first name").max(50),
	lastName: stringType().trim().min(2, "Please enter your last name").max(50),
	phone: stringType().trim().min(7, "Enter a valid phone number").max(20),
	destination: stringType().trim().min(2).max(60),
	category: enumType([
		"Work Permit",
		"Visit Visa",
		"Group Tour + Visit Visa",
		"Student Visa"
	]),
	employment: enumType([
		"Employed",
		"Business Owner",
		"Student"
	]),
	bankStatement: enumType(["Yes", "No"])
});
var CATEGORIES = [
	"Work Permit",
	"Visit Visa",
	"Group Tour + Visit Visa",
	"Student Visa"
];
var EMPLOYMENT = [
	"Employed",
	"Business Owner",
	"Student"
];
function ApplyModal({ isOpen, onClose, preset }) {
	const [form, setForm] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		phone: "",
		destination: "",
		category: "Visit Visa",
		employment: "Employed",
		bankStatement: "Yes"
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [formStatus, setFormStatus] = (0, import_react.useState)("IDLE");
	(0, import_react.useEffect)(() => {
		if (isOpen && preset) setForm((f) => ({
			...f,
			destination: preset.destination ?? f.destination,
			category: CATEGORIES.includes(preset.category ?? "") ? preset.category : f.category
		}));
	}, [isOpen, preset]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);
	const update = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		const result = schema.safeParse(form);
		if (!result.success) {
			const errs = {};
			for (const issue of result.error.issues) errs[issue.path.join(".")] = issue.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		setFormStatus("SUBMITTING");
		const { firstName, lastName, ...rest } = result.data;
		const computedFullName = `${firstName} ${lastName}`.trim();
		try {
			if ((await fetch("https://formspree.io/f/mjgqoevn", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					fullName: computedFullName,
					...rest
				})
			})).ok) {
				setFormStatus("SUCCESS");
				setForm({
					firstName: "",
					lastName: "",
					phone: "",
					destination: "",
					category: "Visit Visa",
					employment: "Employed",
					bankStatement: "Yes"
				});
				setTimeout(() => {
					setFormStatus("IDLE");
					onClose();
				}, 2200);
			} else setFormStatus("ERROR");
		} catch (err) {
			console.error("Data syncing loop context failure:", err);
			setFormStatus("ERROR");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-slate-950/80 backdrop-blur-md",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .97
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .97
			},
			transition: {
				duration: .45,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "relative w-full max-w-2xl max-h-[85vh] sm:max-h-none glass-panel-strong rounded-3xl p-6 sm:p-10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				whileTap: { scale: .9 },
				onClick: onClose,
				className: "absolute right-4 top-4 z-50 p-2.5 rounded-full border border-white/10 bg-slate-900/95 text-gold shadow-md backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-foreground active:bg-slate-800 flex items-center justify-center",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-y-auto pr-2 sm:pr-0 scrollbar-thin w-full flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 pr-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.4em] text-gold",
							children: "Visa Assessment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-2xl text-foreground sm:text-4xl",
							children: ["Begin your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-gradient",
								children: "journey"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Share your background metrics. Our compliance unit will assess your credentials and dispatch strategy data straight to your email inbox."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "First Name",
							error: errors.firstName,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.firstName,
								onChange: (e) => update("firstName", e.target.value),
								placeholder: "Enter your first name",
								className: "input-base text-base",
								disabled: formStatus === "SUBMITTING"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Last Name",
							error: errors.lastName,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.lastName,
								onChange: (e) => update("lastName", e.target.value),
								placeholder: "Enter your last name",
								className: "input-base text-base",
								disabled: formStatus === "SUBMITTING"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone Number",
							error: errors.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.phone,
								onChange: (e) => update("phone", e.target.value),
								type: "tel",
								placeholder: "+92 3xx xxxxxxx",
								className: "input-base text-base",
								disabled: formStatus === "SUBMITTING"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Destination Country",
							error: errors.destination,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.destination,
								onChange: (e) => update("destination", e.target.value),
								list: "dest-list",
								placeholder: "e.g. Turkey",
								className: "input-base text-base",
								disabled: formStatus === "SUBMITTING"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
								id: "dest-list",
								children: VISA_CATALOG.flatMap((c) => c.countries).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c }, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Visa Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => update("category", e.target.value),
								className: "input-base text-base bg-slate-900",
								disabled: formStatus === "SUBMITTING",
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-slate-900",
									children: c
								}, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Employment Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.employment,
								onChange: (e) => update("employment", e.target.value),
								className: "input-base text-base bg-slate-900",
								disabled: formStatus === "SUBMITTING",
								children: EMPLOYMENT.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									className: "bg-slate-900",
									children: c
								}, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "6-Month Bank Statement Available?",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3",
								children: ["Yes", "No"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileTap: { scale: .98 },
									type: "button",
									onClick: () => update("bankStatement", v),
									disabled: formStatus === "SUBMITTING",
									className: `flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition ${form.bankStatement === v ? "border-gold/60 bg-gold/10 text-gold" : "border-white/10 text-muted-foreground"}`,
									children: v
								}, v))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center sm:text-left min-h-[32px] flex items-center",
								children: [
									formStatus === "SUCCESS" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-emerald-400 font-medium flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 shrink-0 animate-bounce" }), " Profile metrics synced securely to inbox."]
									}),
									formStatus === "ERROR" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-rose-400 font-medium",
										children: "Transmission issue. Please verify fields and try again."
									}),
									formStatus === "IDLE" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Your profile vectors are parsed strictly using secure email routing protocols."
									}),
									formStatus === "SUBMITTING" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-amber-400 font-medium animate-pulse",
										children: "Encrypting portfolio records..."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileTap: { scale: .97 },
								type: "submit",
								disabled: formStatus === "SUBMITTING",
								className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 gold-glow transition-all disabled:opacity-50",
								children: [formStatus === "SUBMITTING" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Submit Profile"]
							})]
						})
					]
				})]
			})]
		})]
	}) });
}
function Field({ label, error, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `flex flex-col gap-2 w-full ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-destructive font-medium mt-0.5",
				children: error
			})
		]
	});
}
var ApplyCtx = (0, import_react.createContext)(null);
function ApplyModalProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [preset, setPreset] = (0, import_react.useState)({});
	const open = (0, import_react.useCallback)((p) => {
		setPreset(p ?? {});
		setIsOpen(true);
	}, []);
	const close = (0, import_react.useCallback)(() => setIsOpen(false), []);
	const ctx = (0, import_react.useMemo)(() => ({
		open,
		close
	}), [open, close]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ApplyCtx.Provider, {
		value: ctx,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyModal, {
			isOpen,
			onClose: close,
			preset
		})]
	});
}
function useApplyModal() {
	const c = (0, import_react.useContext)(ApplyCtx);
	if (!c) throw new Error("useApplyModal must be used within ApplyModalProvider");
	return c;
}
//#endregion
export { useApplyModal as a, VISA_CATALOG as i, COUNTRY_FLAG as n, SITE as r, ApplyModalProvider as t };
