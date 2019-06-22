const tasks = arr => arr.join(" && ");

const beforeCommit = tasks(["npm run lint-staged", "npm run test"]);
const beforePush = tasks(["npm run lint", "npm run test"]);

module.exports = {
  hooks: {
    "pre-commit": beforeCommit,
    "pre-push": beforePush
  }
};
