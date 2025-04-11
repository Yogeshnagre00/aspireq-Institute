import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    minify: "terser", // Use Terser for better minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom")) {
              return "react-router-dom"; // Separate react-router-dom chunk
            }
            return "vendor"; // General vendor chunk
          }
        },
      },
    },
  },
});
