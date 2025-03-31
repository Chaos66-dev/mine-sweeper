import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows the server to be accessible from outside the container
    port: 5173,        // Match this with your Docker Compose port
    watch: {
      usePolling: true, // Enables polling to detect file changes inside Docker
    },
  },
})
