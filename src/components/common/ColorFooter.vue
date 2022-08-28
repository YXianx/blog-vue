<template>
    <div class="color-footer cur-link" @click="copyRightClick">
        <p class="footer-txt">&copy;2021 - 2022 By 贤先生x</p>
        <p class="footer-txt">闽ICP备 2022000386-1 </p>
    </div>
</template>

<script>
export default {
    name: 'PodcastColorfooter',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
       copyRightClick(){
            window.open("https://beian.miit.gov.cn/#/Integrated/index")
       }
    },
};
</script>

<style scoped>
    .color-footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 136px;
        padding:40px 20px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(-45deg,#ee7752,#ce3e75,#23a6d5,#23d5ab);
        background-size: 400%;
        animation: bganimation 8s infinite;
    }
    @keyframes bganimation {
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }

    .footer-txt{
        color: #fff;
        font-size: 14px;
        margin:6px 0;
    }
    .cur-link{
        cursor:pointer;
    }
</style>