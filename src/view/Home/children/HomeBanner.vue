<template lang="">
    <div class="home-banner">
        <Banner :bannerUrl="require('../../../assets/img/home/banner.jpg')" title="贤先生 · 个人博客">
            <template #title>
                <h1>贤先生 · 个人博客</h1>
            </template>
            <template #other>        
                <WriteTextAni content="长风破浪会有时，直挂云帆济沧海。"></WriteTextAni>
            </template>
        </Banner>
    </div>
</template>
<script>
import WriteTextAni from '../../../components/common/WriteTextAni.vue';
import Banner from '../../../components/content/Banner.vue'
export default {
    components:{
        Banner,
        WriteTextAni
    }
}
</script>
<style lang="css">

</style>