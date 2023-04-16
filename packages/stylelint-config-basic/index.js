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
    "node_modules/**/*",
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
    /**
     * @see https://github.com/WordPress/gutenberg/issues/28616#issuecomment-775221812
     */
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*((__([a-z][a-z0-9]*)(-[a-z0-9]+)*)?(--([a-z][a-z0-9]*)(-[a-z0-9]+)*)?)*$",
      {
        message: selector => `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
  },
};
