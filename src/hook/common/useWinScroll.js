import {ref} from 'vue'
/**
 * 监听浏览器滚动条位置信息
 * @returns 当前滚动条位置
 */
export default function useWinScroll(){
    // 滚动坐标
    const scrollX = ref(null)
    const scrollY = ref(null)

    // 滚动方向
    const scrollDirection = ref(null)
    const oldValue = ref(0)

    window.addEventListener("scroll",()=>{
        scrollX.value = window.scrollX
        scrollY.value = window.scrollY

        // 计算两次的坐标，推断是向上滑还是向下滑(解决mousewheel在safari浏览器中无效的问题)
        if(scrollY.value - oldValue.value>0){
            scrollDirection.value = "down"
        }
        else{
            scrollDirection.value = "top"
        }
        oldValue.value = scrollY.value
    })

    return {
        scrollX,
        scrollY,
        scrollDirection
    }
}