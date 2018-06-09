class PureFullPage{
    constructor(options){
    // 留下属性的定义
    // 1.构造函数内部手动计算page的高度
    // #pureFullPage高度？
    // this.pages
    this.container=document.getElementById('pureFullPage');
    // this.pages=
    this.viewHeight=
    document.documentElement.clientHeight;
    this.init();

}
    init(){
        this.container.style.height=`${this.viewHeight}px`;
        // mousewheel 截流  
        // throttle() 是utils里面定义的一个，截流，this指是类，1000是定义的时间，规定时间之执行一次
        // this.scrollMouse 是当前的方法，负责滚动，直接给会执行频繁
        // throttle 在规定时间只执行一次 防抖
        // 重新返回一个函数，handleMouseWheel,闭包，
        // 将this.scrollMouse
        const handleMouseWheel=utils.throttle(this.scrollMouse,this,1000)

        // console.log(navigator.userAgent)
       if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1){
            document.addEventListener('mousewheel',
            // function(){
                // console.log('mousewheel')}
                // 监听函数名
                handleMouseWheel,false);
        }else{
            document.addEventListener('DOMMouseScroll',function(){
                console.log('scroll');
            },false)
        }
        // 事件监听  浏览器嗅探
        // mousewheel
        // firefox DOMMouseScroll
       
    }
    // 滚轮事件处理函数
    scrollMouse(){
       console.log(this.container);     
    }

}