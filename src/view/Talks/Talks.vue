<template lang="">
    <div class="talks">
        <banner :bannerUrl="IMG_URL + 'talk_banner.webp'"
                height="400px"
                :isScrollDown="false"
                :backgroundScroll="false">
            <template #title>
                <h1>说说</h1>
            </template>
        </banner>
        <div class="container v-card">暂未开发。。。</div>
    </div>
</template>
<script>
import {IMG_URL} from '@const/index.js'
export default {
    setup(){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less">
    .container{
        padding: 40px 30px;
    }
    @media (min-width:759px){
        .container{
            width: 1200px;
            margin: 40px auto 40px auto;
        }
    }
</style>