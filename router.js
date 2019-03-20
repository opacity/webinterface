const express = require("express");
const path = require("path");

const args = process.argv.slice(2).reduce((acc, cur) => Object.assign(acc, {
  [cur.split("=")[0]]: cur.split("=")[1] || true
}), {});

/*
 * makeSubdomainMiddleware creates a custom subdomain route
 * which serves a different file depending on the subdomain
 * example: ```
 * const storageSubdomainMiddleware = makeSubdomainMiddleware("storage", (req, res) => {
 * res.sendFile(path.resolve("build/storage.html"));
 * });
 */
// const makeSubdomainMiddleware = (subdomain, fn) => (req, res, next) => {
//   if (!(subdomain instanceof RegExp)) {
//     subdomain = new RegExp(`${subdomain}\\.`, "g");
//   }
//   if (req.hostname.match(subdomain)) {
//     fn(req, res);
//   } else {
//     next();
//   }
// };

// here begins the server
const app = express();

app.use("/", express.static("build"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("build/index.html"));
});

const port = args["--port"] || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
