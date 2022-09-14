<template lang="">
    <div class="links">
        <banner :bannerUrl="IMG_URL + 'links_new_banner.webp'"
                height="400px"
                :backgroundScroll="false"
                :isScrollDown="false">
            <template #title>
                <h1>友情链接</h1>
            </template>
        </banner>
        <links-container></links-container>
    </div>
</template>
<script>
import LinksContainer from './children/LinksContainer.vue';
import {IMG_URL} from '@const/index.js'

export default {
    components:{
        LinksContainer
    },
    setup(){
        return {
            IMG_URL
        }
    }
}
</script>
<style lang="less">

</style>