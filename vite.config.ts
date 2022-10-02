/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@components": path.resolve(
        __dirname,
        "./src/components",
      ),
      "@templates": path.resolve(
        __dirname,
        "./src/templates",
      ),
    },
  },
  build: {
    outDir: "./dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./.test/setup.ts"],
  },
})