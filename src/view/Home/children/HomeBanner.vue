<template lang="">
    <div class="home-banner">
        <banner :bannerUrl="IMG_URL+'home_banner.webp'" 
                title="贤先生 · 个人博客"
                :resetInfoHeight="true"
                :toScrollY="homeContainerOffsetTop">
            <template #title>
                <h1>贤先生 · 个人博客</h1>
            </template>
            <template #other>        
                <!-- 当古诗请求完毕后再展示组件，否则会出现还没请求完毕，直接传递空值给子组件的情况，导致显示异常 -->
                <type-write-line :content="speechTalk" v-if="speechTalk.length>0"/>
            </template>
        </banner>
    </div>
</template>
<script>
import {ref} from 'vue'
import TypeWriteLine from '../../../components/common/TypeWriteLine.vue';

import emitter from '../../../eventbus/index'
import {IMG_URL} from '@const/index.js'

export default {
    components:{
        TypeWriteLine
    },

    setup(){
        // 1、请求古诗词
        const speechTalk = ref("")
        fetch("https://v1.hitokoto.cn/?c=i")
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            speechTalk.value = res.hitokoto
        })

        let homeContainerOffsetTop = ref(0)
        emitter.on("homeContainerTop",(offsetTop) => {
            homeContainerOffsetTop.value = offsetTop
        })
        return {
            IMG_URL,

            speechTalk,

            homeContainerOffsetTop
        }
    }
}
</script>
<style lang="css">

</style>