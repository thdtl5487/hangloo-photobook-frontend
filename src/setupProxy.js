const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/photobookServer/",
        createProxyMiddleware({
            target: "http://10.90.200.86:9091",
            changeOrigin: true,
        }),
    );

    app.use(
        "/photobook/api/",
        createProxyMiddleware({
            target: "http://huscale.asuscomm.com",
            changeOrigin: true,
        }),
        );
    };
