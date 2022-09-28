<template lang="">
    <div class="articles-list">
        <banner :bannerUrl="IMG_URL + 'categories_banner.webp'"
                height="400px"
                :isScrollDown="false"
                :backgroundScroll="false">
            <template #title>
                <h1>{{title}}</h1>
            </template>
        </banner>

        <div class="container">
            <el-row>
                <article-item v-for="item in articleList" :articleData="item"/>
            </el-row>
        </div>
    </div>
</template>
<script>
// TODO:在list页面判断是分类页面还是标签页面过来的，然后发送对应的请求显示
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Banner from '@component/content/Banner.vue'
import ArticleItem from '@component/content/ArticleItem.vue'

import {getTagArticles} from '@network/tags.js'
import {getCategoryArticles} from '@network/categories.js'

import {IMG_URL} from '@const/index'
export default {
    props:{
        articlesList:{
            type: Array,
            default(){return []}
        }
    },
    components:{
        Banner,
        ArticleItem
    },

    setup(){
        const route = useRoute()
        const title = ref("")
        const articleList = ref([])
        if(route.path.indexOf('/tag') === 0){
            getTagArticles(route.params.id)
            .then(res=>{
                articleList.value = res.data.data.articlePreViewList
                title.value = `标签 - ${res.data.data.name}`
            })
        }
        else if(route.path.indexOf('/categories') === 0){
            getCategoryArticles(route.params.id)
            .then(res=>{
                articleList.value = res.data.data.articlePreViewList
                title.value = `分类 - ${res.data.data.name}`
            })
        }

        return {
            IMG_URL,
            title,
            articleList
        }
    }
}
</script>
<style lang="less">
    .container{
        animation: containerAni 700ms ease-out;
    }
    @media (min-width:759px){
        .container{
            width: 1200px;
            margin: 40px auto 0 auto;
        }
    }
</style>