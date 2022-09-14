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
    
</style>