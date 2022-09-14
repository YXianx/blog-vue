<template lang="">
    <div class="articles-recommend">
        <div class="recommend-title">
            <i class="iconfont">&#xe650;</i>
            相关推荐
        </div>
        <div class="recommend-list">
            <div class="recommend-item" v-for="item in 6">
                <router-link to="/home">
                    <img :src="IMG_URL + 'blog_bg_3.webp'" alt="">
                    <div class="recommend-info">
                        <div class="recommend-date">
                            <i class="iconfont">&#xeb3f;</i>
                            2022-8-30
                        </div>
                        <div>
                            关于我的2022
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {IMG_URL} from '@const/index.js'
export default {
    setup(){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less" scoped>
    .articles-recommend{
        margin-top: 40px;
        .recommend-title{
            font-size: 20px;
            margin-bottom: 5px;
            i{
                display: inline-block;
                font-size: 25px;
                color: var(--color-high-text);
                animation: iconflow 1s infinite ease;
            }
        }
        .recommend-list{
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            .recommend-item{
                width: calc(32%);
                height: 200px;
                margin: 5px;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    border-radius: 6px;
                    &:hover{
                        img{
                            transform: scale(1.2);
                            transition: all 400ms;
                        }
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .recommend-info{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        line-height: 2;
                        color: #fff;
                        font-size: 90%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        background-color: rgba(0,0,0,.5);
                        transition: all 400ms;

                        &:hover{
                            background-color: rgba(0,0,0,0);
                        }
                    }
                }
            }
        }
    }



    @media (max-width:759px) {
        .recommend-title{
            font-size: 92% !important;
        }
        .recommend-item{
            width: 100% !important;
            height: 150px !important;
        }
    }
</style>