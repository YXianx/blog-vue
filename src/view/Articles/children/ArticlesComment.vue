<template lang="">
    <div class="articles-comment">
        <div class="comment-title">
            <div v-if="isShowIcon">
                <i class="iconfont">&#xe609;</i>
                评论
            </div>
            <div v-else>
                <i class="iconfont">&#xe609;</i>
                评论 {{commentNum}}
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    props:{
        isShowIcon:{
            required:true,
            type:Boolean,
            default(){return true}
        },
        commentNum:{
            type:Number,
            default(){return 1}
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