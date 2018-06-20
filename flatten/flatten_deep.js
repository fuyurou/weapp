function flatten(arr){
    // reduce削藩
    // 第一个return 就是执行reduce 的功能，括号里面有两个参数，后面的[]就是reduce初始值，带入到了prev为第一个参数，
    // reduce 的功能就是将所有的东西最后变成一个
    // next 在这里就是遍历的第一项，contact 就是把后面的东西吃进去
    return arr.reduce(function(prev,next){
        console.log(prev.next);
        return prev.contact(Array.isArray?flatten(next):next); 
    },[])
}
console.log(flatten([1,2[3,4],[5,[6,7]]]));