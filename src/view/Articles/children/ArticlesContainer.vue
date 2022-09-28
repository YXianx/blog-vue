<template lang="">
    <div class="articles-container">
        <el-row :gutter="15">
            <el-col :md="18" :xs="24">
                <div class="article-wrapper v-card" :style="{background:getThemeConfig('mainCardBg')}">
                    <articles-content :articleContent="articleDetail.articleContent"/>
                    <articles-copyright/>
                    <articles-operation/>
                    <articles-reward :likeCount="articleDetail.likeCount"/>
                    <articles-pagination :nextArticleId="articleDetail.nextArticleId" :lastArticleId="articleDetail.lastArticleId"/>
                    <articles-recommend :recommendArticles="articleDetail.recommendArticles"/>
                    <hr/>
                    <articles-comment :isCommentView="false"/>
                    <talk-comment @commentSave="handleCommentSave"/>
                    <articles-comment :isCommentView="true" 
                                      :commentCount="articleDetail.commentCount"
                                      :commentList="articleComment"
                    />
                </div>
            </el-col>
            <el-col :md=6 :xs="24">
                <div class="right-container">
                    <articles-catalog mode='topic' title="目录"></articles-catalog>

                    <articles-catalog class="articles-mode" mode='articles' title="最新文章" :newArticles="articleDetail.newArticles">
                        <i class="iconfont" style="font-size:20px;color:#e53935">&#xe638;</i>
                    </articles-catalog>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'

import ArticlesContent from './ArticlesContent.vue'
import ArticlesCatalog from './ArticlesCatalog.vue'
import ArticlesCopyright from './ArticlesCopyright.vue';
import ArticlesOperation from './ArticlesOperation.vue'
import ArticlesReward from './ArticlesReward.vue'
import ArticlesPagination from './ArticlesPagination.vue'
import ArticlesRecommend from './ArticlesRecommend.vue'
import ArticlesComment from './ArticlesComment.vue'

import TalkComment from '@component/common/TalkComment.vue'
import Comment from '@component/common/Comment.vue'

import { useGetters } from '@/hook/common/useGetters';
import {postSaveComment} from '@network/comment'
export default {    
    props:{
        articleDetail:{
            type:Object,
            default(){return {}}
        },
        articleComment:{
            type:Array,
            default(){return []}
        }
    },
    components:{
        ArticlesContent,
        ArticlesCatalog,
        ArticlesCopyright,
        ArticlesOperation,
        ArticlesReward,
        ArticlesPagination,
        ArticlesRecommend,
        ArticlesComment, 

        TalkComment,
        Comment
    },

    setup(props){
        const store = useStore()
        const handleCommentSave = (commentContent)=>{
            const commentInfo = {
                articleId: props.articleDetail.id,
                commentContent: commentContent,
                parentId: 0,
                replyUserId: 1,
                userId: 1
            }
            
            postSaveComment(commentInfo)
            .then(res=>{
                store.dispatch("articlesModule/setupArticleComment",props.articleDetail.id)
                ElMessage({
                    message: '发布评论成功！',
                    type: 'success',
                })
            })
            .catch(err=>{
                ElMessage.error('评论出错...')
            })
        }
        return {
            // ...useGetters("articlesModule",["getArticlesComment"]),
            ...useGetters("themeModule",["getThemeConfig"]),
            handleCommentSave
        }
    }
}
</script>
<style lang="less">
    .articles-container{
        padding: 0 10px;
        margin: 28px auto 0px auto;

        .article-wrapper{
            padding: 8px 25px 15px 25px;
            margin-bottom: 28px;    
        }
        .right-container{
            position: sticky;
            top: 20px;
        }

        .articles-mode{
            margin-top: 20px;
        }
    }


    @media (min-width:1200px){
        .articles-container{
            width: 1200px;
        }
    }
</style>