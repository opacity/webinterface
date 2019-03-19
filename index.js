const express = require("express");

const app = express();

const subdomainMiddleware = (req, res, next) => {
  if (req.hostname.match(/storage\./g)) {
    res.sendFile(path.resolve("index.html"));
  } else {
    next();
  }
};

app.get("/storage*", subdomainMiddleware, (req, res) => {
  res.sendFile(path.resolve("index.html"));
});
