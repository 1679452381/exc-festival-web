module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://cypubmod.hntv.tv/mobile/cms/',   //
                pathRewrite: {
                    '^/api': ''
                },  // 重写路径  
                ws: true,          //  用于支持websocket
                changeOrigin: true //  用于控制请求头中的host值
            },
        },
    }
}