<template lang="">
    <banner class="banner" 
            height="400px" 
            :isScrollDown="false"
            :bannerUrl="IMG_URL + 'blog_bg_3.webp'"
            :backgroundScroll="false"
            :leftTitle="true"
            :resetInfoHeight="true"
    >
        <template #title>
            <div class="articles-title">
                {{articleDetail.articleTitle}}
            </div>
        </template>
        <template #other>
            <div class="articles-info">
                <div class="top-line">
                    <span class="info-item"><i class="iconfont">&#xeb3f;</i> 发表于 {{articleDetail.createTime}}</span>
                    <span class="separator">|</span>
                    <span class="info-item"><i class="iconfont">&#xe628;</i> 更新于 {{articleDetail.updateTime}}</span>
                    <span class="separator">|</span>
                    <router-link to="/home">
                        <span class="info-item"><i class="iconfont">&#xe600;</i> {{articleDetail.categoryName}}</span>
                    </router-link>
                </div>
                <div class="bottom-line">
                    <span class="info-item"><i class="iconfont">&#xe7b1;</i> 字数统计：{{articleDetail.wordCount}}</span>
                    <span class="separator">|</span>
                    <span class="info-item"><i class="iconfont">&#xe659;</i> 阅读时长：{{articleDetail.readTime}}</span>
                    <span class="separator">|</span>
                    <span class="info-item"><i class="iconfont">&#xe64b;</i> 阅读量：{{articleDetail.readCount}}</span>
                    <span class="separator">|</span>
                    <span class="info-item"><i class="iconfont">&#xe607;</i> 评论数：{{articleDetail.commentCount}}</span>
                </div>
            </div>
        </template>
    </banner>
</template>
<script>
import {IMG_URL} from '@const/index.js'
export default {
    props:{
        articleDetail:{
            type: Object,
            default(){return {}}
        }
    },
    setup(){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .separator{
        margin: 0 6px;
    }
    .articles-title{
        font-size: 30px;
        margin: 200px 0 8px 0;
    }
    .articles-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.9;

        .top-line,
        .bottom-line{
            display: flex;
            align-items: center;
            
            .info-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            i{
                margin-right: 5px;
            }

            a{
                &:hover span{
                    color: var(--color-high-text);
                }
            }
        }
        span{
            font-size: 85%;
            color: #eee;
            transition:color 300ms;
        }
    }

    @media (max-width:759px){
        .articles-title{
            text-align: left;
            font-size: 1.5rem;
            
            margin: 0px 0 20px 0;
        }
        .articles-info{
            text-align: left;
            padding: 0 5%;
            .top-line{
                flex-wrap: wrap;
            }
            .bottom-line{
                flex-wrap: wrap;
            }
        }
    }
</style>