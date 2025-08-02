import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.css"],
    rules: {
      "css/at-rule-no-unknown": [
        "error",
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen",
            "theme",
            "layer",
            "custom-variant"
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
