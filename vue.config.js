module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'https://blog.dressweb.cn',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}