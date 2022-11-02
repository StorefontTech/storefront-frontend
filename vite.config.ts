import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    relay,
  ],
  build: {
    sourcemap: true,
  },
});
