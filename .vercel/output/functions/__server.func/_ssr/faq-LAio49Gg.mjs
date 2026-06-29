import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { T as CircleQuestionMark, h as FileText, i as ShieldCheck, l as MessageSquare, v as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as Layout, r as SectionHeading } from "./SectionHeading-EDtUd6Et.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-LAio49Gg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Process",
	"Documentation",
	"Work Permits",
	"Compliance"
];
var FAQ_DATA = [
	{
		category: "Process",
		question: "What is your average processing timeline for a visit or work visa?",
		answer: "Timelines vary heavily by destination. For instance, Turkey and Kyrgyzstan work permits typically take between 45 to 90 days for complete profiling, verification, and government issuance. Standard visit visas or tourist routes can range from 2 to 6 weeks depending on embassy appointment queues."
	},
	{
		category: "Documentation",
		question: "What financial documents do I need to prepare for a student or visit route?",
		answer: "Most jurisdictions require a closing bank statement covering the last 3 to 6 months alongside an account maintenance certificate. The required closing balance depends strictly on your destination country's baseline living expense index. Our consultants cross-check your statement thresholds before finalizing embassy files."
	},
	{
		category: "Work Permits",
		question: "Are your corporate group or individual work permits legally registered?",
		answer: "Absolutely. ZAK Consultants is a registered Private Limited firm in Pakistan. Every work permit route we file undergoes strict regulatory screening, legal employer verification in the host country, and complete compliance profiling before embassy submission."
	},
	{
		category: "Compliance",
		question: "Do you guarantee visa approval?",
		answer: "No legitimate consultancy can guarantee a visa, as final approval rests solely with the respective country's consular officers. However, we maintain a 99% approval track record by implementing rigorous pre-screening metrics; if your legal profiling or financial matrix doesn't safely meet embassy thresholds, we will advise restructuring your case before filing."
	},
	{
		category: "Documentation",
		question: "Can you help me structure my Statement of Purpose (SOP) for student paths?",
		answer: "Yes. Our senior consultants review and structure study gap explanations, statements of purpose, and source-of-income document trails to optimize your evaluation layout for first-attempt success."
	},
	{
		category: "Process",
		question: "How do I begin my assessment path with ZAK Consultants?",
		answer: "You can initiate your process by clicking any 'Check Eligibility' button across our portal to open a tailored assessment window. Alternatively, you can drop a quick inquiry that goes directly to our team via WhatsApp, or visit our central office in Peshawar for a full, physical case consultation."
	}
];
function FAQPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const [expandedIndex, setExpandedIndex] = (0, import_react.useState)(null);
	const filteredFaqs = FAQ_DATA.filter((faq) => activeTab === "All" || faq.category === activeTab);
	const toggleExpand = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};
	const getIcon = (cat) => {
		switch (cat) {
			case "Process": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 text-[#b88939]" });
			case "Documentation": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-[#b88939]" });
			case "Work Permits": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#b88939]" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 text-[#b88939]" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen text-slate-800",
		style: { backgroundColor: "#FAF7F2" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pb-12 pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#b889390a_1px,transparent_1px)] [background-size:24px_24px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-white/40 via-[#FAF7F2]/80 to-[#FAF7F2]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 pt-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Help Desk",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Clear answers for your ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#b88939] italic font-normal",
							children: "global"
						}),
						" journey"
					] }),
					intro: "Everything you need to know about documentation thresholds, legal processing, and case workflows."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap justify-center gap-2 relative z-10",
					children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setActiveTab(cat);
							setExpandedIndex(null);
						},
						className: `relative rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${activeTab === cat ? "border-[#b88939]/30 bg-[#b88939]/10 text-[#b88939] shadow-sm" : "border-slate-200/80 bg-white text-slate-500 hover:border-[#b88939]/30 hover:text-slate-900 shadow-sm"}`,
						children: cat
					}, cat))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-32 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filteredFaqs.map((faq, index) => {
							const isExpanded = expandedIndex === index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									y: 15
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
									duration: .35,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-xl shadow-slate-900/[0.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toggleExpand(index),
									className: "flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-[#FAF7F2]/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 pr-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 shrink-0 rounded-lg bg-[#FAF7F2] p-2 border border-[#b88939]/10",
											children: getIcon(faq.category)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono uppercase tracking-widest text-[#b88939] block mb-1 font-semibold",
											children: faq.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-base md:text-lg text-slate-900 font-medium tracking-wide",
											children: faq.question
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "shrink-0 rounded-full border border-slate-100 p-1.5 bg-slate-50/50 text-slate-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-500 ease-out text-[#b88939] ${isExpanded ? "rotate-180" : "rotate-0"}` })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											height: 0,
											opacity: 0
										},
										animate: {
											height: "auto",
											opacity: 1
										},
										exit: {
											height: 0,
											opacity: 0
										},
										transition: {
											duration: .3,
											ease: "easeInOut"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-t border-slate-100 bg-[#FAF7F2]/40 px-6 pb-6 pt-4 ml-14 mr-6 mb-2 rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-serif text-sm md:text-base leading-relaxed text-slate-600 italic",
												children: [
													"\"",
													faq.answer,
													"\""
												]
											})
										})
									})
								})]
							}, faq.question);
						})
					})
				})
			})
		})] })
	});
}
//#endregion
export { FAQPage as component };
