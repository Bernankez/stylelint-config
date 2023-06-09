module.exports = {
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
  "value-keyword-case": [
    "lower",
    {
      ignoreFunctions: ["v-bind"],
    },
  ],
};
