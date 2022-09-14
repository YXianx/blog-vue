<template lang="">
    <div class="albums">
        <banner :isScrollDown="false"
                height="400px"
                :bannerUrl="IMG_URL + 'albums_banner.webp'"
                :backgroundScroll="false">
            <template #title>
                <h1>相册</h1>
            </template>
        </banner>

        <div class="albums-container v-card">
            <transition name="albums" appear mode="out-in">
                <div class="albums-list" v-if="!route.params.id">
                    <el-row :gutter="10">
                        <el-col :md="12" :span="24" v-for="(item,index) in 2">
                            <router-link :to="`/albums/${index+1}`" v-slot="slotProps" custom>
                                <div class="albums-wrapper" @click="slotProps.navigate">
                                    <div class="albums-title">简约风壁纸</div>
                                    <img :src="IMG_URL + 'albums_card_cover.webp'" alt="">
                                </div>
                            </router-link>
                        </el-col>
                    </el-row>            
                </div>
                <div class="albums-show-list" v-else>
                    <div class="item" v-for="(item,index) in srcList">
                        <el-image :src="item"
                                  :preview-src-list="srcList"
                                  @click="ImageViewClick(index)">
                        </el-image>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import {ref,watch} from 'vue'
import {useRoute} from 'vue-router'
import { useWatchRoute } from '@/hook'

import {IMG_URL} from '@const/index.js'
export default {
    setup(){
        // hook：watch监听二级路由进入同个组件
        // const {params} = useWatchRoute()
        const route = useRoute()
        const ClearWatch = watch(route,(newValue,oldValue)=>{
            let path = newValue.path
            if(/\/.+\/.+/.test(path)){
                console.log("enter children route")
            }else{
                console.log("enter route")
            }
        })

        const srcList = [
            IMG_URL + "tag_bg_1.webp",
            IMG_URL + "tag_bg_2.webp",
            IMG_URL + "tag_bg_3.webp",
            IMG_URL + "tag_bg_4.webp",
            IMG_URL + "tag_bg_5.webp",
            IMG_URL + "tag_bg_6.webp",
            IMG_URL + "tag_bg_7.webp",
            IMG_URL + "tag_bg_8.webp"
        ]
        // TODO:(待解决)当前简单实现了图片点击浏览当前大图，但是顺序还是默认的srcList顺序，上一张下一张是乱的
        const ImageViewClick = (index)=>{
            let temp = srcList[0]
            srcList[0] = srcList[index]
            srcList[index] = temp
        }

        return {
            route,

            srcList,
            ImageViewClick,

            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .albums-container{
        padding: 50px 40px;
        animation: containerAni 700ms ease-out;
    
        .albums-wrapper{
            position: relative;
            border-radius: 8px;
            cursor: pointer;
            img{
                width: 100%;
                border-radius: 8px;
                background-size:cover;
            }
            .albums-title{
                position: absolute;
                top: 1.8rem;
                left: 2rem;
                font-size: 1.25rem;
                color: #fff;
                z-index: 99;
            }

            &::after{
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                border-radius: 8px;
                background-color: #000;
                opacity: 0;
                transition: all 300ms;
            }
            &:hover{
                &::after{
                    opacity: .3;
                }
            }
        }
    }
    .albums-show-list{
        column-count: 4;
        column-gap: 0;
        .item{
            padding: 3px;
            img{
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
    .albums-enter-from,
    .albums-leave-to{
        opacity: 0;
        transform: translateY(100%);
    }
    .albums-enter-to,
    .albums-leave-from{
        opacity: 1;
        transform: translateY(0px);
    }
    .albums-enter-active,
    .albums-leave-active{
        transition: all 400ms;
    }
    @media (min-width:759px){
        .albums-container{
            width: 1200px;
            margin: 40px auto 40px auto;
            .albums-wrapper{
                width: 100%;
                height: 240px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    @media (max-width:759px){
        .albums-container{
            padding: 36px 14px;
            margin: 20px 10px 20px 10px;
            .albums-wrapper{
                margin: 5px 0;
            }
        }
        .albums-show-list{
            column-count: 1;
            column-gap: 0;
        }
    }
</style>