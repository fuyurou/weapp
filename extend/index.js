// // es6 class 只是语法糖
// // this 是代表新的实例
// // 这里是构造函数
// function Person(name){
//     this.name= name
// }
// Person.prototype={
//     getName:function(){
//         return this.name
//     }
// }

// function Author(name,book){
//     // 借用构造函数来执行.call，获取某些属性 这里this 是代表新生成的实例
//     Person.call(this,name);
//     this.books=books;
// }
// extend(Author,Person);继承
// Author.prototype.getBooks=function(){
//     return this.book;
// }
// function extend(subClass,superClass){
//     subClass.prototype = new superClass();
//     // var F =function(){}
// }
// const author = new Author('高尔基', ['我的offer']);
// console.log(author);
// // new Person()
// es6 class 只是语法糖
function Person(name) {
    this.name = name
  }
  
  Person.prototype = {
    getName: function() {
      return this.name;
    }
  }
  
  function Author(name, books) {
    Person.call(this, name);
    this.books = books;
  }
  
  extend(Author, Person);
  Author.prototype.getBooks = function() {
    return this.books;
  }
  
  function extend(subClass, superClass) {
    subClass.prototype = new superClass();
    // constructor属性丢失了 constructor属性就是他的构造函数 subClass
    subClass.prototype.constructor =subClass;
  }
  
  const author = new Author('高尔基', ['我的offer']);
  console.log(author.getName());
   const person= new Person('周杰伦');
   console.log(author.getName());

  
  // new Person()
  