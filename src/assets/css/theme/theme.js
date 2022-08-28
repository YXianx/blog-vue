import { themes } from "./model";
import {useStore} from 'vuex'

// 修改页面中的样式变量
const changeStyle = (obj)=>{
    const bodyEL = document.getElementsByTagName("body")[0]
    for(let key in obj){
        bodyEL.style.setProperty(`--${key}`,obj[key])
    }
}

// 设置主题
export const setTheme = (themeName)=>{
    // 缓存主题，下次访问还是该主题显示
    window.localStorage.setItem("theme",themeName)
    // 获取主题对应样式
    const themeConfig = themes[themeName]

    if(themeConfig){
        // 更新主题变量值
        changeStyle(themeConfig)
        // 封装、缓存主题配置到本地，方便组件中获取
        const theme = {
            model:themeName,
        }
        for(let key in themeConfig){
            theme[key.toString()] = themeConfig[key]
        }
        // 缓存本地
        localStorage.setItem("themeConfig",JSON.stringify(theme))
    }
}