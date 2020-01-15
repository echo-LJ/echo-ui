const path = require('path');
module.exports = {
  // devServer: {
  //     proxy: {
  //         '/posts': {    // search为转发路径
  //             target: 'http://localhost:8082/static/posts',  // 目标地址
  //             ws: true, // 是否代理websockets
  //             changeOrigin: true   // 设置同源  默认false，是否需要改变原始主机头为目标URL,               
  //         }
  //     }
  // },
  configureWebpack: config => {
    config.module.rules.push({
      // 处理markdown文件
      test: /\.md$/,
      use: [
        {
          loader: "vue-loader"
        },
        {
          loader: require.resolve("./examples/markdownLoader")
        }
      ],
    },
    );
  },
  publicPath: './',
  // process.env.NODE_ENV === 'production'
  //   ? '/echo-ui/dist/'
  //   : ,
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'));

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
}