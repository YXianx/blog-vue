<template lang="">
    <div class="home-banner">
        <banner :bannerUrl="require('@img/tag/banner.jpg')" 
                title="贤先生 · 个人博客"
                :resetInfoHeight="true">
            <template #title>
                <h1>贤先生 · 个人博客</h1>
            </template>
            <template #other>        
                <WriteTextAni content="长风破浪会有时，直挂云帆济沧海。"></WriteTextAni>
            </template>
        </banner>
    </div>
</template>
<script>
import WriteTextAni from '../../../components/common/WriteTextAni.vue';
export default {
    components:{
        WriteTextAni
    }
}
</script>
<style lang="css">

</style>