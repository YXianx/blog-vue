<template lang="">
    <div class="articles">
        <articles-banner :articleDetail="articleDetail"/>
        <articles-container class='container'/>
    </div>
</template>
<script>
import {ref,provide,computed} from 'vue'
import {useRoute} from 'vue-router'
import ArticlesBanner from './children/ArticlesBanner.vue';
import ArticlesContainer from './children/ArticlesContainer.vue';

import {getArticlesDetail,getArticlesComment} from '@network/articles.js'
import emitter from '../../eventbus/index.js'
export default {
    components:{
        ArticlesBanner,
        ArticlesContainer
    }, 

    setup(){
        // 1、请求文章详情
        const route = useRoute()
        const id = route.params.id
        const articleDetail = ref({})
        getArticlesDetail(id)
        .then(res=>{
            articleDetail.value = res.data.data
            // 1-2、传递最新文章列表给最新列表组件
            emitter.emit("newArticles",articleDetail.value.newArticles)
            // 1-3、传递文章页码信息给页码导航组件
            const paginationInfo = {
                prePage: articleDetail.value.nextArticleId,
                nextPage: articleDetail.value.lastArticleId
            }
            emitter.emit("paginationInfo",paginationInfo)
            // 1-4、传递文章标签信息给标签组件
            emitter.emit("articleTags",articleDetail.value.tags)
            // 1-5、传递点赞数
            emitter.emit("likeInfo",articleDetail.value.likeCount)
            // 1-6、传递相关推荐
            emitter.emit("recommendInfo",articleDetail.value.recommendArticles)
            // 1-7 传递评论数
            emitter.emit("commentCount",articleDetail.value.commentCount)
        })

        // 2、传递文章内容给内容显示组件
        // 因为数据异步问题，子组件是拿不到值，将provide改成computed方式即可变为响应式
        // get set为了解决浏览器报警告说该值为只读的情况
        provide("content",computed({
            get(){
                return articleDetail.value.articleContent      
            },
            set(){}
        }))
    
        // 3、请求文章评论列表
        getArticlesComment(id)
        .then(res=>{
            emitter.emit("articlesComment",res.data.data)
        })

        return {
            articleDetail
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