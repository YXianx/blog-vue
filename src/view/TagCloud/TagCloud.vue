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
            <div class="title">标签 - {{tags.length}}</div>
            <ul class="tag-list">
                <li class="tag-item" v-for="item in tags"> 
                    <router-link :to="'/tag/'+item.id" :style="{fontSize:Math.floor(Math.random()*(26-18)+18)+'px'}">{{item.tagName}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {ref,computed} from 'vue'
import {useRoute} from 'vue-router'

import {getTagsList,getTagArticles} from '@network/tags'
import {IMG_URL} from '@const/index.js'
export default {
    components:{
    
    },
    setup(){
        // tag标签字体随机大小
        const randomFontSize = computed(()=>{
            return Math.floor(Math.random()*17);
        })

        // 请求标签列表
        const tags = ref([])
        getTagsList()
        .then(res=>{
            tags.value = res.data.data
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