<template lang="">
    <div class="categories-container" :style="!route.params.id?'padding:50px 40px;':''" :class="!route.params.id?'v-card':''">
        <div class="categories-title" v-if="!route.params.id">分类 - 6</div>
        <ul class="categories-list" v-if="!route.params.id">
            <li class="categories-item" v-for="(item,index) in 6">
                <router-link :to="'/categories/'+index">
                    项目介绍
                    <span>(3)</span>
                </router-link>
            </li>
        </ul>
        
        <router-view>
            <transition name="detail"> 
                <component v-if="route.params.id" is="CategoriesDetail"></component>
            </transition>
        </router-view>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'

import CategoriesDetail from './CategoriesDetail.vue'
export default {
    components:{
        CategoriesDetail
    },

    setup(){
        const route = useRoute()
        
        return {
            route
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
        }
    }

    .detail-enter-active,
    .detail-leave-active{
        animation: .7s rightIn ease-out
    }
    .categories-enter-active,
    .categories-leave-active{
        animation: .7s rightIn ease-out;
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