const tasks = arr => arr.join(' && ')

const beforeChange = tasks([
  "npm run lint",
  "npm run test"
])

module.exports = {
  hooks: {
    "pre-commit": "npm run before-change",
    "pre-push": "npm run before-change"
  }
};
