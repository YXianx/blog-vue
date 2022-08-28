/**
 * 监听滚动条向上或向下滚动 (暂弃用，safari不支持mousewheel)
 * @param {function} callback 
 */
export default function useScrollTD(callback){
    const windowScrollListener = (e)=>{
        if(e){
            let isScrollTop = e.wheelDelta > 0 ? true : false 
            if(isScrollTop){
                callback({
                    type:"top",
                    wheelDelta:e.wheelDelta
                })
            }
            else{
                callback({
                    type:"down",
                    wheelDelta:e.wheelDelta
                })
            }
        }
    }

    window.addEventListener('mousewheel',windowScrollListener)
}