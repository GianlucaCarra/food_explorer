import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "certs", "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname,"certs", "localhost.pem")),
    },
    port: 2000
  }
});
