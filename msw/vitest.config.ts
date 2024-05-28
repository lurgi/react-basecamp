import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@/constants", replacement: resolve(__dirname, "src/constants") },
      { find: "@", replacement: resolve(__dirname, "src") },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.polyfills.ts"],
  },
});
