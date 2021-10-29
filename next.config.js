const withMdx = require("@next/mdx")({
  extensions: /\.mdx?$/,
});
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
  pwa: {
    sw: "serviceworker.js",
    dest: "public",
  },
};

module.exports = withMdx(withPWA(config));
