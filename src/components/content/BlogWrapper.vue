<template lang="">
    <div class="blog-wrapper">
        <div class="blogger-info">
            <img :src="wrapperData.bloggerHeadUrl" alt="">
        </div>
        <div class="blogger-name">
            {{wrapperData.blogger}}
        </div>
        <div class="blogger-phrase">{{wrapperData.phrase}}</div>
        <div class="blog-info-wrapper">
            <div class="blog-info-data" v-for="item in wrapperData.infoData">
                <router-link to="/home">
                    <div class="info-title">{{item.name}}</div>
                    <div class="info-num">{{item.number}}</div>
                </router-link>
            </div>
        </div>
        <div class="social-info">
            <a href="https://github.com/YXianx" target="blank">
                <i class="iconfont">&#xe6f6;</i>
            </a>
            <a href="https://gitee.com/yxianx"  target="blank">
                <i class="iconfont">&#xe686;</i>
            </a>
        </div>
    </div>
</template> 
<script>
import {IMG_URL} from '@const/index.js'
 
export default {
    props:{
        wrapperData:{
            type:Object,
            default(){
                return {
                    blogger:"贤先生x",
                    phrase:"超爱吃白切鸡",
                    bloggerHeadUrl:IMG_URL + 'user_head.webp',
                    infoData:[
                        {
                            name:"文章",
                            path:"/home",
                            number:5
                        },
                        {
                            name:"分类",
                            path:"/home",
                            number:4
                        },
                        {
                            name:"标签",
                            path:"/home",
                            number:5
                        }
                    ]
                }
            }
        }
    }
}
</script>
<style lang="less">
    .blog-wrapper{
        width: 100%;
        margin-top: 20px;
        padding: 20px 24px;
        line-height: 2;
        border-radius: 8px;
        background-color: @mainCardBg;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
        transition: all .4s;

        div,a,i{
            color: @mainColor;
        }
        
        &:hover{
            box-shadow: 0 4px 12px 12px rgb(7 17 27 / 15%);
        }

        .blogger-info img{
            display: block;
            margin: 0 auto;
            width: 110px;
            height: 110px;
            border-radius: 50%;
            transition: all 1s;
            
            &:hover{
                /* transform: scale3d(30deg); */
                animation: 1s headAni ease infinite;
            }
        }
        .blogger-name{
            font-size: 1.25rem;
            margin-top: 0.625rem;
            text-align: center;
            letter-spacing: .2em;
        }
        .blogger-phrase{
            text-align: center;
            font-size: .8rem;
        }
        .blog-info-wrapper{
            display: flex;
            justify-content: space-around;
            padding: 12px 10px 0;

            .blog-info-data{
                text-align: center;
                line-height: 2;
                font-size: 0.875rem;
            }
        }    
        .social-info{
            display: flex;
            justify-content: space-around;
            align-items: center;
            line-height: 40px;
            padding: 0 45px;
            margin: 6px 0 -6px;

            a i{
                font-size: 1.5rem;
                transition: color .3s;
            }
            a:hover i{
                color: var(--color-high-text);
            }
        }
    }
    

    @keyframes headAni{
        0%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(-10px);
        }
        100%{
            transform: translateY(0px);
        }
    }
</style>