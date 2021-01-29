JavaScript 常被描述为一种`基于原型的语言` (prototype-based language)——每个对象拥有一个`原型对象`，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为`原型链` (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。
准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的`prototype`属性上，而非对象实例本身。

在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个`链接`（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

在javascript中，函数可以有属性。 每个函数默认都有一个特殊的属性叫作原型（prototype）
正确使用 new 运算符的方法就是在正常调用函数时，在函数名的前面加上一个 new 前缀. 通过这种方法，在调用函数前加一个 new ，它就会返回一个这个函数的实例化对象. 然后，就可以在这个对象上面添加一些属性

所有函数都有默认一个__proto__属性，其值为一个object，    constructor属性
使用new f() 创建的对象默认只有一个__proto__属性    function(){}则两个都有

function doSomething(){}
console.log( doSomething.prototype );
// It does not matter how you declare the function, a
//  function in javascript will always have a default
//  prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );

可以用Object.getPrototypeOf(new Foobar())或Foobar.prototype来获取Foobar函数的__proto属性

就像上面看到的, doSomeInstancing 的 __proto__ 属性就是doSomething.prototype. 但是这又有什么用呢? 好吧,当你访问 doSomeInstancing 的一个属性, 浏览器首先查找 doSomeInstancing 是否有这个属性. 如果 doSomeInstancing 没有这个属性, 然后浏览器就会在 doSomeInstancing 的 __proto__ 中查找这个属性(也就是 doSomething.prototype). 如果 doSomeInstancing 的 __proto__ 有这个属性, 那么 doSomeInstancing 的 __proto__ 上的这个属性就会被使用. 否则, 如果 doSomeInstancing 的 __proto__ 没有这个属性, 浏览器就会去查找 doSomeInstancing 的 __proto__ 的 __proto__ ，看它是否有这个属性. 默认情况下, 所有函数的原型属性的 __proto__ 就是 window.Object.prototype. 所以 doSomeInstancing 的 __proto__ 的 __proto__ (也就是 doSomething.prototype 的 __proto__ (也就是 Object.prototype)) 会被查找是否有这个属性. 如果没有在它里面找到这个属性, 然后就会在 doSomeInstancing 的 __proto__ 的 __proto__ 的 __proto__ 里面查找. 然而这有一个问题: doSomeInstancing 的 __proto__ 的 __proto__ 的 __proto__ 不存在. 最后, 原型链上面的所有的 __proto__ 都被找完了, 浏览器所有已经声明了的 __proto__ 上都不存在这个属性，然后就得出结论，这个属性是 undefined.

## 构造器函数和普通函数并无二样，js中原型prototype与其他语言中继承相似 inherit from prototype

原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。

继承的属性和方法是定义在 `prototype` 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 `Object.prototype.` 开头的属性，而非仅仅以 `Object. `开头的属性。prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。
不在 `prototype` 对象内的成员，不会被“对象实例”或“继承自 Object() 的对象类型”所继承。这些方法/属性仅能被 Object() 构造器自身使用。
构造器本身就是函数，你怎么可能在构造器这个函数中定义一个方法呢？其实函数也是一个对象类型

prototype 属性大概是 JavaScript 中最容易混淆的名称之一。你可能会认为，this 关键字指向当前对象的原型对象，其实不是（还记得么？原型对象是一个内部对象，应当使用 __proto__ 访问）。prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

 Object.create() 方法创建新的对象实例。
var person2 = Object.create(person1);
create() 实际做的是从指定原型对象创建一个新的对象。这里以 person1 为原型对象创建了 person2 对象。在控制台输入：
person2.__proto__ 结果返回对象person1。

每个实例instance对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。
可以在instance.constructor 属性的末尾添加一对圆括号（括号中包含所需的参数），从而用这个构造器创建另一个对象实例。
只需在前面添加 new 关键字，便能将此函数作为构造器使用。如 a = new instance.constructor()

正常工作。通常你不会去用这种方法创建新的实例；但如果你刚好因为某些原因没有原始构造器的引用，那么这种方法就很有用了。

事实上，一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 prototype 属性上定义方法。如此，构造器只包含属性定义，而方法则分装在不同的代码块，代码更具可读性
