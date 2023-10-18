import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
      name: "LLClientLibrary",
    },
    /**
     * This option will only minify the UMD output. Package users can still see
     * the unminified "index.es.js" output.
     */
    minify: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),

    // This option MUST come last. Note that build size WILL NOT represent build
    // size in client app because it is not minified (client app should handle
    // minification).
    visualizer({ brotliSize: true, open: !!process.env.STATS }) as PluginOption,
  ],
});
