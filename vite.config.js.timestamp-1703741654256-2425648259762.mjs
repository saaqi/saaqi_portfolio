// vite.config.js
import { defineConfig } from "file:///D:/Dropbox/Websites/saaqi_portfolio/node_modules/vite/dist/node/index.js";
import webfontDownload from "file:///D:/Dropbox/Websites/saaqi_portfolio/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { ViteMinifyPlugin } from "file:///D:/Dropbox/Websites/saaqi_portfolio/node_modules/vite-plugin-minify/dist/index.js";
var IN_PRODUCTION = process.env.NODE_ENV === "production";
var IN_DEVELOPMENT = process.env.NODE_ENV === "development";
var vite_config_default = defineConfig({
  plugins: [
    /* ## Hide Preloader while in Development
    --------------------------------------------- */
    // IN_DEVELOPMENT && hidePreloader(),
    /* ## Download Google Fonts and attach them with production build for offline use
    --------------------------------------------- */
    IN_PRODUCTION && webfontDownload(
      [
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      ]
    ),
    /* ## Minify the output HTML files in production
    --------------------------------------------- */
    IN_PRODUCTION && ViteMinifyPlugin({})
  ],
  base: "./",
  server: {
    port: 3e3
  },
  build: {
    outDir: "./docs"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEcm9wYm94XFxcXFdlYnNpdGVzXFxcXHNhYXFpX3BvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRHJvcGJveFxcXFxXZWJzaXRlc1xcXFxzYWFxaV9wb3J0Zm9saW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Ryb3Bib3gvV2Vic2l0ZXMvc2FhcWlfcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB3ZWJmb250RG93bmxvYWQgZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcbmltcG9ydCB7IFZpdGVNaW5pZnlQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tbWluaWZ5XCI7XG4vLyBpbXBvcnQgeyBjb21tZW50IH0gZnJvbSBcInBvc3Rjc3NcIjtcbmNvbnN0IElOX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5jb25zdCBJTl9ERVZFTE9QTUVOVCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCI7XG5cbi8vIEhpZGUgUHJlbG9hZGVyIHdoaWxlIGluIGRldmVsb3BtZW50LlxuLy8gY29uc3QgaGlkZVByZWxvYWRlciA9ICgpID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBuYW1lOiBcImhpZGUtcHJlbG9hZGVyXCIsXG4vLyAgICAgdHJhbnNmb3JtSW5kZXhIdG1sKGh0bWwpIHtcbi8vICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoXG4vLyAgICAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vc3JjL2Nzcy9wcmVsb2FkZXIubWluLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwic2NyZWVuXCI+YCxcbi8vICAgICAgICAgYDwhLS0gPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3NyYy9jc3MvcHJlbG9hZGVyLm1pbi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiBtZWRpYT1cInNjcmVlblwiPiAtLT5gXG4vLyAgICAgICApO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG5cbiAgICAvKiAjIyBIaWRlIFByZWxvYWRlciB3aGlsZSBpbiBEZXZlbG9wbWVudFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8vIElOX0RFVkVMT1BNRU5UICYmIGhpZGVQcmVsb2FkZXIoKSxcblxuICAgIC8qICMjIERvd25sb2FkIEdvb2dsZSBGb250cyBhbmQgYXR0YWNoIHRoZW0gd2l0aCBwcm9kdWN0aW9uIGJ1aWxkIGZvciBvZmZsaW5lIHVzZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIElOX1BST0RVQ1RJT04gJiYgd2ViZm9udERvd25sb2FkKFxuICAgICAgW1xuICAgICAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiLFxuICAgICAgXVxuICAgICksXG5cbiAgICAvKiAjIyBNaW5pZnkgdGhlIG91dHB1dCBIVE1MIGZpbGVzIGluIHByb2R1Y3Rpb25cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICBJTl9QUk9EVUNUSU9OICYmIFZpdGVNaW5pZnlQbHVnaW4oe30pLFxuICBdLFxuXG4gIGJhc2U6IFwiLi9cIixcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfSxcblxuICBidWlsZDoge1xuICAgIG91dERpcjogXCIuL2RvY3NcIixcbiAgfSxcbiAgXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVMsU0FBUyxvQkFBb0I7QUFDaFUsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyx3QkFBd0I7QUFFakMsSUFBTSxnQkFBZ0IsUUFBUSxJQUFJLGFBQWE7QUFDL0MsSUFBTSxpQkFBaUIsUUFBUSxJQUFJLGFBQWE7QUFlaEQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFQLGlCQUFpQjtBQUFBLE1BQ2Y7QUFBQSxRQUNFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUEsSUFJQSxpQkFBaUIsaUJBQWlCLENBQUMsQ0FBQztBQUFBLEVBQ3RDO0FBQUEsRUFFQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
