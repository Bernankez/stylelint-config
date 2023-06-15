const vueBaseRules = require("../rules/vue");

module.exports = {
  extends: ["../configs/base"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "@bernankez/stylelint-config-scss",
        "stylelint-config-html",
      ],
      rules: {
        ...vueBaseRules,
        ...(vueBaseRules["function-no-unknown"] ? { "function-no-unknown": null } : {}),
      },
    },
  ],
};
