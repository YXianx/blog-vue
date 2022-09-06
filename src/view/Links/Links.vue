<template lang="">
    <div>
        <banner :bannerUrl="require('@img/links/banner.jpg')"
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
export default {
    components:{
        LinksContainer
    }
}
</script>
<style lang="less">

</style>