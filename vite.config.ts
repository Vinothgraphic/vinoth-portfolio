// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // Load environment variables based on current mode (development, production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    // Optimize deps: useful for large ESM-only packages like lucide-react
    optimizeDeps: {
      exclude: ['lucide-react'],
    },

    // Conditional base (useful if deploying to subpath, e.g. /my-app/)
    base: command === 'build' ? '/' : '/',

    // Build output settings
    build: {
      outDir: 'dist', // matches Netlify's expected publish directory
      emptyOutDir: true,
      sourcemap: false, // set to true only for debugging
    },

    // Expose environment variables to your app
    define: {
      'import.meta.env.APP_ENV': JSON.stringify(env.APP_ENV),
    },
  };
});