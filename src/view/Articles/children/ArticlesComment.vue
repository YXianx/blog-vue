<template lang="">
    <div class="articles-comment">
        <div class="comment-title">
            <div v-if="isShowIcon">
                <i class="iconfont">&#xe609;</i>
                评论
            </div>
            <div v-else>
                <i class="iconfont">&#xe609;</i>
                评论 {{commentCount}}
            </div>
        </div>    
    </div>
</template>
<script>
import {ref} from 'vue'
import emitter from '../../../eventbus/index'
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
    },
    setup(){
        const commentCount = ref(0)
        emitter.on('commentCount',(res)=>{
            commentCount.value = res
        })

        return {
            commentCount
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