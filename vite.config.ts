import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1. Split React core
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // 2. Split Charts (Heavy)
            if (id.includes('d3') || id.includes('recharts')) {
              return 'charts';
            }
            // 3. Split Animations (Heavy)
            if (id.includes('framer-motion')) {
              return 'animations';
            }

            // REMOVED the 'return vendor' line here. 
            // Letting Vite handle the rest automatically prevents circular errors.
          }
        },
      },
    },
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});