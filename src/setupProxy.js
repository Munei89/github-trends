const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/https://gh-trending-api.herokuapp.com/",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader("host", "localhost:3002");
      },
    })
  );
};
