class PureFullPage{
    // options插件的配置
    constructor(options){
    // 留下属性的定义
    // 1.构造函数内部手动计算page的高度
    // #pureFullPage高度？
    // this.pages
    const defaultOptions={
        isShowNav:true,
        delay:1000,
        // 每次turnpage callback
        definePages:()=>{}
    }

    this.options=Object.assign(defaultOptions,options);
    console.log(this.options);
    this.container=document.getElementById('pureFullPage');
    // this.pages=
    this.viewHeight=
    document.documentElement.clientHeight;
    this.DELAY=this.options.delay;
    this.currentPosition=0;
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
        const handleMouseWheel=utils.throttle(this.scrollMouse,this,this.DELAY)

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
        // 事件处理函数
        window.addEventListener('resize',this.handleWindowResize.bind(this),false);
       
    }

    
    handleWindowResize(event){
        // 对象的方法， 肯定有需要找到对象 
        // this 代表对象
        // console.log(this)
        // 防抖，
        // this指对象，bind就是指定对象
        utils.debounce(this.getNewPositon,this,event,this.DELAY);
    }

    getNewPositon(){
        console.log('debounce');
        this.viewHeight=
    document.documentElement.clientHeight;
    this.container.style.height=`${this.viewHeight}px`;

    }
    // 滚轮事件处理函数
    scrollMouse(event){
    //    console.log(this.container);
    const delta=utils.getWheelDelta(event); 
    // console.log(delta);   
    if(delta>0){
        // 向上滚
        this.goUp();
    } else{
        // 向下滚
        this.goDown();
    }
    }
    // goUp(){this.container.style.top=`${this.viewHeight}px`}
    // goDown(){
    //     this.container.style.top=`-${this.viewHeight}px`
    // }
    goUp(){
        if(this.currentPosition==0){return}
        this.currentPosition+=
        this.viewHeight;
        this.container.style.top=`${this.currentPosition}px`
    }
    goDown(){
        if(this.currentPosition==-2*this.viewHeight)
        return{}
        this.currentPosition-=
        this.viewHeight;
        this.container.style.top=`${this.currentPosition}px`
    }

        
}