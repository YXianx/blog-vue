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
import Banner from '@/components/content/Banner.vue';
import CategoriesContainer from './children/CategoriesContainer.vue'
export default {
    components:{
        Banner,
        CategoriesContainer
    },
    setup(){

        return {
            
        }
    }
}
</script>
<style lang="less">
    .categories{
        margin-bottom: 45px;
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