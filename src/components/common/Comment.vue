<template lang="">
    <div class="comment" 
        ref="commentRef">
        <img class="head" :src="IMG_URL + 'user_head.webp'" alt="">
        <div class="comment-meta">
            <div class="user">{{commentData.nickname}}</div>
            <div class="info">
                <span v-if="!isChildren">{{floor}}楼</span>
                <span>{{commentData.createTime}}</span> 
                <span><i class="iconfont" @click="likeClick" :style="isLike?'color:var(--color-high-text)':''" >&#xe651;</i> {{likeCount}}</span> 
                <span class="reply" @click="replyClick(commentData.parentId!=0?commentData.parentId:commentData.id)">回复</span>
            </div>
            <div class="comment-content">
                <p>{{commentData.commentContent}}</p>
            </div>

            <reply-comment v-if="isShowReply" 
                          :placeholder="'回复 @'+commentData.nickname+':'"
                          @inputWrapperCancel="handleCancelEvent"
                          @inputWrapperSave="handleSaveEvent" 
            />
            
            <div class="comment-children" v-if="commentData.childrens">
                <comment v-for="item in commentData.childrens" :commentData="item" :isChildren="true"/>
            </div>
        </div>
    </div>
</template>
<script>
// TODO:继续优化评论模块
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'

import ReplyComment from './ReplyComment.vue'
import Comment from './Comment.vue'

import {postSaveComment,postLikeComment} from '@network/comment'

import {IMG_URL} from '@const/index.js'
export default {
    props:{
        commentData:{
            type:Object,
            default(){
                return {}
            }
        },

        floor:{
            type: Number,
            default(){return 0}
        },

        // 是否有子级评论
        isChildren:{
            type:Boolean,
            default(){return false}
        },
    },
    components:{
        ReplyComment,
        Comment
    },

    setup(props){
        // 从路由取文章id
        const route = useRoute()
        const articleId = ref(route.params.id)

        const parentId = ref(0)
        const isShowReply = ref(false)
        const replyClick = (commentId)=>{
            isShowReply.value = true
            parentId.value = commentId
        }

        // 评论表情转标签 
        // BUG问题: 使用commentContent作为评论显示内容会导致content内容不是最新的内容而是上一条评论的内容，需要刷新或者强制v-if刷新dom才会显示新评论内容
        // const commentContent = props.commentData.commentContent
        

        // 点赞数
        const commentId = props.commentData.id
        const likeCount = ref(props.commentData.likeCount)
        const isLike = ref(false)
        
        // 回复框取消 or 回复
        const store = useStore()
        const handleCancelEvent = ()=>{
            isShowReply.value = false
        }
        const handleSaveEvent = (commentContent)=>{
            const commentInfo = {
                articleId: articleId.value,
                commentContent: '回复 @'+ props.commentData.nickname+ ' ' + commentContent,
                parentId: parentId.value,
                replyUserId: 1,
                userId: 1
            }
            postSaveComment(commentInfo)
            .then(res=>{
                // 回复成功后关闭恢复框
                handleCancelEvent()
                // 更新评论列表
                store.dispatch("articlesModule/setupArticleComment",articleId.value)
                .then(res=>{
                    // 更新评论数
                    store.dispatch('articlesModule/setupArticleDetail',articleId.value)
                    ElMessage({
                        message: '回复成功！',
                        type: 'success',
                    })
                })
            })
            .catch(err=>{
                ElMessage.error('回复出错...')
            })
        }

        // 点赞
        const likeClick = ()=>{
            if(!isLike.value){
                postLikeComment(commentId)
                .then(res=>{
                    likeCount.value += 1
                    ElMessage({
                        message: '点赞成功！',
                        type: 'success',
                    })
                })
                .catch(err=>{
                    ElMessage.error('点赞出错...')
                })

                isLike.value = true
            }
            else{
                isLike.value = false
            }
        }

        return{
            IMG_URL,
            
            isShowReply,
            replyClick,
            
            handleCancelEvent,
            handleSaveEvent,

            likeCount,
            likeClick,
            isLike,

            // commentContent
        }
    }
}
</script>
<style lang="less">
    .comment{
        position: relative;
        display: flex;
        padding-top: 20px;
        overflow: hidden;
        animation: commentShow .5s ease;
        .head{
            width:40px;
            height:40px;
            border-radius: 6px;
        }
        .comment-meta{
            width: 100%;
            margin-left: 0.8rem;
            border-bottom: 1px dashed #f5f5f5;
            .user{
                line-height: 1.75;
                font-size: 14px;
            }
            .info{
                position: relative;
                line-height: 1.75;
                font-size: 12px;
                color: #b3b3b3;
                span{
                    margin-right: 10px;
                    i{
                        transition: color 300ms;
                        cursor: pointer;
                        &:hover{
                            color:var(--color-high-text);
                        }
                    }
                }
                .reply{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-right: 0px;
                    color: #EC6A5F;
                    cursor: pointer;
                    transform: translate(-50%,-50%);
                }
            }
            .comment-content{
                padding-top: 0.625rem;
                margin-bottom: 16px;
                font-size: 14px;
            }
        }
        .comment-reply{

        }
    }

    @keyframes commentShow {
        from{
            opacity: 0;
            transform: translateY(50px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>