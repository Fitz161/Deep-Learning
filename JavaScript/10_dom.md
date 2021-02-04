JavaScript 能够改变页面中的所有 HTML 元素
JavaScript 能够改变页面中的所有 HTML 属性
JavaScript 能够改变页面中的所有 CSS 样式
JavaScript 能够对页面中的所有事件做出反应

## 查找 HTML 元素
通过 id 找到 HTML 元素 document.getElementById(); ->object/null
通过标签名找到 HTML 元素 getElementsByTagName("p");
通过类名找到 HTML 元素 document.getElementsByClassName();

## 改变 HTML 输出流
document.write() 可用于直接向 HTML 输出流写内容。
如果在页面已经加载完再write会覆盖掉原页面

## 改变 HTML 内容
document.getElementById(id).innerHTML=新的 HTML
document.getElementById(id).textContent =新的内容
不赋值的话会返回原html或内容

## 改变 HTML 属性
document.getElementById(id).attribute_name=新属性值
document.getElementById("image").src="landscape.jpg";

## 改变 HTML 样式
选中元素，使用style属性
document.getElementById(id).style.property_name=新样式

## DOM 事件
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1> 事件属性
字符串内为js代码
<button onclick="alert(Date())">点这里</button>

HTML DOM 允许您使用 JavaScript 来向 HTML 元素分配事件：
<script>
document.getElementById("myBtn").onclick = function() { alert(Date()); };
</script>
onload 和 onunload 事件会在用户进入或离开页面时被触发。
onchange 事件常结合对输入字段的验证来使用。用户改变输入字段的内容时会调用 upperCase() 函数。
<input type="text" id="fname" onchange="upperCase()">
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，
最后，当完成鼠标点击时，会触发 onclick 事件。
onfocus 当元素获得焦点时，即光标再此

## 事件监听 DOM EventListener
document.getElementById("myBtn").addEventListener("click", funcToCallWhenClicked);
addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。可以用此为一个元素添加多个事件处理函数
element.addEventListener(eventStr, function, useCapture);
removeEventListener("mousemove", myFunction) 方法来移除事件的监听
element.addEventListener("click", function(){ alert("Hello World!"); });

当传递参数值时，使用"匿名函数"调用带参数的函数：
element.addEventListener("click", function(){ myFunction(p1, p2); });

事件传递有两种方式：`冒泡与捕获`。
事件传递定义了元素事件触发的顺序。 
如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
addEventListener(event, function, useCapture);
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。

## HTML DOM 元素 (节点)
创建新的 HTML 元素 (节点) - appendChild()
要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。
var para = document.createElement("p"); 创建 <p> 元素
var node = document.createTextNode("这是一个新的段落。"); 为 <p> 元素创建一个新的文本节点
para.appendChild(node); 将文本节点添加到 <p> 元素中
var element = document.getElementById("div1");
element.appendChild(para); 在一个已存在的元素中添加 p 元素
appendChild() 方法，它用于添加新元素到尾部。
如果我们需要将新元素添加到开始位置，可以使用 insertBefore() 方法

要移除一个元素，你需要知道该元素的父元素
<div id="div1">
<p id="p1">这是一个段落。</p>
</div>
<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>

替换 HTML 元素 - replaceChild()
<div id="div1">
<p id="p1">这是一个段落。</p>
</div>
<script>
var para = document.createElement("p");
var node = document.createTextNode("这是一个新的段落。");
para.appendChild(node);
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>

## HTMLCollection 对象
getElementsByTagName() 方法返回 HTMLCollection 对象。可通过下标访问内部元素
HTMLCollection 对象类似包含 HTML 元素的一个数组。但无数组的方法

## NodeList 对象
NodeList 对象是一个从文档中获取的节点列表 (集合) 。
NodeList 对象类似 HTMLCollection 对象。也有下标
一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。
所有浏览器的 childNodes 属性返回的是 NodeList 对象。
大部分浏览器的 querySelectorAll() 返回 NodeList 对象。

HTMLCollection 元素可以通过 name，id 或索引来获取。
NodeList 只能通过索引来获取。
