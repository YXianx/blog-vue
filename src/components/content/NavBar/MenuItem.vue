<template lang="">
    <router-link :to="to" v-slot="props" custom>
        <!-- 一级菜单 -->
        <div class="menu-item" 
             @click="props.navigate" 
             @mouseenter="menuMoveEnter"
             @mouseleave="menuMoveLeave"
             :style="{color:inTop?'#fff':getThemeConfig('navColor')}">
            <i class="iconfont" :style="{color:inTop?'#fff':getThemeConfig('navColor')}">{{iconfont}}</i>
            {{title}}
            <i v-if="isSubMenu" class="iconfont" :style="{color:inTop?'#fff':getThemeConfig('navColor')}">&#xe626;</i>
            <!-- 二级菜单 -->
            <transition name="submenu">
                <ul v-if="isSubMenu && isShowSubMenu" class="menus-submenu">
                    <li v-for="(item,index) in subMenu">
                        <router-link :to="item.to">
                            <i class="iconfont">{{item.iconfont}}</i>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </transition>
        </div>
    </router-link>
</template>
<script>
// TODO:对导航栏导航选项二级菜单进行封装
import {ref} from 'vue'
import { useGetters } from '@/hook/common/useGetters';

export default {
    props:{
        to:{
            type:String,
            default(){return '/home'}
        },
        inTop:{
            required:true,
            type:Boolean,
            default(){return false}
        },
        title:{
            type:String,
            default(){return "默认导航"}
        },
        // 动态设置unicode会出现不转义的现象
        // 解决方案：将编码方式从&#x改为\ue即可
        // &#x 和 \u 是16进制Unicode字符的不同写法。  例如&#xe752;->\ue752
        iconfont:{
            type:String,
            default(){return '\ue752'}
        },
        isSubMenu:{
            type:Boolean,
            default(){return false}
        },
        subMenu:{
            type:Array,
            default(){return []}
        }
    },
    components:{
        
    },

    setup(props){
        console.log(props.subMenu);
        const {getThemeConfig} = useGetters('themeModule',['getThemeConfig'])
        const isShowSubMenu = ref(false)

        const menuMoveEnter = ()=>{
            isShowSubMenu.value = true
        }
        const menuMoveLeave = ()=>{
            isShowSubMenu.value = false
        }

        return {
            getThemeConfig,
            isShowSubMenu,

            menuMoveEnter,
            menuMoveLeave
        }
    }
}
</script>
<style lang="less">
    .menu-item{
        position: relative;
        margin-left: 20px;
        font-size: 14px;
        cursor: pointer;

        &::after{
            position: absolute;
            left: 0;
            bottom: -5px;
            content: "";
            width:100%;
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

        .menus-submenu{
            display: block;
            position: absolute;
            left:50%;
            transform: translate(-50%,0);
            background-color: #fff;
            width: 80px;
            margin-top: 8px;
            border-radius: 4px;
            box-shadow: 0 5px 20px -4px rgb(0 0 0 / 50%);
            // before的作用是扩展hover事件的触发区域空间，解决了.menus-submenu margin-top所导致的鼠标焦点失去下拉框短暂消失再显示的问题
            &::before{
                content: '';
                position: absolute;
                top: -8px;
                left: 0;
                width: 100%;
                height: 20px;
            }
            li{
                width: 100%;
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 6px 10px;
                    color: #4c4948;
                    line-height: 2;
                    i{
                        margin-right: 4px;
                        color: #4c4948;
                    }
                }
                &:hover{
                    background:var(--color-high-text);
                    a{
                        color: #fff;
                    }
                    i{
                        color: #fff;
                    }
                }
                &:first-child{
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                &:last-child{
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
            }
        }
    }

    .submenu-enter-from,
    .submenu-leave-to{
        opacity: 0;
        transform: translateY(20px);
    }
    .submenu-enter-to,
    .submenu-leave-from{
        opacity: 1;
        transform: translateY(0px);
    }
    .submenu-enter-active,
    .submenu-leave-active{
        transition: all 400ms;
    }
</style>