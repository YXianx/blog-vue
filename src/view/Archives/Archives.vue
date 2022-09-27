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
        <archives-container class="container" :archiveList="archives"/>
    </div>
</template> 
<script> 
import {ref} from 'vue'
import ArchivesContainer from './children/ArchivesContainer.vue'
import {getArchivesList} from '@network/archives'
import {IMG_URL} from '@const/index.js'
export default {
    components:{
        ArchivesContainer
    },
    setup(){
        const archives = ref([])
        getArchivesList(1,10)
        .then(res=>{
            archives.value = res.data.data.archives
        })

        return {
            IMG_URL,
            archives
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