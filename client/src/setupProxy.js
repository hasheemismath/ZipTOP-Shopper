const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target:  'https://lit-reaches-31491.herokuapp.com/',
            changeOrigin: true,
        })
    );
}