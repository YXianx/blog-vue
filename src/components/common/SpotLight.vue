<template lang="">
    <transition name="spotLight">
        <div class="spot-light" v-if="isShow" 
            :style="{
                height: searchData.length ? '430px' : 'auto',
                top: searchData.length ? '391px' : '202px'
            }">
            <div class="search">
                <i class="iconfont">&#xe623;</i>
                <input
                    type="text"
                    placeholder="聚焦搜索"
                    v-focus
                    v-model="search"
                    @input="handleSearch"/>
            </div>
            <div class="search-list" v-if="searchData.length">
                <div class="search-module" v-for="moduleItem in searchData">
                    <template v-if="moduleItem.name === '分类' || moduleItem.name === '标签'">
                        <div class="module-title" v-if="moduleItem.data.length">{{ moduleItem.name }}</div>
                        <div class="search-item" v-for="contentItem in moduleItem.data" v-if="moduleItem.data.length">
                            <span class="first-word">{{ contentItem.firstWord }}</span>
                            <!-- <img class="mini-icon" v-if="contentItem.preViewList" :src="contentItem.preViewList[0].articleCover"> -->
                            <div class="info">
                                <div class="name">{{ contentItem.name }}</div>
                                <div class="count">相关文章: {{ contentItem.articleCount }} 篇</div>
                            </div>
                        </div>
                    </template>

                    <template v-if="moduleItem.name === '文章'">
                        <div class="module-title" v-if="moduleItem.data.length">{{ moduleItem.name }}</div>
                        <div class="search-item" v-for="contentItem in moduleItem.data" v-if="moduleItem.data.length">
                            <img class="mini-icon" v-if="contentItem.articleCover" :src="contentItem.articleCover">
                            <div class="info">
                                <div class="name">{{ contentItem.articleTitle }}</div>
                                <div class="time" v-if="contentItem.updateTime">修改于{{ replaceDateByT(contentItem.updateTime) }}</div>
                            </div>
                        </div>
                    </template>

                    <template v-if="moduleItem.name === '友链'">
                        <div class="module-title" v-if="moduleItem.data.length">{{ moduleItem.name }}</div>
                        <div class="search-item" v-for="contentItem in moduleItem.data" v-if="moduleItem.data.length">
                            <img class="mini-icon" v-if="contentItem.linkAvatar" :src="contentItem.linkAvatar">
                            <div class="info">
                                <div class="name">{{ contentItem.linkName }}</div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { ref } from 'vue'
import {IMG_URL} from '@const/index.js'
import { debounce } from '@/utils/debounce'
import { replaceDateByT } from '@/utils/time'
import { requestSearchContent } from '@/network/search/search'
export default {
    // 自定义指令：focus焦点
    directives:{
        focus:{
            mounted(el){
                el.focus()
            }
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default(){return true}
        }
    },

    setup(){
        const search = ref("")
        const searchData = ref([])
        const handleSearch = debounce(async function() {  // 防抖优化搜索
            if (search.value) {
                const searchResult = await requestSearchContent(search.value)
                searchData.value = searchResult.data.data
                console.log(searchData.value)
            } else {
                searchData.value = []
            }
        }, 500)

        return {
            IMG_URL,
            replaceDateByT,
            search,
            handleSearch,
            searchData
        }
    }
}
</script>
<style lang="less" scoped>
    .spot-light{
        display: flex;
        flex-direction: column;
        width: 680px;
        
        background-color: rgba(230,231,234,0.6);
        backdrop-filter: blur(12px);
        border-radius: 8px;
        position: fixed;
        z-index: 999;
        left: 50%;
        transform:translate(-50%,-50%);
        box-shadow: @shadowColor;
        
        .search{
            width: 100%;
            height: 52px;
            display: flex;
            i{
                font-size: 1.5rem;
                padding: 10px 15px;
                color: #000;
            }
            input{
                width: 100%;
                height:100%;
                border-radius: 8px;
                background-color: transparent;
                outline: none;
                border:none;
                padding: 10px 0px;
                padding-right: 10px;
                color: #000;
                font-size: 1.5rem;
            }
        }
        .search-list{
            overflow-y: scroll;
            border-top: 1px solid #a3a0a0;
            .search-module {
                .module-title {
                    font-size: 80%;
                    font-weight: 700;
                    margin: 10px 10px 0px 10px;
                    padding: 5px 5px 0px 5px; 
                }
                .search-item{
                    display: flex;
                    align-items: center;
                    padding: 5px;
                    margin: 10px;
                    border-radius: 6px;
                    // background-color: red;
                    .mini-icon{
                        width: 18px;
                        height: 18px;
                        border-radius: 3px;
                    }
                    .info{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        margin:0 10px;
                        font-size: 0.80rem;
                        color: #333;
                        font-weight: 700;
                        .time, .count {
                            color: #7e7c7c;
                        }
                    }
                    &:hover{
                        background-color:#4b86ed;
                        .info{
                            color: #fff;
                        }
                        // background-color:red;
                        .first-word {
                            color: #333;
                        }
                    }
                }
            }
        }
    }

    .spotLight-enter-from,
    .spotLight-leave-to{
        opacity: 0;
        // transform: translateY(30px);
    }
    .spotLight-enter-to,
    .spotLight-leave-from{
        opacity: 1;
        // transform: translateY(0px);
    }
    .spotLight-enter-active,
    .spotLight-leave-active{
        transition:all 200ms;
    }

    @media (max-width:759px){   
        .spot-light{
            width: 80%;
            height: 52px;
        }
    }
</style>