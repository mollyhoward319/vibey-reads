import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  port: 3000,
  plugins: [react()],
  proxy: {
    "/": {
      target: "https://vibey-reads-ndt1.onrender.com",
      changeOrigin: true,
      secure: false,
    },
  },
});
