module.exports = {
  extends: [
    "react-app",
    "standard"
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  }
};
