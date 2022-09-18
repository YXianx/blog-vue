<template lang="">
    <div class="articles-catalog v-card">
        <div class="catalog-title">
            <slot>
                <i class="iconfont">&#xe64d;</i>
            </slot>
            <span>{{title}}</span>
        </div>

        <ol v-if="mode === 'topic'">
            <li class="top-list-item" :class="index===currentIndex?'link-active':''" v-for="({title,offsetTop},index) in catalogList">
                <a @click="linkClick($event,index)">{{title}}</a>
            </li>
        </ol>
        
        <div class="article-list" v-if="mode === 'articles'">
            <div class="article-item" v-for="item in newArticles">
                <router-link :to="'/articles/'+item.id">
                    <img :src="item.articleCover" alt=""/>
                </router-link>
                <div class="content">
                    <router-link to="/articles">
                        {{item.articleTitle}}
                    </router-link>
                    {{item.createTime}}
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
// TODO:递归方式重构目录导航，参考评论区组件的递归树方式
import { ref,reactive,inject,onMounted,nextTick,watchEffect,watch } from 'vue';

import {useWinScroll} from '../../../hook/index' 
import {useScrollAnimate} from '../../../hook/index'

import {IMG_URL} from '@const/index.js'
import emitter from '../../../eventbus/index.js'
export default {
    props:{
        title:{
            type:String,
            default(){
                return "默认标题"
            }
        },
        mode:{
            type:String,
            default(){
                return 'topic'
            }
        }
    },

    setup(){
        const newArticles = ref([])
        emitter.on('newArticles',(res)=>{
            newArticles.value = res
        })

        onMounted(()=>{
            nextTick(()=>{
                // 延时获取DOM已保证获取到的标题offsetTop为准确的值，如果不这样做那么重复刷新页面时，由于DOM还没加载完毕，offsetTop的值会变化
                setTimeout(()=>{
                    titleEL.value = document.querySelectorAll('article h2')
                },500)
            })
        })
        
        const titleEL = ref(null)
        const catalogList = reactive([])    // 如果用普通类型数组那么由于代码执行顺序的问题，setup return时返回的是空数组，改为响应式解决这个问题
        const currentIndex = ref(0)
        
        const {scrollY} = useWinScroll()
        var isWatchScroll = true

        const linkClick = (e,index)=>{
            e.preventDefault(); // 取消a标签的默认行为
            isWatchScroll = false
            currentIndex.value = index
            // 优化滚动思路方法
            let el = catalogList[currentIndex.value].el
            let scrollY = window.scrollY
            useScrollAnimate(scrollY,el.offsetTop+437) // 滚动到offsetTop之后，每次距离顶端的距离都是437(通过getBoundingClientRect().top测试得知)，固加上该值实现效果
            
            // 延时重置监听标志，解决点击导航与滑动变换导航两者之间的并行执行冲突
            setTimeout(()=>{
                isWatchScroll = true
            },500)
        }

        // 监听titleEL是否有获取到DOM元素,获取到DOM后取消监听
        const clearTitleELWatchEffect = watchEffect(()=>{
            if(titleEL.value == null) return

            // (DOM数据清洗)过滤掉query查询出来的末尾空标签
            for(let i = 0;i < titleEL.value.length-1;i++){
                let el = titleEL.value[i]
                let offsetTop = titleEL.value[i].offsetTop  // 此处的offsetTop是在页面还没渲染完毕时的值，用于滚动时不准确所以这边push el对象即可
                let innerText = titleEL.value[i].innerText
                if(offsetTop != 0){
                    catalogList.push({
                        el,
                        offsetTop,
                        title:innerText
                    })
                }
            }
            clearTitleELWatchEffect()
        },{flush:"post"})

        // 实现页面滚动目录更新
        watch(scrollY,(newValue,oldValue)=>{
            if(!isWatchScroll) return // 如果正在点击导航跳转时，不监听页面滚动

            for(let i = 0;i < catalogList.length;i++){
                if(i!=catalogList.length - 1){
                    if(newValue >= catalogList[i].offsetTop+437 && newValue <= catalogList[i+1].offsetTop+437){
                        currentIndex.value = i
                    }
                }
                else if(i == catalogList.length - 1){
                    if(newValue >= catalogList[i].offsetTop+437){
                        currentIndex.value = i
                    }
                }
            }
        })

        return{
            newArticles,
            
            linkClick,
            catalogList,
            currentIndex,

            scrollY,

            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .articles-catalog{
        width: 100%;
        padding:20px 24px;

        .catalog-title{
            line-height: 2;
            font-size: 16px;
            margin-bottom: 6px;
            span{
                margin-left: 10px; 
            }
        }
        .top-list-item{
            line-height: 2;
            a{
                display: block;
                padding-left: 6px;
                font-size: 14px;
                color: @mainColor;
                cursor: pointer;
            }

            transition: all .4s;
        }
        .top-list-item.link-active{   
            background-color: #58C1B6;
            a{
                color:#fff;
                border-left: 4px solid #459B92;
            }
        }

        .article-item{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 6px 0;
            border-bottom: 1px dashed #f5f5f5;
            img{
                display: block;
                width: 58.8px;
                height: 58.8px;
                border-radius: 4px;
            }
            .content{
                line-height: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 10px;
                font-size: 80%;
                color: #858585;
                a{
                    font-size: 95%;
                    transition: color 400ms;
                    &:hover{
                        color: var(--color-high-text);
                    }
                }
            }
        }
    }
    @media (max-width:759px){
        .articles-catalog{
            display: none;
        }
    }
</style>