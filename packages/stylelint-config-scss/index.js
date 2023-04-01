module.exports = {
  extends: "@bernankez/stylelint-config-basic",
  plugins: [
    "stylelint-scss",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
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
