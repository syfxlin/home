const withMDX = require("@next/mdx")();
const withNextPluginPreval = require("next-plugin-preval/config")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
};
module.exports = withNextPluginPreval(withMDX(nextConfig));
