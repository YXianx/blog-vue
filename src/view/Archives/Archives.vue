<template lang="">
    <div class="archives">
        <banner height="400px" 
                :bannerUrl="IMG_URL + 'archives_banner.webp'"
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
import ArchivesContainer from './children/ArchivesContainer.vue'
import {IMG_URL} from '@const/index.js'
export default {
    components:{
        ArchivesContainer
    },
    setup(){
        return {
            IMG_URL
        }
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