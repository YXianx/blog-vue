<template lang="">
    <div class="articles-reward">
        <div class="reward-item like">
            <i class="iconfont">&#xe651;</i>
            点赞 {{likeCount}}
        </div>
        <div class="reward-item">
            <i class="iconfont">&#xe636;</i>
            打赏
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import emitter from '../../../eventbus/index'
export default {
    setup(){
        const likeCount = ref(0)
        emitter.on('likeInfo',(res)=>{
            likeCount.value = res
        })

        return {
            likeCount
        }
    }
}
</script>
<style lang="less" scoped>
    .articles-reward{
        display: flex;
        justify-content: center;
        margin: 20px 0;
        .reward-item{
            text-align: center;
            width: 100px;
            margin: 0 10px;
            padding: 8px 10px;
            color: #fff;
            font-size: 0.8rem;
            border-radius: 4px;
            background-color: #49b1f5;
            cursor: pointer;
        }
        .like{
            background-color: #969696;
        }
    }
</style>