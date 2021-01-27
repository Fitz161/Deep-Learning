对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法
创建一个对象
var person = {
  age : 32,
  name : { first : 'Bob', last : 'Smith' },
  gender : 'male',
  bio : function() {
    alert(this.name.first + ' ' + this.name['last'] + ' is ' + this.age + ' years old.');},
};

一个对象由许多的成员组成，每一个成员都拥有一个名字（像上面的name、age），和一个值（如['Bob', 'Smith']、32）。每一个名字/值（name/value）对被逗号分隔开，并且名字和值之间由冒号（:）分隔
值可以是任意的，name age gender称为对象的属性(property)，匿名函数也可作为对象的方法(method)

一个如上所示的对象被称之为对象的字面量(literal)——写出对象的内容来创建一个对象。不同于从类实例化一个对象
可以用一个对象来做另一个对象成员的值

另外一种访问属性的方式是使用括号表示法(bracket notation)  person.name.first <==> person['name']['first']
对象有时被称之为关联数组(associative array)了——对象做了字符串到值的映射，而数组做的是数字到值的映射。
设置成员并不意味着你只能更新已经存在的属性的值，你完全可以创建新的成员
person['eyes'] = 'hazel'
person.farewell = function() { alert("Bye everybody!") }

关键字"this"指向了当前代码运行时的对象( 原文：the current object the code is being written inside )

当一个对象需要从类中创建出来时，类的构造函数就会运行来创建这个实例。这种创建对象的过程我们称之为实例化

javaScript 没有像许多面向对象的语言一样有用于创建class类的声明
JavaScript 用一种称为构建函数的特殊函数来定义对象和它们的特征,如
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function () {
    alert('Hi! I\'m ' + this.name + '.');
  }
  return obj;
}
下面这个构建函数是 JavaScript 版本的类
function Person(name='bob') {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

 一个构建函数通常是大写字母开头，这样便于区分构建函数和普通函数。可以有默认参数
 var person1 = new Person('Bob'); 通过new运算符来创建对象（实例）跟java一致
 每次当我们调用构造函数时，我们都会重新定义一遍方法 为了避免这样，我们可以在原型里定义函数

能使用Object()构造函数来创建一个新对象，a=Object() <==> a={}
还可以将对象传递给Object() 构造函数作为参数,复制构造一个对象
JavaScript有个内嵌的方法create(), 它允许您基于现有对象创建新的对象。var person2 = Object.create(person1);