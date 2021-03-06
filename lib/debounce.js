/**
 * @desc 函数防抖
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(fn, delay, immediate) {
    delay = delay || 200
    let timeout
    return function(){
        const args = Array.prototype.slice.call(arguments)
        if(timeout) clearTimeout(timeout)
        if(immediate){
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, delay)
            if(callNow) fn.apply(this, args)
        }else{
            timeout = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }  
    }
}
export { debounce }