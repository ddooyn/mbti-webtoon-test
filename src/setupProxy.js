const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/getData', {
      target: 'https://mbtiwebtoontest.herokuapp.com',
      changeOrigin: true,
    }),
  );
};
