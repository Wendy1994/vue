module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 9099,
    https: false,
    hotOnly: true,
    proxy: null, // 设置代理
    before: app => {}
  }
}
