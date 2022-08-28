<template lang="">
    <div class="blog-card v-card">
        <div :class="imgOrder?'left-radius':'right-radius'">
            <router-link to="/articles">
                <img src="../../assets/img/blog/blogcard.png" alt="">
                <!-- <img src="" alt=""> -->
            </router-link>
        </div>
        <div class="ariticle-content">
            <div class="ariticle">
                <div class="title">
                    <router-link to="/articles">{{ariticleData.title}}</router-link>
                </div>
                <div class="info">
                    <i class="iconfont">&#xeb3f;</i> {{ariticleData.date}}
                    <span class="separator">|</span>
                    <router-link to="/articles">
                        <i class="iconfont">&#xe6aa;</i> {{ariticleData.category}}
                    </router-link>
                    <span class="separator">|</span>
                    <!-- 对tag标签v-for -->
                    <router-link class="tag" :to="tag.path" v-for="tag in ariticleData.tag">
                        <i class="iconfont">&#xe615;</i>{{tag.name}}
                    </router-link>
                </div>
                <div class="content">{{ariticleData.content}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imgOrder:{
            type:Boolean,
            default(){return true}
        },
        // TODO:(后端)首页的博客卡片模块需要 ariticleData 数据结构来渲染组件
        ariticleData:{
            type:Object,
            default(){
                return {
                    id:"1",
                    title:"博客文章测试",
                    date:"2022-08-22",
                    category:"项目介绍",
                    tag:[
                        {
                            name:"Vue",
                            path:"/home"
                        },
                        {
                            name:"项目",
                            path:"/home"
                        }
                    ],
                    content:`
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quam eos! Eligendi voluptatibus est rerum ad non enim. Dolor, unde aperiam vero molestiae iusto animi inventore! Mollitia eaque obcaecati ab.
                        Facilis, ex expedita. Natus suscipit, necessitatibus animi quaerat impedit laborum, non eaque numquam ex repellendus, quo iusto molestiae eius. Vel quo dolorum ipsa at dolorem deserunt delectus eveniet dolores ullam!
                    `
                }
            }
        }
    },

    setup(props){
        
    }
}
</script>
<style lang="less">
    .blog-card{
        width: 100%;
        height: 280px;
        display: flex;
        align-items: center;
        margin-top:20px;
        border-radius: 12px 8px 8px 12px !important;
        transition: all .4s ease;

        i,a,div{
            color: @mainColor;
        }

        &:hover{
            box-shadow: 0 4px 12px 12px rgb(7 17 27 / 15%);
        }
        &:hover .left-radius a img{
            transform: scale(1.1);
        }
        &:hover .right-radius a img{
            transform: scale(1.1);
        }

        .left-radius{
            width: 45%;
            height: 100%;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            overflow: hidden;
            order: 0;

            a img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;

                    transition: transform 500ms;
            }
        }

        .right-radius{
            width: 45%;
            height: 100%;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            overflow: hidden;
            order: 1;

            a img{
                display: block;
                width: 100%;
                height: 100%;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;

                transition: transform 500ms;
            }
        }

        .ariticle-content{
            flex: 1;
            padding: 0 40px;

            .ariticle {
                .title{
                    line-height: 1.4;
                    a{
                        font-size: 1.4rem;
                        transition: 300ms color;
                        &:hover{
                            color:var(--color-high-text)
                        }
                    }
                }

                .info{
                    font-size: 75%;
                    line-height: 2;
                    margin: 0.375rem 0;

                    .separator{
                        margin: 0 6px;
                    }

                    a{
                        transition: color 200ms;
                    }
                    .tag{
                        margin-right: 4px;
                    }
                    a:hover{
                        color: var(--color-high-text);
                    }
                }
                // 文本显示三行
                .content{
                    line-height: 2;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    @media (max-width:759px) {
        .blog-card{
            flex-direction: column;
            height: auto;
        }
        .blog-card .left-radius,
        .blog-card .right-radius{
            width: 100%;
            border-bottom-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: none;
            order: 0;
        }
        .blog-card .left-radius a img,
        .blog-card .right-radius a img{
            height: 230px !important;
            border-bottom-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 8px;
            border-top-left-radius: 8px;
        }
        .blog-card .ariticle-content{
            padding: 0;
        }
        .ariticle-content .ariticle{
            padding: 20px 20px 30px 20px;
        }
        .blog-card:hover .left-radius a img{
            transform: none;
        }
        .blog-card:hover .right-radius a img{
            transform: none;
        }
    }
</style>