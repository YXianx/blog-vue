import {createNamespacedHelpers,useStore} from 'vuex'
import {computed} from 'vue'
export const useGetters = (module,mapper)=>{
    const {mapGetters} = createNamespacedHelpers(module)
    const store = useStore()
    const Fns = mapGetters(mapper)
    const Refs = {}

    Object.keys(Fns).forEach(key=>{
        Refs[key] = computed(Fns[key].bind({$store:store}))
    })

    return Refs
}