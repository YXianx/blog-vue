<template lang="">
    <div class="articles-operation"> 
        <div class="tag-container">
            <router-link :to="'/tag/'+item.id" v-for="item in tags">{{item.tagName}}</router-link>
        </div>
        <div class="social-share"></div>
    </div>
</template>
<script>
import {ref} from 'vue'
import emitter from '../../../eventbus/index'
export default {
    setup(){
        const tags = ref([])
        emitter.on('articleTags',res=>{
            tags.value = res
        })

        return {
            tags
        }
    }
}
</script>
<style lang="less">
    .articles-operation{
        .tag-container{
            a{
                display: inline-block;
                padding: 0 0.75rem;
                line-height: 2;
                font-size: 12px;
                color: #49b1f5;
                border: 1px solid #49b1f5;
                margin: 6px 10px 6px 0px;
                border-radius: 16px;
                transition: all 300ms;

                &:hover{
                    color: #fff;
                    background-color: #49b1f5;
                }
            }
        }
    }
</style>