<template lang="">
<div class="link-item v-card">
    <a href="http://xianx.top/">
        <img :src="srcList[id]" alt="">
    </a>
    <div class="link-info">
        <div class="link-detail">
            <div class="title">
                <a href="http://xianx.top/">
                    Xianx的个人博客
                </a>
            </div>
            <span>2022-12-02 13:12</span>
            <div class="desc">
                这是一个简单的个人博客，也是记录笔记的地方，欢迎到访。
            </div>
        </div>
        <hr/>
        <div class="link-addr">
            <a href="http://xianx.top">
                <i class="iconfont">&#xe63b;</i>
                http://xianx.top/
            </a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        id:0
    },
    setup(){
        const srcList = [
            require("@img/other/1.jpg"), 
            require("@img/other/2.jpg"),
            require("@img/other/3.jpg"),
            require("@img/other/4.jpg"),
            require("@img/other/5.jpg"),
            require("@img/other/6.jpg"),
            require("@img/other/7.jpg"),
            require("@img/other/8.jpg"),
        ]

        return {
            srcList
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