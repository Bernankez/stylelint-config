const vueBaseRules = require(".vue-base-rules");

module.exports = {
  extends: ["./base-configs"],
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
