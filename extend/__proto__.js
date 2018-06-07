// 函数都有一个属性prototype
// __proto__
// 对象具有私有属性
// function Foo(){

// }
// var Boo ={name : 'Boo'};
// // 指向了一个对象
// Foo.prototype=Boo;

// // __proto__ 指向构造该对象的构造函数的原型
// var f = new Foo();
// console.log(f.__proto__);
// console.log(Foo.prototype ===Boo);
// console.log(f.__proto__ ===Boo);
// // 构造函数只想原型链

function Person(name){
    this.name=name;
}
Person.prototype={
    constructor:Person,
    // prototype 通过constructor与构造函数构成联系
    sayName:function(){
        console.log('my name is'+this.name);
    }
}
 var p1 =new Person('liang')
 console.log(p1.__proto__ ===Person.prototype)