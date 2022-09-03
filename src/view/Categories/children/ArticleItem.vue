<template lang="">
    <el-col :md="8" :span="24">
        <div class="article-item v-card">
            <router-link to="/home" v-slot="slotProps" custom>
                <div class="article-img" @click="slotProps.navigate">
                    <img src="@img/blog/blogBg1.jpeg" alt="">
                </div>
            </router-link>
            <div class="article-info">
                <div class="title">项目部署介绍</div>
                <div class="info" style="margin-top:10px">
                    <div>
                        <i class="iconfont">&#xe659;</i>
                        2022-03-21
                    </div>
                    <router-link to="/home" >
                        <i class="iconfont">&#xe6aa;</i>
                        项目介绍
                    </router-link>
                </div>
            </div>
            <hr class="article-line"/>
            <div class="tag-wrapper">
                <router-link to="/home">项目</router-link>
                <router-link to="/home">vue</router-link>
            </div>
        </div>
    </el-col>   
</template>
<script>
export default {
    setup(){

    }
}
</script>
<style lang="less">
    .article-item{
        margin:10px;
        overflow: hidden;
        .article-img{
            width: 100%;
            height: 220px;
            overflow: hidden;
            cursor: pointer;
            img{
                width:100%;
                height: 100%;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                transition: transform 300ms;
            }
            &:hover img{
                transform: scale(1.1);
            }
        }
        .article-info{
            padding: 15px 15px 12px 18px;
            font-size: 15px;
            .info{
                display: flex;
                justify-content: space-between;

                a{
                    transition: color 400ms;
                    &:hover{
                        color: var(--color-high-text);
                    }   
                }
            }
        }
        .article-line{
            border: .5px solid rgba(0,0,0,.12);
            margin: 0;
        }
        .tag-wrapper{
            padding: 10px 15px 10px 18px;
            a{
                display: inline-block;
                margin-right: 10px;
                font-size: 0.75rem;
                height: 22px;
                padding: 0 12px;
                color: #fff;
                line-height: 22px;
                border-radius: 16px;
                background: linear-gradient(90deg,#ee8988 0,#6dd9bb) !important;
            }
        }
    }
</style>