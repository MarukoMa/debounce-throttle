# debounce(防抖)

## 防止抖动，单位时间内事件触发会被重置，只执行最后一次触发事件,避免事件被误伤触发多次。
* 场景   
    表单提交、调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖

## Installation

`$ npm i static-koa`

## Usage
### throttle
```javascript
    import { throttle } from 'debounce-add-throttle';
    button.addEventListener('click', throttle(function(event) {
              console.log(this, event);
        }, 1000, 1));

```
### throttle
```javascript
    import { debounce } from 'debounce-add-throttle';
    window.addEventListener('scroll', debounce(function(event){
         console.log(this, event);
     }, 200));

```

## options
* fn   
    函数,处理实际业务逻辑
* delay.  
    延迟执行毫秒数.  
    default:200
* immediate.  
    设置函数是否立即执行  
    true 表立即执行，false 表非立即执行. 
    不传参数,默认false
    

# throttle(节流)
## 控制流量，单位时间内事件只能触发一次，只执行一次函数
* 场景.  
    scroll事件，每隔一秒计算一次位置信息等. 
    浏览器播放事件，每个一秒计算一次进度信息. 
    input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)
## options
* fn.  
    函数,处理实际业务逻辑
* delay.  
    延迟执行毫秒数.  
    default:1000
* type.  
    两种实现方式. 
    1 表时间戳版，2 表定时器版. 
    不传参数,默认走定时器
