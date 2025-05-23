import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // Add this section for Vitest
    globals: true, // Allows using describe, it, expect, etc. without importing them
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/setupTests.js', // Optional: if you need setup files
  },
});
