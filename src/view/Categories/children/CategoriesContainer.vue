<template lang="">
    <div class="categories-view">
        <router-view>
            <transition name="detail" mode="out-in"> 
                <div class="categories-container" :style="!route.params.id?'padding:50px 40px;':''" :class="!route.params.id?'v-card':''">
                    <div class="categories-title">分类 - {{categoryList.length}}</div>
                    <ul class="categories-list">
                        <li class="categories-item" v-for="(item,index) in categoryList">
                            <router-link :to="'/categories/'+item.id">
                                {{item.categoryName}}
                                <span>({{item.count}})</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </transition>
        </router-view>
    </div>
</template>
<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'

import {getCategoryList} from '@network/categories/categories.js'
export default {
    setup(){
        const route = useRoute()
        const categoryList = ref([])
        getCategoryList()
        .then(res=>{
            categoryList.value = res.data.data.records
        })

        return {
            route,
            categoryList
        }
    }
}
</script>
<style lang="less">
    .categories-container{
        .categories-title{
            text-align: center;
            font-size: 36px;
        }
        .categories-list{
            margin: 0 5rem;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            .categories-item{
                position: relative;
                padding: 10px 1.8rem 10px 0;
                a{
                    transition: color 300ms;
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    left: -1.5rem;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    border-radius: 50%;
                    border: .2rem solid #49b1f5;
                    transition: all 300ms;
                }
                &:hover{
                    &::after{
                        border: .2rem solid #ff7242;
                    }
                    a{
                        color: var(--color-high-text);
                    }
                }
            }
        }
    }

    @media (max-width:759px){
        .categories-container{
            padding: 0;
            margin: 20px 5px 0px 5px;
            .categories-list{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                margin:0;
                margin-top: 10px;
                .categories-item{
                    padding-right: 10px;
                }
            }
        }
    }

    .detail-enter-active{
        animation: .7s rightIn ease-out;
    }
    .detail-leave-active{
        animation: .7s rightIn ease;
        animation-direction: reverse;
    }   

    @keyframes rightIn {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>