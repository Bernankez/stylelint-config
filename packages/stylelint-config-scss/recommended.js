// Inline from https://github.com/stylelint-scss/stylelint-config-recommended-scss/blob/master/index.js
// Until it upgrades

const postcssScss = require("postcss-scss");

module.exports = {
  extends: ["@bernankez/stylelint-config-basic"],
  plugins: ["stylelint-scss"],
  customSyntax: postcssScss,
  rules: {
    "annotation-no-unknown": null,
    "at-rule-no-unknown": null,
    "comment-no-empty": null,
    "function-no-unknown": null,
    "no-invalid-position-at-import-rule": [
      true,
      {
        ignoreAtRules: ["use", "forward"],
      },
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-rule-no-unknown": true,
    "scss/comment-no-empty": true,
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,
    "scss/no-duplicate-mixins": true,
    "scss/no-global-function-names": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
  },
};
