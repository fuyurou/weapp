// Publish 多个Subsciber
// pub-sub
// 发布者
let zk={};
// 订阅者
zk.peopleList=[];
// 2018年10月1日大婚
// 作何反应？
zk.listen=function(fn){
    this.peopleList.push(fn);
}
zk.trigger=function(){
    // ?消息发出后，所有订阅者作出反应
    for(var i=0,fn;fn=this.peopleList[i++];){
        fn.apply(this,arguments)

    }
}
// 订阅者的过程
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，决定给红包`);
});
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，决定打飞机来`);
});
zk.listen(function(msg){
    console.log(`收到了你${msg}的信息，决定给红包`);
});

zk.trigger('曾凯同学要结婚了');
zk.trigger('曾凯同学生了大胖小子');
zk.trigger('曾凯同学要结婚了');