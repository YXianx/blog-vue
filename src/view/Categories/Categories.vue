<template lang="">
    <div class="categories">
        <banner :bannerUrl="IMG_URL + 'categories_banner.webp'"
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
import CategoriesContainer from './children/CategoriesContainer.vue'
import {IMG_URL} from '@const/index.js'

export default {
    components:{
        CategoriesContainer
    },
    setup(){
        return {
            IMG_URL
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