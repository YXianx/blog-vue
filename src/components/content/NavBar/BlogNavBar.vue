<template lang="">
        <nav-bar>
            <template #left="slotProps">
                <div class="left-menu">
                    <router-link to="/home" custom v-slot="props">
                        <a class="name" @click="props.navigate"  :style="{color:slotProps.inTop?'#fff':getThemeConfig('navColor')}">YXianx</a>
                    </router-link>
                </div>
            </template>
            
            <template #right="slotProps">
                <div class="right-menu">
                    <menu-item :isRouter="false" @click="spotLightClick" :inTop="slotProps.inTop" title="搜索" :iconfont="'\ue752'" />
                    <menu-item to="/home" :inTop="slotProps.inTop" title="首页" :iconfont="'\ue608'"/>
                    <menu-item to="/home" :inTop="slotProps.inTop" 
                                          title="发现" 
                                          :iconfont="'\ue6c6'" 
                                          :isSubMenu="true"
                                          :subMenu="[
                                                {to:'/archives',title:'归档',iconfont:'\ue660'},
                                                {to:'/categories',title:'分类',iconfont:'\ue6aa'},
                                                {to:'/tag',title:'标签',iconfont:'\ue615'}
                                          ]"/>
                    <menu-item to="/search" :inTop="slotProps.inTop" 
                                            title="娱乐" 
                                            :iconfont="'\ue63a'" 
                                            :isSubMenu="true"
                                            :subMenu="[
                                                {to:'/albums',title:'照片',iconfont:'\ue7bf'},
                                                {to:'/talks',title:'说说',iconfont:'\ue61e'},
                                            ]"/>
                    <menu-item to="/links" :inTop="slotProps.inTop" title="友链" :iconfont="'\ue614'"/>
                    <menu-item to="/about" :inTop="slotProps.inTop" title="关于" :iconfont="'\ue649'"/>
                    
                    <div class="theme-switch">
                        <el-switch
                        v-model="switchState"
                        class="mt-2"
                        style="margin-left: 24px"
                        inline-prompt
                        :active-color="'#2c2c2c'"
                        :inactive-color="'#f2f2f2'"
                        :border-color="'#4C4D4F'"
                        @change="themeStyleChange"
                        />
                    </div>
                </div>
            </template>
        </nav-bar>
</template>
<script>
import {ref,emit} from 'vue'
import {useStore} from 'vuex'
import {useGetters} from'@hook/common/useGetters'

import NavBar from '../../common/NavBar.vue'
import MenuItem from './MenuItem.vue'

import {setTheme} from '../../../assets/css/theme/theme'
import emitter from '../../../eventbus/index.js'
export default {
    emit:["spotLightClick"],
    components:{
        NavBar,
        MenuItem
    },

    setup(props,{emit}){
        // 1、主题切换
        const store = useStore()    // useStore()钩子写在created生命周期时，才能拿到值，写在点击事件里是undefined
        const {getThemeConfig} = useGetters("themeModule",["getThemeConfig"])
        const switchState = ref(false)
        switchState.value = localStorage.getItem("theme") === "dark" // 根据缓存的主题样式判断开关状态

        const themeStyleChange = ()=>{
            if(switchState.value){
                setTheme("dark")
            }
            else{
                setTheme("default")
            }

            store.dispatch("themeModule/localStorageAction")
        }

        // 2、聚焦搜索
        const spotLightClick = ()=>{
            emitter.emit("spotLightClick")
        }
        return {
            getThemeConfig,

            switchState,
            themeStyleChange,

            spotLightClick
        }
    }
}
</script>
<style lang="less" scoped>
        .name{
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
        }

        .right-menu{
            display: flex;
            align-items: center;
            .theme-switch{
                display: flex;
                justify-content: center;
                color: @navColor;
                align-items: center;
                margin-left: 30px;
                i{
                    font-size: 15px;
                }
            }
        }
</style>