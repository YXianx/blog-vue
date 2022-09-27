<template lang="">
    <div class="link-container v-card">
        <div class="link-list">
            <el-row>
                <el-col :md="12" v-for="(item,index) in linkList">
                    <link-item style="margin:20px auto" :linkInfo="item"/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script> 
import {ref} from 'vue'
import LinkItem from './LinkItem.vue'
import {getLinkList} from '@network/links.js'
export default {
    components:{
        LinkItem
    },

    setup(){
        const linkList = ref([])
        getLinkList()
        .then(res=>{
            console.log(res.data.data)
            linkList.value = res.data.data
        })
        return{
            linkList
        }
    }
}
</script>
<style lang="less">
.link-container{
    animation: containerAni 700ms ease-out;
    .link-list{
        // display: flex;
        // flex-wrap: wrap;
    }
}
@media (min-width:1200px){
    .link-container{
        width: 1200px;
        padding: 50px 40px;
        margin: 40px auto 40px auto;
    }
}
@media (max-width:759px){
    .link-container{
        padding: 20px 15px;
        margin: 20px 10px 20px 10px;
    }
}
</style>