const baseVueRules = require("./configs/vue");

module.exports = {
  extends: ["./configs/base"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "@bernankez/stylelint-config-basic",
        "stylelint-config-html",
      ],
      rules: baseVueRules,
    },
  ],
};
