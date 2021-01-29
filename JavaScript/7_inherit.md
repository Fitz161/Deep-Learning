JavaScript使用了另一套实现方式，继承的对象函数并不是通过复制而来，而是通过原型链继承（通常被称为 原型式继承 —— prototype inheritance）。
function Person(first, last, age, gender, interests) {}
Person.prototype.greeting = function(){}

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject; 添加新属性
}

func.call函数接受多个参数，第一个参数为指定的对象，剩下的参数为调用func时穿的参
(method) `Function`.call(this: `Function`, thisArg: any, ...argArray: any[]): any
Calls a method of an object, substituting another object for the current object.

@param thisArg — The object to be used as the current object.
@param argArray — A list of arguments to be passed to the method.

如果您继承的构造函数不从传入的参数中获取其属性值，直接  父级.call(this)

Son.prototype = Object.create(Father.prototype);
让Son继承Father的原型
这意味着Son.prototype现在会继承Father.prototype的所有属性和方法
最后Son.prototype.constructor = Son;


每一个函数对象（Function）都有一个prototype属性，并且只有函数对象有prototype属性，因为prototype本身就是定义在Function对象下的属性。当我们输入类似var person1=new Person(...)来构造对象时，JavaScript实际上参考的是Person.prototype指向的对象来生成person1。另一方面，Person()函数是Person.prototype的构造函数，也就是说Person===Person.prototype.constructor（不信的话可以试试）。

在定义新的构造函数Teacher时，我们通过function.call来调用父类的构造函数，但是这样无法自动指定Teacher.prototype的值，这样Teacher.prototype就只能包含在构造函数里构造的属性，而没有方法。因此我们利用Object.create()方法将Person.prototype作为Teacher.prototype的原型对象，并改变其构造器指向，使之与Teacher关联。

任何您想要被继承的方法都应该定义在构造函数的prototype对象里，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构。