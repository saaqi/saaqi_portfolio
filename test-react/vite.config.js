import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import webfontDownload from "vite-plugin-webfont-dl";

const IN_PRODUCTION = process.env.NODE_ENV === "production";
const IN_DEVELOPMENT = process.env.NODE_ENV === "development";

// Hide Preloader while in development.
const hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/css/preloader.css" type="text/css" media="screen">`,
        `<!-- <link rel="stylesheet" href="./src/css/preloader.css" type="text/css" media="screen"> -->`
      );
    }
  }
}

export default defineConfig({
  plugins: [
  
    // enable react Plugin
    react(),

    /* ## Hide Preloader while in Development
    --------------------------------------------- */
    IN_DEVELOPMENT && hidePreloader(),

    /* ## Download Google Fonts and attach them with production build for offline use
    --------------------------------------------- */
    IN_PRODUCTION && webfontDownload(
      [
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
      ]
    ),

  ],

  base: "./",
  server: {
    port: 3000,
  },

  build: {
    outDir: "./docs",
  },
  
});
