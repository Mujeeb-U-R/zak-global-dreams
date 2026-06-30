// @lovable.dev/vite-tanstack-config already includes default plugins.
// Passing additional manual settings safely via defineConfig overrides:
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  vite: {
    // Explicitly ensures Vite maps the root static public directory during the asset build loop
    publicDir: "public",
  },
});