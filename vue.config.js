const { defineConfig } = require('@vue/cli-service')
const path = require('path')
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
  }
})
