<template lang="">
    <div class="blog-card v-card">
        <div :class="imgOrder?'left-radius':'right-radius'">
            <router-link :to="'/articles/' + articleData.id">
                <!-- <img :src="articleData.articleCover" alt=""> -->
                <el-image :src="articleData.articleCover" style="height:100%"></el-image>
            </router-link>
        </div>
        <div class="ariticle-content">
            <div class="ariticle">
                <div class="title">
                    <router-link to="/articles">{{articleData.articleTitle}}</router-link>
                </div>
                <div class="info">
                    <i class="iconfont">&#xeb3f;</i> {{articleData.createTime}}
                    <span class="separator">|</span>
                    <router-link to="/articles">
                        <i class="iconfont">&#xe6aa;</i> {{articleData.categoryName}}
                    </router-link>
                    <span class="separator">|</span>
                    <!-- 对tag标签v-for -->
                    <router-link class="tag" :to="'/articles/'+ articleData.id" v-for="tag in articleData.tags">
                        <i class="iconfont">&#xe615;</i>{{tag.tagName}}
                    </router-link>
                </div>
                <div class="content">{{articleData.articleContent}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {IMG_URL} from '@const/index.js'
export default {
    props:{
        imgOrder:{
            type:Boolean,
            default(){return true}
        },
        
        articleData:{
            type:Object,
            default(){
                return {}
            }
        }
    },

    setup(props){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .blog-card{
        width: 100%;
        height: 280px;
        display: flex;
        align-items: center;
        margin-top:20px;
        border-radius: 12px 8px 8px 12px !important;
        transition: all .4s ease;
        animation: showCard 1s ease;

        i,a,div{
            color: @mainColor;
        }

        &:hover{
            box-shadow: 0 4px 12px 12px rgb(7 17 27 / 15%);
        }
        &:hover .left-radius a img{
            transform: scale(1.1);
        }
        &:hover .right-radius a img{
            transform: scale(1.1);
        }

        .left-radius{
            width: 45%;
            height: 100%;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            overflow: hidden;
            order: 0;

            a img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;

                    transition: transform 500ms;
            }
        }

        .right-radius{
            width: 45%;
            height: 100%;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            overflow: hidden;
            order: 1;

            a img{
                display: block;
                width: 100%;
                height: 100%;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;

                transition: transform 500ms;
            }
        }

        .ariticle-content{
            flex: 1;
            padding: 0 40px;

            .ariticle {
                .title{
                    line-height: 1.4;
                    a{
                        font-size: 1.4rem;
                        transition: 300ms color;
                        &:hover{
                            color:var(--color-high-text)
                        }
                    }
                }

                .info{
                    font-size: 75%;
                    line-height: 2;
                    margin: 0.375rem 0;

                    .separator{
                        margin: 0 6px;
                    }

                    a{
                        transition: color 200ms;
                    }
                    .tag{
                        margin-right: 4px;
                    }
                    a:hover{
                        color: var(--color-high-text);
                    }
                }
                // 文本显示三行
                .content{
                    line-height: 2;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    @media (max-width:759px) {
        .blog-card{
            flex-direction: column;
            height: auto;
        }
        .blog-card .left-radius,
        .blog-card .right-radius{
            width: 100%;
            border-bottom-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: none;
            order: 0;
        }
        .blog-card .left-radius a img,
        .blog-card .right-radius a img{
            height: 230px !important;
            border-bottom-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 8px;
            border-top-left-radius: 8px;
        }
        .blog-card .ariticle-content{
            padding: 0;
        }
        .ariticle-content .ariticle{
            padding: 20px 20px 30px 20px;
        }
        .blog-card:hover .left-radius a img{
            transform: none;
        }
        .blog-card:hover .right-radius a img{
            transform: none;
        }
    }

    // 卡片出现动画
    @keyframes showCard{
        from{
            transform: scale(0);
        }
        to{
            transform: scale(1);
        }
    }
</style>