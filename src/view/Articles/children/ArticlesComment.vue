<template lang="">
    <div class="articles-comment">
        <div class="comment-title">
            <div v-if="!isCommentView">
                <i class="iconfont">&#xe609;</i>
                评论
            </div>
            <div v-else>
                <i class="iconfont">&#xe609;</i>
                评论 {{commentCount}}
            </div>
        </div>    
        <div v-if="isCommentView && commentList.length>0" class="comment-view">
            <comment v-for="(item,index) in commentList"
                     :commentData="item" 
                     :floor="commentList.length-index"
            /> 
        </div>
    </div>
</template>
<script>
import Comment from '@component/common/Comment.vue'

export default {
    components:{
        Comment
    },
    props:{
        isCommentView:{
            required:true,
            type:Boolean,
            default(){return false}
        },
        commentCount:{
            type:Number,
            default(){return 0}
        },
        commentList:{
            type:Array,
            default(){return []}
        }
    },
    setup(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    .articles-comment{
        margin-bottom: 10px;
        .comment-title{
            font-size: 20px;
            i{
                display: inline-block;
                font-weight:700;
                font-size: 25px;
                color: var(--color-high-text);
                animation: iconflow 1s infinite ease;
            }
        }
    }
</style>