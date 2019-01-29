module.exports = {
  compilerOptions: {
    allowJs: true,
    checkJs: true
  },
  linterOptions: {
    format: "stylish",
    exclude: [
      "node_modules/**/*",
      "build/**/*",
      "dist/**/*",
      "coverage/**/*",
      "cypress/**/*"
    ]
  },
  extends: [
    "tslint-config-standard",
    "tslint-react"
  ],
  jsRules: true,
  rules: {
    "space-before-function-paren": [true, "always"],
    "arrow-parens": [true, "ban-single-arg-parens"],
    semicolon: [true, "always"],
    quotemark: [
      true,
      "double",
      "jsx-double",
      "avoid-template",
      "avoid-escape"
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      // "check-module",
      "check-rest-spread",
      "check-type",
      "check-typecast",
      // "check-type-operator",
      "check-preblock"
    ],
    "no-empty": { severity: "warning" },
    // jsx rules
    "jsx-no-lambda": { severity: "warning" },
    "jsx-no-multiline-js": { severity: "warning" }
  }
};
