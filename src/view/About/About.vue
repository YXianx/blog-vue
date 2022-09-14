<template lang="">
    <div class="about">
        <banner :bannerUrl="IMG_URL + 'about_banner.webp'"
                height="400px"
                :backgroundScroll="false"
                :isScrollDown="false">
            <template #title>    
                <h1>关于我</h1>
            </template>
        </banner>
        <div class="about-container v-card">
            <div class="head-img">
                <img :src="IMG_URL + 'user_head.webp'" alt="">
            </div>
            <div class="about-title">
                关于我
            </div>
            <div class="tag-list">
                <div class="tag-item">00后</div>
                <div class="tag-item">Debug能手</div>
                <div class="tag-item">前端开发</div>
                <div class="tag-item">WPF</div>
            </div>
            <div class="about-list">
                <p>我是贤先生。</p>
                <p>大三</p>
                <p>一名前端码农、白日梦想家</p>
                <p>热爱吉他、摄影、数码产品...</p>
                <p>自认为对UI界面有着较高的审美hhh</p>
                <p>热衷于专研计算机有关的一切：</p>
                <p>前端开发、WPF桌面应用开发、脚本程序...</p>
                <p>对当前内卷的就业大环境既期盼又恐慌</p>
                <p>白日梦想：</p>
                <p>过上<a href="https://space.bilibili.com/286187082?spm_id_from=333.337.0.0">大耳朵TV</a>那样的生活</p>
                <p>请多指教！</p>
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
<style lang="less">
    .about{
        .about-container{
            animation: containerAni 700ms ease-out;
            .head-img{
                width: 80px;
                height: 80px;
                margin: 0 auto;
                margin-bottom: 20px;
                transition: transform 300ms;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                &:hover{
                    transform: rotate(360deg);
                }
            }
            .about-title{
                position: relative;
                font-size: 26px;
                text-align: center;
                margin-bottom: 40px;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -20px;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 50px;
                    height: 3px;
                    background-color: var(--color-high-text);
                }
            }
            .tag-list{
                display: flex;
                justify-content: center;
                .tag-item{
                    padding: 10px 15px;
                    font-size: 0.75rem;
                    background-color: #F5F5F5;
                    border-radius: 6px;
                    margin: 0 5px;
                    transition: all 300ms;
                    &:hover{
                        color: #000;
                        background-color: #E5E5E5;
                        box-shadow: @shadowColor;
                    }
                }
            }
            .about-list{
                margin-top: 20px;
                text-align: center;
                line-height: 2.5;
                font-size: 0.95rem;
                a{
                    color: var(--color-high-text);
                }
            }
        }
    }
    @media (min-width:1200px){
        .about-container{
            width: 1200px;
            margin: 40px auto 40px auto;
            padding: 50px 40px;
        }
    }
    @media (max-width:759px){
        .about-container{
            padding: 20px 10px;
            margin: 20px 10px;
        }
    }
</style>