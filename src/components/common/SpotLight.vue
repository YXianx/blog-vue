<template lang="">
    <transition name="spotLight">
        <div class="spot-light" v-if="isShow">
            <i class="iconfont">&#xe623;</i>
            <input type="text" placeholder="聚焦搜索" v-focus/>
        </div>
    </transition>
</template>
<script>
export default {
    // 自定义指令：focus焦点
    directives:{
        focus:{
            mounted(el){
                el.focus()
            }
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default(){return true}
        }
    }
}
</script>
<style lang="less" scoped>
    .spot-light{
        display: flex;
        align-items: center;
        width: 680px;
        height: 52px;
        background-color: rgba(230,231,234,0.5);
        // opacity: .6;
        backdrop-filter: blur(12px);
        border-radius: 8px;
        position: fixed;
        z-index: 999;
        top: 127px;
        left: 50%;
        transform:translate(-50%,-50%);
        box-shadow: @shadowColor;
        i{
            font-size: 1.5rem;
            padding: 10px 15px;
            color: #000;
        }
        input{
            width: 100%;
            height:100%;
            border-radius: 8px;
            background-color: transparent;
            outline: none;
            border:none;
            padding: 10px 0px;
            padding-right: 10px;
            color: #000;
            font-size: 1.5rem;
        }
    }

    .spotLight-enter-from,
    .spotLight-leave-to{
        opacity: 0;
        // transform: translateY(30px);
    }
    .spotLight-enter-to,
    .spotLight-leave-from{
        opacity: 1;
        // transform: translateY(0px);
    }
    .spotLight-enter-active,
    .spotLight-leave-active{
        transition:all 200ms;
    }

    @media (max-width:759px){   
        .spot-light{
            width: 80%;
            height: 52px;
        }
    }
</style>