/**
 * @desc 函数节流
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版 不传参数,默认走定时器
 */

function throttle(fn, delay, type) {
    delay = delay || '1000';
    let preTime = 0
    let flag = true
    return function() {
        if(type === 1) {
            let now = Date.now()
            if(now - preTime > delay) {
                fn.apply(this,arguments)
                preTime = now
            }  
        }else{
            if(flag) {
                setTimeout(() => {
                    fn.apply(this, arguments)
                    flag = true
                },1000)
            }
            flag = false
        }  
    }
}
export { throttle }