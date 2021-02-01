如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性,有全局作用域
Undefined 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
当您声明新变量时，可以使用关键词 "new" 来声明其类型：var a =new String;（a为String对象）
'str' == new String('str') => true(数据类型是被忽略的)    |  用===（绝对相等，值和类型都要一致）   => false
switch 语句会使用恒等计算符(===)进行比较
非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以用delete关键字删除变量。普通变量不可
任何变量都可以通过设置值为 undefined / null来清空 typeof undefined  // undefined  typeof null  // object
undefined：是所有没有赋值变量的默认值，自动赋值。
null：主动释放 一个变量引用的对象，表示一个变量不再指向任何对象地址。
使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"): 
myArray.constructor.toString().indexOf("Array")  返回-1则不是Array

在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。
search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

在 JavaScript 中，RegExp 对象是一个预定义了属性和方法的正则表达式对象。/ re expression  /
两个/包裹起来的变量便是一个RegExp对象，
test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false
exec() 用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
var patt = /\s+/; patt.test("e");   /e/.exec('hello');

try 语句测试代码块的错误。
catch语句处理错误。
throw 语句创建自定义错误。 异常可以是 JavaScript 字符串、数字、逻辑值或对象。
finally 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。
try{} catch (e) {console.log(e.message)} finally{ throw 'error' };

JavaScript 中，函数及变量的声明都将被提升到执行环境最顶部。初始化不会提升
变量虽然发生了提升，但是给变量赋的值是不会随之提升的，所以在声明变量前使用变量就会得到结果undefined。
与变量提升不同的是，函数的返回值也会随之提升 在script>标签中的任何地方都能调用函数并且使用函数的返回值。

数组(a=[]) 使用名字作为索引时(a['e']=12)，当访问数组时，JavaScript 会把数组重新定义为标准对象。
执行这样操作后，数组的方法及属性将不能再使用，可使用对象的方法a[0] (undefined);   a.e (12)   a['e'] (12);
定义数组或对象元素，最后不能添加逗号
测试对象是否存在 if (typeof myObj !== "undefined" && myObj !== null) 

在每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的。块作用域中创建的变量在块结束后仍能使用 for (let i=10;;); alert(i)  10

在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。[Window Object]
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
apply 和 call 就是函数对象的方法。这两个方法异常强大，他们允许切换函数执行的上下文环境（context）即 this 绑定的对象
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName; }}
var person2 = {
  firstName:"John",
  lastName: "Doe",}
person1.fullName.call(person2);  // 返回 "John Doe"

在 ES6 之前，JavaScript 只有两种作用域： 全局变量 与 函数内的局部变量。ES6 可以使用 let 关键字来实现块级作用域。
在 HTML 中, 全局作用域是针对 window 对象。使用 var 关键字声明的全局作用域变量属于 window 对象 window.var
使用 let 关键字声明的全局作用域变量不属于 window 对象， let声明变量也不能变量提升
const与let相似，但const声明的常量必须初始化且之后不能修改 const a = 10; 
使用 const 定义的对象或者数组，其实是可变的,但不可再次赋值

javascript:void(0) 中最关键的是 void 关键字， void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
下面的代码创建了一个超级链接，当用户点击以后不会发生任何事。当用户链接时，void(0) 计算为 0，但 Javascript 上没有任何效果。<a href="javascript:void(0)">单击此处什么也不会发生</a>
<a href="javascript:void(alert('Warning!!!'))">点我!</a>
在页面很长的时候会使用 # 来定位页面的具体位置，格式为：href='# + id'。

我们常常用子线程来完成一些可能消耗时间足够长以至于被用户察觉的事情，比如读取一个大文件或者发出一个网络请求。因为子线程独立于主线程，所以即使出现阻塞也不会影响主线程的运行。但是子线程有一个局限：一旦发射了以后就会与主线程失去同步，我们无法确定它的结束，如果结束之后需要处理一些事情，比如处理来自服务器的信息，我们是无法将它合并到主线程中去的。
为了解决这个问题，JavaScript 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。

Promise 类有 .then() .catch() 和 .finally() 三个方法，这三个方法的参数都是一个函数，.then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch() 则是设定 Promise 的异常处理序列，.finally() 是在 Promise 执行的最后一定会执行的序列。 .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        Promise 构造函数只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。
    起始函数包含两个参数 resolve 和 reject。当 Promise 被构造时，起始函数会被异步执行
    resolve 和 reject 都是函数，其中调用 resolve 代表一切正常，reject 是出现异常时所调用的
    resolve 和 reject 的作用域只有起始函数，不包括 then 以及其他序列；
    resolve 和 reject 并不能够使起始函数停止运行，别忘了 return。
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});

等价于
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();

var myFunction = new Function("a", "b", "return a * b");
== var myFunction = function(a, b) {return a * b};
== function myFunction(a, b) {return a * b};

函数自调用
(function () {
    alert("Hello!!");
})();     // 我将调用自己

箭头函数  ES6 新增了箭头函数。
箭头函数表达式的语法比普通函数表达式更简洁。
当只有一个参数时，圆括号是可选的 没有参数的函数应该写成一对圆括号
(参数1, 参数2, …, 参数N) => { 函数声明 }
const x = (x, y) => x * y;    x(1, 2)
当我们使用箭头函数的时候，箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的。
箭头函数是不能提升的，所以需要在使用之前定义。
使用 const 比使用 var 更安全，因为函数表达式始终是一个常量。
如果函数部分只是一个语句，则可以省略 return 关键字和大括号 {}，这样做是一个比较好的习惯

JavaScript 函数有个内置的对象 arguments 对象。argument 对象包含了函数调用的参数数组
JavaScript 形式参数通过值来传递：函数仅仅只是获取值。
如果函数内修改形似参数的值，不会修改实际参数的初始值（在函数外定义）。
传递对象时传递的时对象的引用，因此我们在函数内部修改对象的属性就会修改其初始的值。

如果函数调用前使用了 new 关键字, 则是调用了构造函数,返回一个对象 新对象会继承构造函数的属性和方法。 

JavaScript 闭包
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();//函数自调用并返回一个函数闭包（能访问到上层函数的变量）
add();
add();
add(); // 计数器为 3