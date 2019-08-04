module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/wxapi': {
                target: 'http://h5.measure.cloudream.com',
                changeOrigin: true
            },
        }

    }
}