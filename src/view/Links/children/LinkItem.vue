<template lang="">
<div class="link-item v-card">
    <a :href="'http://' + linkInfo.linkAddress">
        <img :src="linkInfo.linkAvatar" alt="">
    </a>
    <div class="link-info">
        <div class="link-detail">
            <div class="title">
                <a :href="'http://' + linkInfo.linkAddress">
                    {{linkInfo.linkName}}
                </a>
            </div>
            <span>{{replaceDateT(linkInfo.createTime)}}</span>
            <div class="desc">
                {{linkInfo.linkIntro}}
            </div>
        </div>
        <hr/>
        <div class="link-addr">
            <a :href="'http://' + linkInfo.linkAddress">
                <i class="iconfont">&#xe63b;</i>
                {{linkInfo.linkAddress}}
            </a>
        </div>
    </div>
</div>
</template>
<script>
import {computed} from 'vue'
import {IMG_URL} from '@const/index.js'
export default {
    props:{
        linkInfo:{
            type: Object,
            default(){return {}}
        }
    },
    setup(){
        const replaceDateT = computed(()=>{
            return (date)=>{
                return date.replace("T"," ")
            }
        })

        return {
            replaceDateT    
        }
    }
}
</script>
<style lang="less">
.link-item{
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin: 10px;
    a{
        display: block;
        width: 100%;
        img{
            width: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px; 
        }
    }
    hr{
        margin: 5px 0;
        border: 0.5px solid rgba(0, 0, 0, 0.12)
    }
    .link-info{
        padding: 10px;
        .link-detail{
            .title{
                a{
                    display: inline-block;
                    font-size: 1rem;
                    transition: color 300ms;
                    &:hover{
                        color: var(--color-high-text);
                    }
                }
            }
            span{
                color: #777;
                font-size: 0.78rem;
            }
            .desc{
                margin: 10px 0;
                color: #888;
                font-size: 0.95rem;
                line-height: 1.5;
            }
        }
        .link-addr{
            a{
                font-size: 0.85rem;
                color: var(--color-high-text);
                i{
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>