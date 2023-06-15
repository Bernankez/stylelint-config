const vueBaseRules = require("./rules/vue");

module.exports = {
  extends: ["./configs/base"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "@bernankez/stylelint-config-basic",
        "stylelint-config-html",
      ],
      rules: vueBaseRules,
    },
  ],
};
