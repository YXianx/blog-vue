export function debounce(func, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            func.apply(this, arguments);
            timer = null
        }, delay)
    }
}