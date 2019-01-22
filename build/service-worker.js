"use strict";
var precacheConfig = [
    ["index.html", "58f920a9039cc949928e0dedc316c196"],
    ["main.be26b96ad78bad6838f8.css", "cad1c1000a5761e4e55d43d17c2c1b6d"],
    [
      "static/js/opacity-webnode-0.0.1.min.js",
      "01db1031fb82e4833da7a530b50adc5a"
    ],
    [
      "static/media/icon_copy.941fa29236b72260b03b069e2da8692a.svg",
      "941fa29236b72260b03b069e2da8692a"
    ],
    [
      "static/media/icon_download.74adadb74697eb00433751631986b4ef.svg",
      "74adadb74697eb00433751631986b4ef"
    ],
    [
      "static/media/icon_error.7e4aa6be1fdc012627914e482debeb0a.png",
      "7e4aa6be1fdc012627914e482debeb0a"
    ],
    [
      "static/media/icon_folder.4526cb88113e9e92a0890e0ae45b914b.svg",
      "4526cb88113e9e92a0890e0ae45b914b"
    ],
    [
      "static/media/icon_ready.8ef7c02566f1e33cf53aefcc8419d19b.png",
      "8ef7c02566f1e33cf53aefcc8419d19b"
    ],
    [
      "static/media/icon_spinner.796ce26bccf4f992178dfb542a41e687.png",
      "796ce26bccf4f992178dfb542a41e687"
    ],
    [
      "static/media/icon_tangle_up.8b9cdce941e2ee2fd5219075ab724b00.png",
      "8b9cdce941e2ee2fd5219075ab724b00"
    ],
    [
      "static/media/icon_upload.b3451fba2b046a4eea15540573e370d7.svg",
      "b3451fba2b046a4eea15540573e370d7"
    ],
    [
      "static/media/logo.6d0f325521092ac96f55f8ed3158090e.svg",
      "6d0f325521092ac96f55f8ed3158090e"
    ]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var n = new URL(e);
    return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
  },
  cleanResponse = function(t) {
    return t.redirected
      ? ("body" in t ? Promise.resolve(t.body) : t.blob()).then(function(e) {
          return new Response(e, {
            headers: t.headers,
            status: t.status,
            statusText: t.statusText
          });
        })
      : Promise.resolve(t);
  },
  createCacheKey = function(e, t, n, a) {
    var r = new URL(e);
    return (
      (a && r.pathname.match(a)) ||
        (r.search +=
          (r.search ? "&" : "") +
          encodeURIComponent(t) +
          "=" +
          encodeURIComponent(n)),
      r.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var n = new URL(t).pathname;
    return e.some(function(e) {
      return n.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, n) {
    var t = new URL(e);
    return (
      (t.hash = ""),
      (t.search = t.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(t) {
          return n.every(function(e) {
            return !e.test(t[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      t.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        n = e[1],
        a = new URL(t, self.location),
        r = createCacheKey(a, hashParamName, n, /\.\w{8}\./);
      return [a.toString(), r];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(a) {
        return setOfCachedUrls(a).then(function(n) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(t) {
              if (!n.has(t)) {
                var e = new Request(t, { credentials: "same-origin" });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        t +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return a.put(t, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var n = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(t) {
          return t.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!n.has(e.url)) return t.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(t) {
    if ("GET" === t.request.method) {
      var e,
        n = stripIgnoredUrlParameters(
          t.request.url,
          ignoreUrlParametersMatching
        ),
        a = "index.html";
      (e = urlsToCacheKeys.has(n)) ||
        ((n = addDirectoryIndex(n, a)), (e = urlsToCacheKeys.has(n)));
      var r = "/index.html";
      !e &&
        "navigate" === t.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], t.request.url) &&
        ((n = new URL(r, self.location).toString()),
        (e = urlsToCacheKeys.has(n))),
        e &&
          t.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    t.request.url,
                    e
                  ),
                  fetch(t.request)
                );
              })
          );
    }
  });
