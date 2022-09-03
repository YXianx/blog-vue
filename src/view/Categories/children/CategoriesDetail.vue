<template lang="">
    <div class="categories-detail">
        <el-row>
            <article-item v-for="item in 6"/>
        </el-row>
    </div>
</template>
<script>
import Banner from '@component/content/Banner.vue'
import ArticleItem from './ArticleItem.vue'
import {useRoute} from 'vue-router'
export default {
    name:"CategoriesDetail",
    components:{
        Banner,
        ArticleItem
    },
    setup(){
        const route = useRoute()
        const categoriesId = route.params.id
        
        return {

        }
    }
}
</script>
<style lang="less">
    .categories-detail{

    }
</style>