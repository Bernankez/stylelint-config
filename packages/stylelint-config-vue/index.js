const { isPackageExists } = require("local-pkg");

const SCSS = isPackageExists("sass");
// const LESS = isPackageExists("less");
const LESS = false;
const POST_CSS = SCSS || LESS;

if (SCSS) {
  console.warn("[@bernankez/stylelint-config] scss detected.");
}
if (LESS) {
  console.warn("[@bernankez/stylelint-config] less detected.");
}

module.exports = {
  extends: [
    POST_CSS ? null : "@bernankez/stylelint-config-basic",
    SCSS ? "@bernankez/stylelint-config-scss" : null,
    LESS ? "@bernankez/stylelint-config-less" : null,
    // lint style in html-like
    "stylelint-config-html",
  ],
  overrides: {
    files: ["*.vue", "**/*.vue"],
    rules: {
      "selector-pseudo-class-no-unknown": [
        true,
        {
          ignorePseudoClasses: ["deep", "global"],
        },
      ],
      "selector-pseudo-element-no-unknown": [
        true,
        {
          ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
        },
      ],
      "function-no-unknown": POST_CSS ? null : [true, { ignoreFunctions: ["v-bind"] }],
      "value-keyword-case": [
        "lower",
        {
          ignoreFunctions: ["v-bind"],
        },
      ],
    },
  },
};
