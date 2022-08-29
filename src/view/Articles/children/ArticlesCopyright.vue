<template lang="">
    <div class="articles-copyright">
        <div class="copyright-info">
            <div class="copyright-item">
                <span>文章作者：</span>
                <router-link to="/home">贤先生x</router-link>
            </div>
            <div class="copyright-item">
                <span>文章链接：</span>
                <router-link to="/home">http://xianx.top/articles/1</router-link>
            </div>
            <div class="copyright-item">
                <span>版权声明：</span>
                本
                <router-link to="/home">博客</router-link>
                所有文章如转载请注明文章出处。
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .articles-copyright{
        line-height: 2;
        margin-top: 40px;
        margin-bottom: 10px;
        border: 1px solid #eee;
        color: @mainColor;
        .copyright-info{
            padding: 16px 16px;
            .copyright-item{
                font-size: 14px;
                span{
                    color:#49b1f5;
                }
                a{
                    color: #99a9bf;
                    text-decoration: underline;
                    transition: color 400ms;
                    &:hover{
                        color: var(--color-high-text);
                    }
                }
            
            }
        }
    }
</style>