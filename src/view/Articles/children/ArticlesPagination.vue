<template lang="">
    <div class="articles-pagination">
        <div class="post">
            <router-link to="/home">
                <img src="../../../assets/img/blog/blogBg1.jpeg" alt="">
                <div class="post-info">
                    <div class="label">上一篇</div>
                    <div class="title">博客技术总结</div>
                </div>
            </router-link>
        </div>

        <div class="post">
            <router-link to="/home">
                <img src="../../../assets/img/blog/blogBg2.jpeg" alt="">
                <div class="post-info">
                    <div class="label">下一篇</div>
                    <div class="title">2022新的开始</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .articles-pagination{
        display: flex;
        margin-top: 40px;
        .post{
            position: relative;
            width: 100%;
            height: 150px;
            overflow: hidden;
            .label{
                color: #eee;
                font-size: 90%;   
            }
            .title{
                color: #fff;
                font-size: 93%;
            }
            a{
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    transition: all 400ms;
                }
                &:hover{
                    img{
                        transform: scale(1.2);
                    }
                }
                .post-info{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    padding:20px 40px;
                    line-height: 2;
                    text-align: left;
                    background-color: rgba(0,0,0,.6);
                    transition: all 400ms;

                    &:hover{
                        background-color: rgba(0,0,0,0);
                    }
                }
            }
            &:nth-child(2){
                .post-info{
                    text-align: right;
                }
            }
        }
    }

    @media (max-width:759px){
        .post{
            height: 100px !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .post-info{
                padding: 5px 10px!important;
            }
        }
    }
</style>