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
// TODO:(已解决BUG)评论发布 就当文章没有评论发布第一条评论时，响应式正常，第二条开始发布就会重复上一条的内容，虽然能获取到数量变化for出来，但是内容却是有问题的
import {ref} from 'vue'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'

import ArticlesContent from './ArticlesContent.vue'
import ArticlesCatalog from './ArticlesCatalog.vue'
import ArticlesCopyright from './ArticlesCopyright.vue'
import ArticlesOperation from './ArticlesOperation.vue'
import ArticlesReward from './ArticlesReward.vue'
import ArticlesPagination from './ArticlesPagination.vue'
import ArticlesRecommend from './ArticlesRecommend.vue'
import ArticlesComment from './ArticlesComment.vue'

import TalkComment from '@component/common/TalkComment.vue'
import Comment from '@component/common/Comment.vue'

import { useGetters } from '@/hook/common/useGetters'
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
                // 更新评论列表
                store.dispatch("articlesModule/setupArticleComment",props.articleDetail.id)
                .then(res=>{
                    // 更新评论数
                    store.dispatch('articlesModule/setupArticleDetail',props.articleDetail.id)
                    ElMessage({
                        message: '发布评论成功！',
                        type: 'success',
                    })
                })
            })
            .catch(err=>{
                ElMessage.error('评论出错...')
            })
        }

        return {
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