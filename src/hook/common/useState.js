/**
 * 获取指定state变量并转换成computed计算属性
 */
 import {createNamespacedHelpers,useStore} from 'vuex'
 import {computed} from 'vue'
 export const useState = (module,mapper)=>{
     const {mapState} = createNamespacedHelpers(module)
     const store = useStore()
     const Fns = mapState(mapper)
     const Refs = {}
 
     Object.keys(Fns).forEach(key=>{
         Refs[key] = computed(Fns[key].bind({$store:store}))
     })
 
     return Refs
 }