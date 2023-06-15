const vueBaseRules = require("./vue-base-rules");

module.exports = {
  extends: ["./base-configs"],
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
