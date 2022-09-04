<template lang="">
    <div class="categories">
        <banner :bannerUrl="require('@img/categories/detail-banner.jpg')"
                height="400px"
                :isScrollDown="false"
                :backgroundScroll="false">
            <template #title>
                <h1>分类</h1>
            </template>
        </banner>
        <categories-container class="container"/>
    </div>
</template>
<script>
import {watch} from 'vue'
import {useRoute} from 'vue-router'
import CategoriesContainer from './children/CategoriesContainer.vue'

export default {
    components:{
        CategoriesContainer
    },
    setup(){
        // 一级路由和二级路由指向同个组件，组件的create生命周期就不会触发，数据请求就不能写在create周期中
        // 解决：这边使用watch监听当前route的变化再通过正则表达式判断当前是否是二级路由即可
        const route = useRoute()
        watch(route,(newValue,oldValue)=>{
            let path = newValue.path
            if(/\/.+\/.+/.test(path)){
                const id = newValue.params.id
                console.log("进入二级路由",id)
            }else{
                console.log("false")
            }
        })
        return {
            
        }
    }
}
</script>
<style lang="less">
    .categories{
        margin-bottom: 10px;
        .container{
            animation: containerAni 700ms ease-out;
        }
    }
    @media (min-width:759px){
        .container{
            width: 1200px;
            margin: 40px auto 0 auto;
        }
    }
</style>