/**
 * popmotion框架封装，滚动hook
 */
import {animate} from 'popmotion'
export default function useScrollAnimate(from,to){
    animate({
        from,
        to,
        onUpdate:lasted=>window.scrollTo(0,lasted)
    })
}