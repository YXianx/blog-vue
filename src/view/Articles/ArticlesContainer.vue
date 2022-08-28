<template lang="">
    <div class="articles-container">
        <el-row :gutter="15">
            <el-col :md="18" :xs="24">
                <div class="article-wrapper v-card" :style="{background:getThemeConfig('mainCardBg')}">
                    <articles-content/>
                </div>
            </el-col>
            <el-col :md=6 :xs="24">
                <div class="right-container">
                    <articles-catalog mode='topic' title="目录"></articles-catalog>

                    <articles-catalog class="articles-mode" mode='articles' title="最新文章">
                        <i class="iconfont" style="font-size:20px;color:#e53935">&#xe638;</i>
                    </articles-catalog>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ArticlesContent from './children/ArticlesContent.vue'
import ArticlesCatalog from './children/ArticlesCatalog.vue'
import { useGetters } from '@/hook/common/useGetters';
export default {    
    components:{
        ArticlesContent,
        ArticlesCatalog
    },

    setup(){
        return {
            ...useGetters("themeModule",["getThemeConfig"])
        }
    }
}
</script>
<style lang="less">
    .articles-container{
        padding: 0 10px;
        margin: 28px auto 0px auto;

        .article-wrapper{
            padding: 10px;
            margin-bottom: 28px;    
        }
        .right-container{
            position: sticky;
            top: 20px;
        }

        .articles-mode{
            margin-top: 20px;
        }
    }


    @media (min-width:1200px){
        .articles-container{
            width: 1200px;
        }
    }
</style>