<template lang="">
    <div class="archives">
        <banner height="400px" 
                :bannerUrl="require('@img/archives/banner.jpg')"
                :isScrollDown="false"
                :backgroundScroll="false">
            <template #title>
                <h1>归档</h1>
            </template>
        </banner>
        <archives-container class="container"/>
    </div>
</template> 
<script> 
import Banner from '@component/content/Banner.vue'
import ArchivesContainer from './children/ArchivesContainer.vue'
export default {
    components:{
        Banner,
        ArchivesContainer
    }
}
</script>
<style lang="less">
    .archives{
        width: 100%;
        margin-bottom: 45px;
    }
    .container{
        animation: containerAni 700ms ease-out;
    }
</style>