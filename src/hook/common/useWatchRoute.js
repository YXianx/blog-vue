// 一级路由和二级路由指向同个组件，组件的create生命周期就不会触发，数据请求就不能写在create周期中
// 解决：这边使用watch监听当前route的变化再通过正则表达式判断当前是否是二级路由即可
import {watch,ref,onUnmounted} from 'vue'
import {useRoute} from 'vue-router'
export default function(){
    const route = useRoute()
    const params = ref(null)
    const ClearWatch = watch(route,(newValue,oldValue)=>{
        let path = newValue.path
        if(/\/.+\/.+/.test(path)){
            params.value = newValue.params
        }else{
            params.value = null
        }
    })

    // 销毁组件时取消监听
    onUnmounted(()=>{
        ClearWatch()
    })

    return {
        params
    }
}