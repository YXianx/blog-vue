<template lang="">
    <div class="articles">
        <articles-banner :articleDetail="getArticlesDetail"/>
        <articles-container :articleDetail="getArticlesDetail" 
                            :articleComment="getArticlesComment" 
                            class='container'
        />
    </div>
</template>
<script>
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

import ArticlesBanner from './children/ArticlesBanner.vue';
import ArticlesContainer from './children/ArticlesContainer.vue';
 
import { useGetters } from '@/hook';
export default { 
    components:{
        ArticlesBanner,
        ArticlesContainer
    }, 

    setup(){
        // 1、请求文章详情数据分发给container，container再二次分发给子组件
        const route = useRoute()
        const id = route.params.id

        const store = useStore()
        store.dispatch('articlesModule/setupArticleDetail',id)
        store.dispatch('articlesModule/setupArticleComment',id)

        return {
            ...useGetters("articlesModule",["getArticlesDetail","getArticlesComment"])
        }
    }
}
</script>
<style lang="less" scoped>
    .articles{
        width: 100%;
        height: auto;

        .container{
            animation: containerAni 700ms ease-out;
        }
    }

    .banner{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
        }
    }
</style>