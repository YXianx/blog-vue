import {ref,watch} from 'vue'
import useWinScroll from '../../common/useWinScroll'

/**
 * 导航栏滚动及位置状态监听hook
 * @returns isShow是否显示导航栏，inTop滚动条是否到顶
 */
export default function(){
    /**
     * 导航栏上下滚动监听
     */
    const isShow = ref(true)
    const inTop = ref(true)
    
    /**
     * window窗体滚动监听
     */
    const {scrollY,scrollDirection} = useWinScroll()
    watch([scrollY,scrollDirection],([newSY,newSD],[oldSY,oldSD])=>{
        // (功能)判断滚动条是否在顶端 
        // (优化)导航栏颜色的过渡区间
        if(newSY===0 || newSY<30){
            inTop.value = true
        }
        else{
            // (优化)导航栏颜色的过渡区间
            if(newSY>60)inTop.value = false
        }

        // (功能)判断滚动方向
        if(newSD === "top"){
            isShow.value = true
        }
        else{
            // (优化)解决滚动条到顶端时导航栏隐藏的问题
            if(newSY>20)isShow.value = false
        }
    })

    return {
        isShow,
        inTop
    }
}