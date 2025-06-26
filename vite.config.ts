import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  /*base: '/DataIvoire/', */// Remplacez "project-name" par le nom de votre projet GitLab // Remplacez "project-name" par le nom de votre projet GitLab
  plugins: [react()],
});
