<template lang="">
    <div class="articles-container">
        <el-row :gutter="15">
            <el-col :md="18" :xs="24">
                <div class="article-wrapper v-card" :style="{background:getThemeConfig('mainCardBg')}">
                    <articles-content/>
                    <articles-copyright/>
                    <articles-operation/>
                    <articles-reward/>
                    <articles-pagination/>
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
import ArticlesContent from './ArticlesContent.vue'
import ArticlesCatalog from './ArticlesCatalog.vue'
import ArticlesCopyright from './ArticlesCopyright.vue';
import ArticlesOperation from './ArticlesOperation.vue'
import ArticlesReward from './ArticlesReward.vue'
import ArticlesPagination from './ArticlesPagination.vue'

import { useGetters } from '@/hook/common/useGetters';
export default {    
    components:{
        ArticlesContent,
        ArticlesCatalog,
        ArticlesCopyright,
        ArticlesOperation,
        ArticlesReward,
        ArticlesPagination
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
            padding: 8px 25px 15px 25px;
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