const withMDX = require("@next/mdx")();
const withNextPluginPreval = require("next-plugin-preval/config")();
const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
  pwa: {
    sw: "serviceworker.js",
    dest: "public",
  },
};
module.exports = withNextPluginPreval(withMDX(withPWA(nextConfig)));
