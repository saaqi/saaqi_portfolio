const IN_PRODUCTION = process.env.NODE_ENV === "production";
const bootstrap = "node_modules/bootstrap"

module.exports = {
  plugins: [
    IN_PRODUCTION && require("@fullhuman/postcss-purgecss")({
      content: [
        "index.html",
        "./src/**/*.js",
        `${bootstrap}/dist/js/bootstrap.bundle.min.js`,
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(
            /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
          ) || []
        );
      },
      keyframes: true, // remove unsed keyframe rules
      variables: true, // remove unused variables as well
    }),

    IN_PRODUCTION && require("autoprefixer"),

    IN_PRODUCTION && require("cssnano")({
      preset: ["default", { discardComments: { removeAll: true } }],
    }),
  ],
};
