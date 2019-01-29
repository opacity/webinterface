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
    "no-unexpected-multiline": true,
    "ter-no-irregular-whitespace": [true],
    "ter-indent": [
      true,
      2,
      {
        "SwitchCase": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        }
      }
    ],
    semicolon: [true, "always"],
    quotemark: [
      true,
      "double",
      "jsx-double",
      "avoid-template",
      "avoid-escape"
    ],
    "indent": [
      true,
      "spaces",
      2
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
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
