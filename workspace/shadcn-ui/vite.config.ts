import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  base: '/My-Portfolio/', // <-- Moved this line out of the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));