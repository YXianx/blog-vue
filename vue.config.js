const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  // 配置插件，这样可以在任何地方使用我们预先定义的less变量
  // 作用：主题切换
  pluginOptions:{
    "style-resources-loader":{
      preProcessor: "less",
      patterns:[
        path.resolve(__dirname,"./src/assets/css/theme/style.less")
      ]
    }
  },
  // 配置webpack configureWebpack会覆盖原本的webpack配置
  configureWebpack:{
    resolve:{
      alias:{
        "@img":resolve('src/assets/img'),
        "@component":resolve('src/components'),
        "@hook":resolve('src/hook'),
        "@const":resolve('src/constant'),
        "@network":resolve('src/network')
      }
    },
    devServer:{
      // 作用：刷新页面时，重新寻找当前路径所在的文件夹的资源文件，如果找不到就返回原本的index.html给浏览器
      // 解决了在不同路由刷新页面时404的问题
      historyApiFallback:true
    }
  }
})
