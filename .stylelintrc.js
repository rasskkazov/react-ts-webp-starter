module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "font-family-name-quotes": "always-where-recommended",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "media-query-no-invalid": null,
    "import-notation": null,
  },
};
