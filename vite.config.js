import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/register": "http://localhost:5000",
      "/login": "http://localhost:5000",
    },
  },
});
