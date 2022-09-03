<template lang="">
    <div class="home">
        <home-banner/>
        <home-container class="container"/>
    </div>
</template>
<script>
import HomeBanner from './children/HomeBanner.vue';
import HomeContainer from './children/HomeContainer.vue'

export default {
    components:{
        HomeBanner,
        HomeContainer,
    }
}
</script>
<style lang="less" scoped>
    .home{
        width: 100%;
        
        .container{
            animation: containerAni 700ms ease-out;
        }
    }
</style>