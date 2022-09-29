<template lang="">
    <div class="archives-container v-card">
        <ul class="time-line">
            <li class="time-title">目前共计{{archiveList.length}}篇文章，继续加油</li>
            <li class="time-item" v-for="item in archiveList">
                <span>{{item.createTime}}</span>
                <router-link :to="'/articles/' + item.id">{{item.articleTitle}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
// TODO:后期数据增多则添加页码分页
export default {
    props:{
        archiveList:{
            type: Array,
            default(){return []}
        }
    }
}
</script>
<style lang="less">
    .archives-container{
        padding: 50px 70px;
        .time-line{
            position: relative;
            margin-left: 50px;
            .time-title{
                position: relative;
                color: @mainColor;
                &::after{
                    position: absolute;
                    content: '';
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: var(--color-high-text);
                    left: -44px;
                    top: -8px;
                    z-index: 99;
                }
            }
            .time-item{
                position: relative;
                display: flex;
                align-items: center;
                margin: 2rem 0;
                height: 50px;
                padding-bottom: 20px;
                border-bottom:1px dotted #dbdde0;
                span{
                    margin-right: 20px;
                    font-size: 0.75rem;
                    color: #555;
                }
                a{
                    color:rgb(102, 102, 102);
                    transition: color 300ms;
                }
                &::after{
                    position: absolute;
                    left: -36.5px;
                    content: '';
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: #dbdde0;
                    transition: background 300ms;
                    z-index: 99;
                }
                &:hover{
                    a{
                        color: var(--color-high-text);
                    }
                    &::after{
                        background-color: var(--color-high-text);
                    }         
                }
            }
            &::after{
                position: absolute;
                content: '';
                width: 2px;
                height: 100%;
                background-color: #dbdde0;
                top: 0;
                left: -30px;
            }
        }
    }

    @media (min-width:759px){
        .archives-container{
            width: 1200px;
            margin: 40px auto 0 auto;
        }
    }
    @media (max-width:759px){
        .archives-container{
            padding: 36px 14px;
            width: 95%;
            margin: 20px auto 0 auto;
        }
    }
</style>