<template lang="">
    <div class="articles-pagination">
        <div class="post">
            <router-link to="/home">
                <img src="../../../assets/img/blog/blogBg1.jpeg" alt="">
                <div class="post-info">
                    <div>上一篇</div>
                    <div>博客技术总结</div>
                </div>
            </router-link>
        </div>

        <div class="post">
            <router-link to="/home">
                <img src="../../../assets/img/blog/blogBg2.jpeg" alt="">
                <div class="post-info">
                    <div>下一篇</div>
                    <div>2022新的开始</div>
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
        .post{
            position: relative;
            width: 50%;
            height: 160px;
            overflow: hidden;
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
                .post-info{
                    line-height: 2;
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    padding: 20px 40px;
                    transform: translate(0px,-50%);
                }
            }
            
            &::after{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color:rgba(0, 0, 0, .6);
            }
            &:hover{
                a{
                    img{
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
</style>