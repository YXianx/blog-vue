<template lang="">
    <transition name="spotLight">
        <div class="spot-light" v-if="isShow">
            <div class="search">
                <i class="iconfont">&#xe623;</i>
                <input type="text" placeholder="聚焦搜索" v-focus/>
            </div>
            <div class="search-list">
                <div class="search-item" v-for="item in 5">
                    <img class="mini-icon" :src="IMG_URL + 'blog_bg_1.webp'">
                    <div class="info">
                        <div class="name">测试文章1</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import {IMG_URL} from '@const/index.js'
export default {
    // 自定义指令：focus焦点
    directives:{
        focus:{
            mounted(el){
                el.focus()
            }
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default(){return true}
        }
    },

    setup(){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less" scoped>
    .spot-light{
        display: flex;
        flex-direction: column;
        width: 680px;
        background-color: rgba(230,231,234,0.6);
        backdrop-filter: blur(12px);
        border-radius: 8px;
        position: fixed;
        z-index: 999;
        top: 127px;
        left: 50%;
        transform:translate(-50%,-50%);
        box-shadow: @shadowColor;
        
        .search{
            width: 100%;
            height: 52px;
            display: flex;
            i{
                font-size: 1.5rem;
                padding: 10px 15px;
                color: #000;
            }
            input{
                width: 100%;
                height:100%;
                border-radius: 8px;
                background-color: transparent;
                outline: none;
                border:none;
                padding: 10px 0px;
                padding-right: 10px;
                color: #000;
                font-size: 1.5rem;
            }
        }
        .search-list{
            // background: inherit;
            border-top: 1px solid #a3a0a0;
            .search-item{
                display: flex;
                align-items: center;
                margin: 10px;
                padding: 5px;
                border-radius: 6px;
                // background-color: red;
                .mini-icon{
                    width: 18px;
                    height: 18px;
                    border-radius: 3px;
                }
                .info{
                    margin:0 10px;
                    font-size: 0.80rem;
                    color: #333;
                    font-weight: 700;
                }
                &:hover{
                    background-color:#4b86ed;
                    .info{
                        color: #fff;
                    }
                    // background-color:red;

                }
            }
        }
    }

    .spotLight-enter-from,
    .spotLight-leave-to{
        opacity: 0;
        // transform: translateY(30px);
    }
    .spotLight-enter-to,
    .spotLight-leave-from{
        opacity: 1;
        // transform: translateY(0px);
    }
    .spotLight-enter-active,
    .spotLight-leave-active{
        transition:all 200ms;
    }

    @media (max-width:759px){   
        .spot-light{
            width: 80%;
            height: 52px;
        }
    }
</style>