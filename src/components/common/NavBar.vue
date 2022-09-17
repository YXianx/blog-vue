<template lang="">
    <transition name="nav">    
        <div class="nav-bar" v-if="isShow" 
                             ref="navRef"
                             :style="{background:inTop?'transparent':getThemeConfig('navBg')}">
            <div class="left-name">
                <slot name="left" :isShow="isShow" :inTop="inTop"></slot>
            </div>
            <div class="right-menu">
                <slot name="right" :isShow="isShow" :inTop="inTop"></slot>
            </div>

            <!-- 移动端右侧菜单 -->
            <div class="right-menu-md">
                <i class="iconfont" :style="{color:inTop?'#fff':getThemeConfig('navColor')}" @click="spotLightClick">&#xe613;</i>
                <i class="iconfont" 
                   :style="{color:inTop?'#fff':getThemeConfig('navColor')}"
                   @click="menuClick">
                   &#xe64d;
                </i>
            </div>
            <van-popup v-model:show="isShowPopup" position="right" :style="{width:'250px',height: '100vh' }">
                <div class="blog-menu">
                    <div class="blogger-info">
                        <img :src="IMG_URL + 'user_head.webp'" alt="">
                    </div>
                    <div class="blog-info-wrapper">
                        <div class="blog-info-data">
                            <router-link to="/home">
                                <div>文章</div>
                                <div>3</div>
                            </router-link>
                        </div>
                        <div class="blog-info-data">
                            <router-link to="/home">
                                <div>分类</div>
                                <div>5</div>
                            </router-link>
                        </div>
                        <div class="blog-info-data">
                            <router-link to="/home">
                                <div>标签</div>
                                <div>7</div>
                            </router-link>
                        </div>
                    </div>
                    <hr/>

                    <transition name="menu">
                        <div class="menu-container-md" v-if="isShowPopup">                            
                            <wrapper-menu-item v-for="(item,index) in wrapperMenuList" 
                                               :title="item.title" 
                                               :to="item.to" 
                                               :iconfont="item.iconfont"
                                               @wrapperItemClick="handleWrapperItemClick"
                            />
                        </div>
                    </transition>
                </div>
            </van-popup>
        </div>
    </transition>
</template>
<script>
// TODO:移动端导航菜单逻辑优化，当点击路由选项后，导航菜单隐藏
import {ref} from 'vue'

import WrapperMenuItem from '@component/content/NavBar/WrapperMenuItem.vue'

import {useNavBarScroll} from '../../hook/index'
import {useGetters} from '../../hook/common/useGetters'
import emitter from '../../eventbus/index.js'

import {IMG_URL} from '@const/index.js'

export default {
    props:{
        wrapperMenuList:{
            type:Array,
            default(){return []}
        }
    },
    components:{
        WrapperMenuItem
    },
    setup(){
        // 1、获取导航栏位置状态
        const {isShow,inTop} = useNavBarScroll()
        
        // 2、移动端导航菜单是否显示
        const isShowPopup = ref(false)
        const menuClick = ()=>{
            isShowPopup.value = true
        }

        // 3、获取当前主题配置
        const {getThemeConfig} = useGetters("themeModule",["getThemeConfig"])

        // 4、聚焦搜索按钮点击
        const spotLightClick  = ()=>{
            emitter.emit("spotLightClick")
        }

        // 5、移动端侧边栏导航点击事件
        const handleWrapperItemClick = ()=>{
            // 点击导航跳转时隐藏侧边栏
            isShowPopup.value = false
        }
        return{
            IMG_URL,

            isShow,
            inTop,

            isShowPopup,
            menuClick,

            getThemeConfig,

            spotLightClick,

            handleWrapperItemClick
        }
    }
}
</script>
<style lang="less" scoped>
    .nav-bar{
        width:100%;
        height:60px;
        padding: 10px 36px;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: .3s background ease;

        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;

        /* 移动端右侧菜单 */
        .right-menu-md{
            display: none;
            i{
                font-size: 20px;
                margin-left: 15px;
            }
        }
    }

    .blog-menu{
        width: 100%;
        height: 100%;
        background-color: #f6f8fa;
    
        .blogger-info{
            padding: 26px 30px 0;
            img{
                display: block;
                margin: 0 auto;
                width: 110px;
                height: 110px;
                border-radius: 50%;
                /* transform: scale(1.2); */
            }
            hr{
                border: 2px dashed #d2ebfd;
                margin: 20px 0;
            }
        }

        .blog-info-wrapper{
            display: flex;
            justify-content: space-around;
            padding: 12px 10px 0;
            .blog-info-data{
                text-align: center;
                line-height: 2;
                font-size: 0.875rem;
                div{
                    color:@mainColor;
                }
            }
        }    

        .menu-container-md{
            padding: 0px 10px 40px;
        }
    }




    .nav-enter-from,
    .nav-leave-to{
        transform: translateY(-60px);
    }
    .nav-enter-to,
    .nav-leave-from{
        transform: translateY(0px);
    }
    .nav-enter-active,
    .nav-leave-active{
        transition: transform .5s;
    }

    .menu-enter-from,
    .menu-leave-to{
        transform: translateY(50px);
    }
    .menu-enter-to,
    .menu-leave-from{
        transform: translateY(0px);
    }
    .menu-enter-active,
    .menu-leave-active{
        transition: transform 1s ease;
    }


    @media (max-width:759px) {
        .nav-bar{
            width: 100%;
            padding: 10px 16px;
        }
        .nav-bar .right-menu{
            display: none;
        }
        .nav-bar .right-menu-md{
            display: flex;
        }
    }
</style>