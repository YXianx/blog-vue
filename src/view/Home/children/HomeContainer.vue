<template lang="">
    <div class="home-container" ref="homeContainerRef">
        <el-row :gutter="15">
            <el-col :md="18" :xs="24">
                <blog-card v-for="(item,index) in getArticlesList"
                           :imgOrder="(index+1)%2!=0?true:false"
                           :articleData="item"
                />
            </el-col>
            <el-col class="el-wrapper" :md="6" :xs="24">
                <blog-wrapper class="wrapper" :wrapperData="userInfo"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {ref,nextTick} from 'vue'
import {useStore} from 'vuex'
import emitter from '../../../eventbus/index'

import BlogCard from '../../../components/content/BlogCard.vue';
import BlogWrapper from '../../../components/content/BlogWrapper.vue';

import {getHomeUserInfo} from '@network/home.js'
import {useGetters} from '@hook/index'
export default {
    emit:["homeContainerTop"], 

    components:{
        BlogCard,
        BlogWrapper
    },

    setup(){
        // 1、请求博客列表数据
        const store = useStore()
        store.dispatch('articlesModule/setupArticleList')

        // 2、设置banner下拉按钮的滚动距离
        const homeContainerRef = ref(null) 
        let offsetTop = 0
        nextTick(()=>{
            offsetTop = homeContainerRef.value.offsetTop
            emitter.emit('homeContainerTop',offsetTop)
        })
        
        // 3、请求用户首页信息
        const userInfo = ref({})
        getHomeUserInfo()
        .then(res=>{
            userInfo.value = res.data.data
        }) 

        return {
            homeContainerRef,
            userInfo,
            ...useGetters("articlesModule",["getArticlesList"])
        }
    }
}
</script>
<style lang="css" scoped>
    .home-container{
        /* 给el-row父容器添加padding 解决设置gutter属性el-row宽度溢出的问题 */
        padding: 0 10px;
        margin: 28px auto 28px auto;
    }
    .wrapper{
        top: 10px;
        position: sticky;
    }
    @media (min-width:1200px){
        .home-container{
            width:1200px;
            /* margin:0 auto;  */
            padding:0 5px;
        }
    }
    /* 屏幕缩小时且小于990px时 blog-wrapper组件还显示 这边把el-col都隐藏了，不然会被强行用移动端方式布局在最底下 */
    @media (max-width:990px) {
        .el-wrapper{
            display: none;
        }
    }
</style>