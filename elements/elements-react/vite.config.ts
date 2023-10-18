import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "LLElementsReact",
    },
    /**
     * This option will only minify the UMD output. Package users can still see
     * the unminified "index.es.js" output.
     */
    minify: true,
    rollupOptions: {
      /**
       * Externalize peer dependencies
       */
      external: ["react", "react-dom", "styled-components", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "framer-motion": "framerMotion",
        },
      },
    },
  },

  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },

  /**
   * This is needed to allow Cypress tests to run
   */
  optimizeDeps: {
    include: ["@local-logic/client", "@local-logic/core"],
  },

  server: {
    port: 3004,
  },

  plugins: [
    svgr({
      exportAsDefault: true,
    }),

    /**
     * Generate typings
     */
    dts({
      insertTypesEntry: true,
    }),

    react(),

    // This option MUST come last. Note that build size WILL NOT represent build
    // size in client app because it is not minified (client app should handle
    // minification).
    visualizer({ brotliSize: true, open: !!process.env.STATS }) as PluginOption,
  ],
});
