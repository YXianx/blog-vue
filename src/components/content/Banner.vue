<template lang="">
    <div class="banner" 
         ref="bannerRef"
         :style="{height:height}">
        <!-- @keyfream实现动画 -->
        <div class="info" :class="resetInfoHeight?'reset':''">
            <div class="title" :class="leftTitle?'left':''">
                <slot name="title"></slot>
            </div>
            <div class="other">
                <slot name="other"></slot>
            </div>
        </div>
        <div class="scroll-down" v-if="isScrollDown" @click="scrollClick">
            <i class="iconfont">&#xe626;</i>
        </div>
    </div>
</template>
<script>
// TODO:给scroll-down下滑图标利用popmotion实现滚动到内容区的功能
import {ref,onMounted} from 'vue'
import {useScrollAnimate} from '@hook/index'

export default {
    props:{
        resetInfoHeight:{
            type:Boolean,
            default(){return false}
        },
        height:{
            type:String,
            default(){return "100vh"}
        },
        bannerUrl:{
            type:String,
            default(){return ""}
        },
        title:{
            type:String,
            default(){return "默认标题"}
        },
        isScrollDown:{
            type:Boolean,
            default(){
                return true
            }
        },
        toScrollY:{
            type:Number,
            default(){return 0}
        },
        backgroundScroll:{
            type:Boolean,
            default(){
                return true
            }
        },
        leftTitle:{
            type:Boolean,
            default(){
                return false
            }
        },  
    },

    setup(props){        
        const bannerRef = ref(null)
        const setBannerBg = ()=>{
            bannerRef.value.style.background = `url(${props.bannerUrl})center center /cover no-repeat`
            bannerRef.value.style.backgroundAttachment = props.backgroundScroll?"fixed":"none"
        }

        const scrollClick = ()=>{
            let from = window.scrollY
            let to = props.toScrollY
            useScrollAnimate(from,to)
        }

        onMounted(()=>{
            setBannerBg()
        })

        return {
            bannerRef,
            
            scrollClick
        }
    }
}
</script>
<style lang="less" scoped>
    .banner{
        position:relative;
        width: 100%;
        height: 100vh;
        // 当图片还未加载出来时显示背景颜色
        background-color: #49b1f5 !important; 

        .info{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            width: 100%;
            top: 40%;
            left: 50%;
            transform: translate(-50%,-50%);

            .title{
                font-size: 1rem;
                color: #fff;
                letter-spacing: 0.2em;
                animation: titleScale 1s ease;
            }
        }

        .scroll-down{
            position: absolute;
            left: 50%;
            bottom: 15px;

             i{
                display: inline-block;
                font-size: 1.4em;
                color: #f4f4f4;
                font-weight: 700;
                cursor: pointer;
                animation: 2s scrollDown ease-out infinite;
                animation-fill-mode: forwards;
            }
        }
    }

    @keyframes titleScale {
        from{
            transform: scale(0);
        }
        to{
            transform: scale(1);
        }
    }
    @keyframes scrollDown{
        0%{
            transform: translateY(-25px);
            opacity: .5;
        }
        50%{
            transform: translateY(0px);
            opacity: 1;
        }
        100%{
            transform: translateY(-25px);
            opacity: .5;
        }
    }

    @media (max-width:759px){
        .info h1{
            font-size: 26px;
        }
        // 兼容home及文章页内容显示
        .banner .info.reset,.banner .info.reset{
            top: 43vh;
        }
        .banner .info{
            top: 50%;
        }

        .title.left{
            position: absolute;
            left: 5%;
            top: -1.5em;
        }
    }
</style>