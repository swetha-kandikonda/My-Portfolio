import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  base: '/My-Portfolio/', // <-- Moved this line out of the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));