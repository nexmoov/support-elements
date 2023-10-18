import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        "localization/index": path.resolve(__dirname, "src/localization/index.tsx"),
        "ui/index": path.resolve(__dirname, "src/ui/index.tsx"),
        "utils/index": path.resolve(__dirname, "src/utils/index.ts"),
      },
      name: "LL_Core",
    },
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
    /**
     * This option will only minify the UMD output. Package users can still see
     * the unminified "index.es.js" output.
     */
    minify: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
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

    // Has to be after generating the types
    react(),

    // This option MUST come last. Note that build size WILL NOT represent build
    // size in client app because it is not minified (client app should handle
    // minification).
    visualizer({ brotliSize: true, open: !!process.env.STATS }) as PluginOption,
  ],
});
