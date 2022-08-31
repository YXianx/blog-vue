const { defineConfig } = require('@vue/cli-service')
const { dir } = require('console')
const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  transpileDependencies: true,

  // 配置插件，这样可以在任何地方使用我们预先定义的less变量
  pluginOptions:{
    "style-resources-loader":{
      preProcessor: "less",
      patterns:[
        path.resolve(__dirname,"./src/assets/css/theme/style.less")
      ]
    }
  },
  // 配置webpack
  configureWebpack:{
    resolve:{
      alias:{
        "@img":resolve('src/assets/img'),
        "@component":resolve('src/components')
      }
    }
  }
})
