module.exports = {
  extends: "./standard",
  plugins: [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": true,
      "empty-line-between-groups": false,
    }],
  },
};
