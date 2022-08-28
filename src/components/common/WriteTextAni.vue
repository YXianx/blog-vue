<template lang="">
    <div class="font-content" 
        :style="{color:fontColor}" 
        ref="contentRef">
        {{content}}
    </div>
</template>
<script>
import {onMounted,ref} from 'vue'
export default {
    props:{
      content:{
        type:String,
        default(){
            return "默认内容显示"
        }
      },
      fontColor:{
        type:String,
        default(){
            return "#fff"
        }
      }
    },

    setup(){
        const contentRef = ref(null)

        onMounted(()=>{
            const root = document.documentElement
            const txtLength = contentRef.value.textContent.length
            root.style.setProperty("--strLength",txtLength-1)
            root.style.setProperty("--aniSpeed","3s")
            root.style.setProperty("--toWidth",`${1.2*txtLength}em`)
        })

        return{
            contentRef
        }
    }
}
</script>
<style lang="css" scoped>
    .font-content{
        position: relative; 
        display: flex;
        white-space: nowrap;
        /* width: em; */
        width: 1.2em;
        letter-spacing: .2em;
        color: #fff;
        font-size: 1.5rem;
        font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Lato,Roboto,PingFang SC,Microsoft YaHei,sans-serif!important;;
        overflow: hidden;
        
        animation: typing var(--aniSpeed) steps(var(--strLength)) forwards;
    }
    .font-content::after{
        position: absolute;
        content: '';
        width: 4px;
        height: 6rem;
        background-color: #fff;
        border: 4px;
        right: -1px;
        /* animation: typing var(--aniSpeed) steps(var(--strLength)) 1s forwards; */
        animation: 500ms cursor steps(var(--strLength)) infinite;
    }

    @keyframes typing{
        from{
            width: 1.2em;
        }
        to{
            /* 1.2单个字 * 16总数 = 19.2 */
            width:var(--toWidth);
        }
    }
    @keyframes cursor {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media (max-width:760px){
        .font-content{
            font-size: 16px;
        }
    }
</style>