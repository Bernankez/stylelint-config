module.exports = {
  extends: [
    "./deprecated",
    "./standard",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  ignoreFiles: [
    "**/*.d.ts",
    "**/*.patch",
    "CHANGELOG.md",
    "**/dist/**/*",
    "**/dev-dist/**/*",
    ".nuxt/**/*",
    ".output/**/*",
    "LICENSE*",
    "output/**/*",
    "out/**/*",
    "coverage/**/*",
    "public/**/*",
    "temp/**/*",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__/**/*",
    // ignore for in lint-staged
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",
    // force include
    // "!.vitepress",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": true,
      "empty-line-between-groups": false,
    }],

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "layer",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      }],
  },
};
