<template>
  <div class="app">
    <blog-nav-bar class="app-nav-bar"/>

    <router-view v-slot="props">
      <transition name="route" mode="out-in" appear>
        <component :is="props.Component"></component>
      </transition>
    </router-view>
    <color-footer/>
  </div>
</template>

<script>
import BlogNavBar from './components/content/NavBar/BlogNavBar.vue';
import ColorFooter from './components/common/ColorFooter.vue';

import {setTheme} from './assets/css/theme/theme' 
import {useStore} from 'vuex'

export default {
  name: 'App',
  components: {
    BlogNavBar,
    ColorFooter
  },

  setup(){
    // 1、使用缓存主题样式
    const theme = window.localStorage.getItem("theme") || "default"
    setTheme(theme)
    // 2、主题样式存储到vuex
    const store = useStore()
    store.dispatch("themeModule/localStorageAction")

    return{

    }
  }
}
</script>

<style lang="less">
  @import url("./assets/css/base/base.css");
  .app{
    width: 100%;
    transition: background 1s;
    background: @mainBg;
  }
  .app-nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .route-enter-from,
  .route-leave-to{
    transform: translateY(-30px);
    opacity: 0;
  }
  .route-enter-to,
  .route-leave-from{
    transform: translateY(0px);
    opacity: 1;
  }
  .route-enter-active,
  .route-leave-active{
    transition: all 500ms ease;
  }

  // 固定样式
  .v-card{
    background-color: @mainCardBg;
    color:@mainColor;
    border-radius: 8px;
    box-shadow: @shadowColor;
  }
  // 内容区域动画
  @keyframes containerAni {
      from{
          transform: translateY(150px);
      }
      to{
          transition: translateY(0px);
      }
  }
</style>
