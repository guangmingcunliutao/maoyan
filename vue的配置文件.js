// vue的配置文件，文件名为vue.config.js
// 可以在这里设置正向代理
// 如果不想另起一个文件来进行配置，也可以将配置写在package.json文件的vue字段当中，这两者没有区别
module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}