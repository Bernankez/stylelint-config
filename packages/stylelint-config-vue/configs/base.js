module.exports = {
  extends: [
    "@bernankez/stylelint-config-basic",
    "stylelint-config-html",
  ],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      extends: ["@bernankez/stylelint-config-scss"],
    },
    {
      files: ["*.less", "**/*.less"],
      extends: ["@bernankez/stylelint-config-less"],
    },
  ],
};
