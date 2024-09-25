import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  port: 3000,

  plugins: [react()],
  proxy: {
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
      secure: false,
    },
  },
});
