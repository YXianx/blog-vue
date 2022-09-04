<template lang="">
    <div class="albums">
        <banner :isScrollDown="false"
                height="400px"
                :bannerUrl="require('@img/albums/banner.jpg')">
            <template #title>
                <h1>相册</h1>
            </template>
        </banner>
        <div class="albums-container v-card">
            <el-row>
                <el-col :md="12" :span="24">
                    <router-link to="/home" v-slot="slotProps" custom>
                        <div class="albums-wrapper" @click="slotProps.navigate">
                            <div class="albums-title">简约风壁纸</div>
                            <img src="@img/other/background.jpg" alt="">
                        </div>
                    </router-link>
                </el-col>
            </el-row>            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .albums-container{
        padding: 50px 40px;
        .albums-wrapper{
            position: relative;
            border-radius: 8px;
            cursor: pointer;
            img{
                width: 100%;
                border-radius: 8px;
                background-size:cover;
            }
            .albums-title{
                position: absolute;
                top: 1.8rem;
                left: 2rem;
                font-size: 1.25rem;
                color: #fff;
                z-index: 99;
            }

            &::after{
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                border-radius: 8px;
                background-color: #000;
                opacity: 0;
                transition: all 300ms;
            }
            &:hover{
                &::after{
                    opacity: .3;
                }
            }
        }
    }
    @media (min-width:759px){
        .albums-container{
            width: 1200px;
            margin: 40px auto 40px auto;
            .albums-wrapper{
                width: 100%;
                height: 240px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>