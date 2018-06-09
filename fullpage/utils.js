const utils={
    // 帮忙method执行的次数在规定时间内只有一次
    // method 执行时，函数内this PureFullPage
    // this.container 的高度
    throttle(method,context,delay){
        // args?
        // 返回的函数就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function(...args){
            // console.log(wait);
            // console.log(args);
            // method()直接执行method this 指向window
            // args? event 对象
            // 执行时，上下文环境要一样
            if(!wait){
                method.apply(context,args)
                wait =true; 
                setTimeout(()=>{
                    wait=false
                },delay)
            } 
        }
    }
}