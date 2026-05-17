import config from "@syfxlin/eslint-config";

export default config({
  jsx: true,
  react: true,
  typescript: true,
  formatters: true,
  tailwindcss: true,
  rules: {
    "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: "always" }],
  },
});
