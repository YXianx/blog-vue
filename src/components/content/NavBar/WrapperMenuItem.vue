<template lang="">
    <div class="menu-item-md" @click="menuItemClick">
        <router-link :to="to">
            <i class="iconfont">{{iconfont}}</i>
            {{title}}
        </router-link>
    </div>
</template>
<script>
export default {
    emit:["wrapperItemClick"],
    props:{
        to:{
            type: String,
            default(){return '/home'}
        },
        iconfont:{
            type: String,
            default(){return '\ue752'}
        },
        title:{
            type: String,
            default(){return '默认导航'}
        }
    },
    setup(props,{emit}){
        const menuItemClick = ()=>{
            emit('wrapperItemClick')
        }

        return {
            menuItemClick
        }
    }
}
</script>
<style lang="less">
    .menu-item-md a{
        display: block;
        padding: 6px 30px;
        line-height: 2;
        color: #4c4948;
        i{
            margin-right: 3rem;
        }
    }
</style>