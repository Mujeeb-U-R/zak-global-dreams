import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as SITE, t as ApplyModalProvider } from "./ApplyModalProvider-OO51rRbf.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DjGO6PL4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BOgAQxv_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ZAK Consultants (Pvt.) Ltd. — Global Visa Solutions, Peshawar" },
			{
				name: "description",
				content: "Premier corporate visa & travel consultancy in Peshawar. Work permits, visit visas, group tours and student visas — 99% approval rate."
			},
			{
				name: "author",
				content: "ZAK Consultants"
			},
			{
				property: "og:title",
				content: "ZAK Consultants (Pvt.) Ltd."
			},
			{
				property: "og:description",
				content: "Your Trusted Partner for Global Visa Solutions."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#090d16"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "preconnect",
			href: "https://videos.pexels.com"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyModalProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			"/",
			"/about",
			"/portfolio",
			"/gallery",
			"/contact"
		].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./portfolio-C_PT7M-8.mjs");
var Route$5 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Visa Portfolio & Routes — ZAK Consultants" },
		{
			name: "description",
			content: "Explore work permits, visit visas, group tours and student visa routes across Kyrgyzstan, Turkey, Schengen, U.S.A, Canada, U.K and more."
		},
		{
			property: "og:title",
			content: "Visa Portfolio & Routes"
		},
		{
			property: "og:description",
			content: "Filterable directory of every visa route we process."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gallery-BzV2W6e2.mjs");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Success Gallery — ZAK Consultants" },
		{
			name: "description",
			content: "Approved visa stickers, client reviews and global travel moments from ZAK Consultants clients."
		},
		{
			property: "og:title",
			content: "Success Gallery"
		},
		{
			property: "og:description",
			content: "Real outcomes, real travelers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faq-LAio49Gg.mjs");
var Route$3 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "Frequently Asked Questions — ZAK Consultants" },
		{
			name: "description",
			content: "Find answers about visa processing times, required documentation, work permit registration, and legal compliance at ZAK Consultants."
		},
		{
			property: "og:title",
			content: "Frequently Asked Questions"
		},
		{
			property: "og:description",
			content: "Clear, transparent answers to your immigration and travel queries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Bgdw5s-Q.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — ZAK Consultants, Peshawar" },
		{
			name: "description",
			content: `Visit our office at ${SITE.address}. Daily 12:30 PM – 11:30 PM. WhatsApp ${SITE.phoneDisplay}.`
		},
		{
			property: "og:title",
			content: "Contact ZAK Consultants"
		},
		{
			property: "og:description",
			content: "Office in GS Tower, Ring Road, Peshawar."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-D4n9Pcur.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "Our Legacy & Team — ZAK Consultants" }, {
		name: "description",
		content: "Meticulous case preparation, legal documentation handling, and structured profiling built on trust."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BKSouPz0.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ZAK Consultants — Global Visa Solutions" },
		{
			property: "og:image",
			content: SITE.logo
		},
		{
			name: "description",
			content: SITE.tagline + " Work permits, visit, student and group tour visas processed from Peshawar."
		},
		{
			property: "og:title",
			content: "ZAK Consultants — Global Visa Solutions"
		},
		{
			property: "og:description",
			content: SITE.tagline
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var PortfolioRoute = Route$5.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$7
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$7
});
var FaqRoute = Route$3.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	PortfolioRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
