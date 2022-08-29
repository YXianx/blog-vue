<template lang="">
    <div class="articles">
        <articles-banner/>
        <articles-container class='container'/>
    </div>
</template>
<script>
import {provide} from 'vue'
import ArticlesBanner from './children/ArticlesBanner.vue';
import ArticlesContainer from './children/ArticlesContainer.vue';

export default {
    // TODO:(前端)传递请求到的文章数据提取文章内容，通过provide & inject Articles -> ArticlesContent爷孙通信传递

    components:{
        ArticlesBanner,
        ArticlesContainer
    }, 

    setup(){
        // TODO:(前端)请求到的博客内容数据,之后改为只读响应式数据传递
        const articleDetailData = `
# 单元测试
## 第一标题
wqewqe
qwewqe
qwe
wqr
wrwrwrw

wqrwqrqwrqw
## 第二标题
qwrwqr
rrrr
r
r
r

## 第三标题
qwrwqrw
wer
e
re
rew
r
wer
## 第四标题
wqeqwrqwr
qewr
## 第五标题
qwr
这是一段测试文字

[test href]('http://baidu.com')
\`\`\`html
<template lang="">
    <div class="articles-container">
        <el-row :gutter="15">
            <el-col :md="18" :xs="24">
                <mavon-editor 
                    v-model="articleDetailData.content"
                    defaultOpen="preview"
                    :ishljs="false"
                    :editable="false"
                    :subfield="false"
                    :toolbarsFlag="false">
                </mavon-editor>
            </el-col>
            <el-col :md=6 :xs="24">
                <div style="background:#449522">2</div>
            </el-col>
        </el-row>
    </div>
</template>
\`\`\`

\`\`\`js
onMounted(()=>{
    nextTick(()=>{
        getCodes()
    })
})

const codes = ref(null)
const getCodes = ()=>{
    codes.value = document.querySelectorAll("pre code")
    console.log(codes.value);
    init()
}
\`\`\`
                            `

        provide("content",articleDetailData)
    }
}
</script>
<style lang="less" scoped>
    .articles{
        width: 100%;
        height: auto;

        .container{
            animation: containerAni 700ms ease-out;
        }
    }

    .banner{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
        }
    }
</style>