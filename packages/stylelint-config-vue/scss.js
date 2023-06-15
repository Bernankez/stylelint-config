const baseVueRules = require("./rules/vue");

module.exports = {
  extends: ["./configs/base"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "@bernankez/stylelint-config-scss",
        "stylelint-config-html",
      ],
      rules: {
        ...baseVueRules,
        ...(baseVueRules["function-no-unknown"] ? { "function-no-unknown": null } : {}),
      },
    },
  ],
};
