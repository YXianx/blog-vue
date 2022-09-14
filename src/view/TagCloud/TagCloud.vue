<template lang="">
    <div class="tag-cloud">
        <banner height="400px"
                :isScrollDown="false"
                :backgroundScroll="false"
                :bannerUrl="IMG_URL + 'home_banner.webp'">
            <template #title>
                <h1>标签</h1>
            </template>
        </banner>
        <div class="tag-container v-card">
            <div class="title">标签 - 14</div>
            <ul class="tag-list">
                <li class="tag-item" v-for="item in tags">
                    <router-link :to="item.path" :style="{fontSize:Math.floor(Math.random()*(26-18)+18)+'px'}">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {computed} from 'vue'
import {IMG_URL} from '@const/index.js'
export default {
    setup(){
        const tags = [
            {
                name:"Vue",
                path:"/home"
            },
            {
                name:"项目",
                path:"/home"
            },
            {
                name:"生活随笔",
                path:"/home"
            },
            {
                name:"Less",
                path:"/home"
            },
            {
                name:"TypeScript",
                path:"/home"
            },
            {
                name:"Vuex",
                path:"/home"
            },
            {
                name:"Vue-Router",
                path:"/home"
            },
            {
                name:"小程序",
                path:"/home"
            },
            {
                name:"uni-app",
                path:"/home"
            },
            {
                name:"TypeScript",
                path:"/home"
            },
            {
                name:"TypeScript",
                path:"/home"
            },
            {
                name:"TypeScript",
                path:"/home"
            }
        ]
        const randomFontSize = computed(()=>{
            return Math.floor(Math.random()*17);
        })

        return {
            tags,
            randomFontSize,

            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .tag-container{
        padding: 50px 40px;
        text-align: center;
        animation: containerAni 700ms ease-out;
        .title{
            font-size: 36px;
            line-height: 2;
        }
        .tag-list{
            .tag-item{
                display: inline-block;
                font-size: 20px;
                margin: 10px;
                padding: 0 8px;
                transition: all 300ms;
                a{
                    transition: all 300ms;
                }
                &:hover{
                    transform: scale(1.1);
                    a{
                        color:var(--color-high-text);
                    }
                }
            }
        }
    }
    @media (min-width:1200px){
        .tag-container{
            width: 1200px;
            margin: 40px auto 40px auto;
        }
    }
    @media (max-width:759px){
        .tag-container{
            margin: 20px 10px;
            padding: 25px 15px;
        }
    }
</style>