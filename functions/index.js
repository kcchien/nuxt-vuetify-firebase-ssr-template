const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");
const express = require("express");

const app = express();

const config = {
  /**
   * Development mode
   */
  dev: false,
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /**
     * Babel configuration
     */
    babel: {
      presets: [
        [
          "env",
          {
            targets: {
              node: "8.11.4"
            }
          }
        ],
        "stage-0"
      ],
      plugins: [
        [
          "transform-runtime",
          {
            polyfill: true,
            regenerator: true,
            moduleName: "babel-runtime"
          }
        ]
      ]
    }
  }
};

const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject);
    });
  });
}

app.use(handleRequest);

exports.nuxtssr = functions.https.onRequest(app);
