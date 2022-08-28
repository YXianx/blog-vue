<template lang="">
    <transition name="nav">    
        <div class="nav-bar" v-if="isShow" 
                             ref="navRef"
                             :style="{background:inTop?'transparent':getThemeConfig('navBg')}">
            <div class="left-name">
                <router-link to="/home" custom v-slot="props">
                    <a class="name" @click="props.navigate"  :style="{color:inTop?'#fff':getThemeConfig('navColor')}">YXianx</a>
                </router-link>
            </div>
            <div class="right-menu">
                <router-link class="menu-item" to="/search" v-slot="props">
                    <a @click="props.navigate" :style="{color:inTop?'#fff':getThemeConfig('navColor')}">
                        <i class="iconfont" :style="{color:inTop?'#fff':getThemeConfig('navColor')}">&#xe752;</i>
                        搜索
                    </a>
                </router-link>

                <router-link class="menu-item" to="/home" v-slot="props">
                    <a @click="props.navigate"  :style="{color:inTop?'#fff':getThemeConfig('navColor')}">
                        <i class="iconfont"  :style="{color:inTop?'#fff':getThemeConfig('navColor')}">&#xe608;</i>
                        首页
                    </a>
                </router-link>

                <router-link class="menu-item" to="/search" v-slot="props">
                    <a @click="props.navigate"  :style="{color:inTop?'#fff':getThemeConfig('navColor')}">
                        <i class="iconfont"  :style="{color:inTop?'#fff':getThemeConfig('navColor')}">&#xe649;</i>
                        关于
                    </a>
                </router-link>
                
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
            <div class="right-menu-md">
                <i class="iconfont" :style="{color:inTop?'#fff':getThemeConfig('navColor')}">&#xe613;</i>
                <i class="iconfont" 
                   :style="{color:inTop?'#fff':getThemeConfig('navColor')}"
                   @click="menuClick">
                   &#xe64d;
                </i>
            </div>
            
            <!-- 移动端右侧菜单 -->
            <van-popup v-model:show="isShowPopup" position="right" :style="{width:'250px',height: '100vh' }">
                <div class="blog-menu">
                    <div class="blogger-info">
                        <img src="../../assets/img/user/head.png" alt="">
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
                            <div class="menu-item-md">
                                <router-link to="/home">
                                    <i class="iconfont">&#xe608;</i>
                                    首页
                                </router-link>
                            </div>
                            <div class="menu-item-md">
                                <router-link to="/home">
                                    <i class="iconfont">&#xe649;</i>
                                    关于
                                </router-link>
                            </div>
                        </div>
                    </transition>
                </div>
            </van-popup>
        </div>
    </transition>
</template>
<script>
import {ref} from 'vue'
import { useStore } from 'vuex'

import {useNavBarScroll} from '../../hook/index'
import {useGetters} from '../../hook/common/useGetters'
import {setTheme} from '../../assets/css/theme/theme'
export default {
    setup(){
        // 1、获取导航栏位置状态
        const {isShow,inTop} = useNavBarScroll()
        
        // 2、移动端导航菜单是否显示
        const isShowPopup = ref(false)
        const menuClick = ()=>{
            isShowPopup.value = true
        }

        // 3、主题切换
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

        

        return{
            
            isShow,
            inTop,

            isShowPopup,
            menuClick,

            
            getThemeConfig,
            switchState,
            themeStyleChange
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

        .left-name .name{
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
        }

        .right-menu{
            display: flex;
            // justify-content: center;
            align-items: center;
            .menu-item{
                position: relative;
                margin-left: 20px;
                font-size: 14px;

                &::after{
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    content: "";
                    width: 50px;
                    height: 3px;
                    background-color: rgb(128, 200, 248);
                    border-radius: 4px;
                    transform-origin: 0 50%;
                    transform: scaleY(0);
                    transition: all .3s ease-in-out;
                }
                &:hover::after{
                    transform: scaleY(1);
                }
            }
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
            .menu-item-md a{
                display: block;
                padding: 6px 30px;
                line-height: 2;
                color: #4c4948;
                i{
                    margin-right: 3rem;
                }
            }
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