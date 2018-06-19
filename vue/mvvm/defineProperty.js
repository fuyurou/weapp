// var o={};
// var bValue=4;
// Object.defineProperty(o,'a',{
//     get:function () {
//         return bValue;
//     },
//     set:function (val) {
//         console.log('设置了新值');    
//        bValue=val; 
//     }
// });
// o.a=3;
// console.log(o.a);


// (function () {
//     'use strict'; /* 严格模式 */
//     console.log(this);

//     var o = {};
//     Object.defineProperty(o, 'a', {
//         value: 7,
//         writable: false,
//     })
//     // o.a=24;
//     console.log(o.a);
// })();


// var o={};
// Object.defineProperty(o,'a',{
//     value:1,
//     enumerable:true
// })

// Object.defineProperty(o, 'b', {
//     value: 2,
//     enumerable: false
// })

// Object.defineProperty(o, 'c', {
//     value: 3,
// })

// o.d=4;

// console.log(Object.keys(o));

// for(let key in o){
//     console.log(key,o[key]);
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('b'));


// 'use strict';
// var o={};
// Object.defineProperty(o,'a',{
//     configurable:false,
//     get:function () {
//         return 1;
//     }
// });
// console.log(o.a);

// delete o.a;
// console.log(o.a);

function Archiver() {
    var temperature = null;

    var archiver = [];

    Object.defineProperty(this, 'temperature', {
        get: function () {
            console.log('get!');
            return temperature;
        },
        set: function (val) {
            console.log('set!');
            temperature=val;
        },
    })
 
    // var data={
    //     age:20,
    //     name:'oyc'
    // }
    // for(key in data){
    //     Object.defineProperty(data,key,{
    //       get:function () {
    //           console.log('get!');
    //           return data[key];
    //       },
    //       set:function (newVal) {
    //         console.log('set!');
    //          data[key]=newVal; 
    //       }
    //     })
    // }
    // data.age=22;
}

var arc = new Archiver();
arc.temperature = 50;
console.log(arc.temperature);
arc.temperature = 36;
console.log(arc.temperature);


