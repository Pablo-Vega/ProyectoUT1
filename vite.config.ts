/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import mdx from "@mdx-js/rollup";  // Importar el plugin de MDX

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "milibreria",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts(),
    mdx()  // Añadir el plugin de MDX
  ],  
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest",
  },
});
