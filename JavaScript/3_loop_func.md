if else if跟c语言一致
if (condition){
} else if (condition){
} else {code;}

switch (choice) case 跟c语言基本一致，但choice值不限于整形表达式，字符串等也可
switch (choice) {
    case 'sunny':
        code;
        break;
    default:
        code;}

三元运算符 ( condition ) ? run this code : run this code instead

for (var i = 0; i < 100; i++) {
  code;
}
for (initializer; exit-condition; final-expression) {
  // code to run
}
while (exit-condition) {
  // code to run
}
do {
  // code to run
} while (exit-condition)

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

for (variable in object)
  statement

数组中可以有键值对arr = [3, 5, 7, foo: "hello"]
for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}
for (let i of arr) {
   console.log(i); // logs 3, 5, 7     foo的value  hello不会输出
}
While for...in iterates over property names, for...of iterates over property values
for in迭代key值，没有key时用index下标代替，for of迭代属性值

JavaScript有许多内置的函数，可以让您做很多有用的事情，而无需自己编写所有的代码。事实上, 许多你调用（运行或者执行的专业词语）浏览器内置函数时调用的代码并不是使用JavaScript来编写——大多数调用浏览器后台的函数的代码，是使用像C++这样更低级的系统语言编写的，而不是像JavaScript这样的web编程语言。

程序员把函数称为对象方法（method）的一部分
二者区别在于方法是在对象内定义的函数。浏览器内置函数（方法）和变量（称为属性）存储在结构化对象内，以使代码更加高效，易于处理。

匿名函数 如 function() { alert('hello');}

通常将匿名函数与事件处理程序一起使用, 例如，如果单击相关按钮，以下操作将在函数内运行代码
var myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('hello');
}
匿名函数也称为函数表达式。函数表达式与函数声明有一些区别。函数声明会进行声明提升（declaration hoisting），而函数表达式不会。

函数参数 有时也称为arguments parameters 属性properties attributes

函数返回值，直接在函数体内return，不用表明函数类型（返回值类型），只能return一个
isNaN函数判断参数是否为NaN

