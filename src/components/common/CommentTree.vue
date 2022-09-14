<template lang="">
    <div class="comment-tree" v-for="(item,index) in commentDataTree">
        <img class="head" :src="item.imgUrl" alt="">
        <div class="comment-meta">
            <div class="user">{{item.user}}</div>
            <div class="info">
                <span v-if="item.info.order!=0">{{item.info.order}}楼</span>
                <span>{{item.info.date}}</span>
                <span><i class="iconfont">&#xe651;</i> {{item.info.like}}</span> 
                <span class="reply" @click="replyClick(index)">回复</span>
            </div>
            <div class="comment-content">
                <p>{{item.content}}</p>
            </div>

            <comment-input-wrapper v-if="isShowReply && index === currentIndex" 
                                   mode="reply" 
                                   :placeholder="'回复 @'+item.user+':'"
                                   @inputWrapperCancel="cancelEvent"/>
            
            <div class="comment-children" v-if="item.children">
                <comment-tree :commentDataTree="item.children"/>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'

import CommentInputWrapper from './CommentInputWrapper.vue'
import CommentTree from './CommentTree.vue'

import {IMG_URL} from '@const/index.js'
export default {
    props:{
        commentDataTree:{
            type:Array,
            default(){
                return [
                    {
                        imgUrl:IMG_URL + 'user_head.webp',
                        user:"内部测试用户",
                        info:{
                            order:1,
                            date:"2022-08-03",
                            like:24
                        },
                        content: "这是一条测试评论",
                        children:[
                            {
                                imgUrl:IMG_URL + 'tag_bg_2.webp',   
                                user:"测试用户",
                                info:{
                                    order:0,
                                    date:"2022-08-31",
                                    like:12
                                },
                                content: "testtesttest",
                                children:[
                                    {
                                        imgUrl:IMG_URL + 'tag_bg_3.webp',   
                                        user:"测试用户2",
                                        info:{
                                            order:0,
                                            date:"2022-08-31",
                                            like:0
                                        },
                                        content: "lalala"
                                    }
                                ]
                            },
                            {
                                imgUrl:IMG_URL + 'tag_bg_2.webp',
                                user:"测试用户2",
                                info:{
                                    order:0,
                                    date:"2022-08-31",
                                    like:0
                                },
                                content: "lalala"
                            }
                        ]
                    },
                    {
                        imgUrl:IMG_URL + 'tag_bg_3.webp',
                        user:"测试用户3",
                        info:{
                            order:2,
                            date:"2022-07-2",
                            like:12
                        },
                        content: "hello world"
                    }
                ]
            }
        }
    },
    components:{
        CommentInputWrapper,
        CommentTree
    },

    setup(){
        const currentIndex = ref(-1) 
        const isShowReply = ref(false)
        const replyClick = (index)=>{
            currentIndex.value = index
            isShowReply.value = true
        }

        const cancelEvent = ()=>{
            isShowReply.value = false
        }

        return{
            currentIndex,
            isShowReply,
            replyClick,

            cancelEvent
        }
    }
}
</script>
<style lang="less">
    .comment-tree{
        position: relative;
        display: flex;
        padding-top: 20px;
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
</style>