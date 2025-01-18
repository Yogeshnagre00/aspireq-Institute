import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
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
