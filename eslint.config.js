import config from "@syfxlin/eslint-config";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import tailwind from "eslint-plugin-tailwindcss";

const root = dirname(fileURLToPath(import.meta.url));
const tailwindRecommended = tailwind.configs.recommended;

export default config(
  {
    jsx: true,
    react: true,
    typescript: true,
    formatters: true,
    tailwindcss: false,
    rules: {
      "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: "always" }],
    },
  },
  {
    ...tailwindRecommended,
    settings: {
      ...(tailwindRecommended.settings ?? {}),
      tailwindcss: {
        ...(tailwindRecommended.settings?.tailwindcss ?? {}),
        cssConfigPath: join(root, "src/theme/globals.css"),
      },
    },
    rules: {
      ...(tailwindRecommended.rules ?? {}),
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
);
