export const themeModule = {
    namespaced:true,
    
    state:{
        themeConfig:{}
    },
    getters:{
        getThemeConfig(state){
            return (config)=>{
                return state.themeConfig[config]
            }
        }
    },
    mutations:{
        setThemeConfig(state,payload){
            state.themeConfig = payload
        }
    },
    actions:{
        // 保存本地主题缓存
        localStorageAction(context,payload){
            const storageTheme = JSON.parse(localStorage.getItem("themeConfig"))
            context.commit("setThemeConfig",storageTheme)
        }
    },
    modules:{}
}