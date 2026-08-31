import { baseConfig } from "./base.js";

/** @type {import("eslint").Linter.Config[]} */
export const nestjsConfig = [
  ...baseConfig,
  {
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "off",
    },
  },
];
