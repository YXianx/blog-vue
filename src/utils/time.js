import { computed } from 'vue'
export const replaceDateByT = computed(()=>{
    return (time)=>{
        time = time + ''
        return time.replace("T"," ")
    }
})