JSON 是一种按照JavaScript对象语法的数据格式
JSON可以作为一个对象或者字符串存在，前者用于解读 JSON 中的数据，后者用于通过网络传输 JSON 数据
一个 JSON 对象可以被储存在它自己的文件中，这基本上就是一个文本文件，扩展名为 .json， 还有 MIME type 用于 application/json.
(MIME type （现在称为“媒体类型(media type)”，但有时也是“内容类型(content type)”）是指示文件类型的字符串，与文件一起发送（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png ）。它与传统Windows上的文件扩展名有相同目的。)


1.JSON 是一种纯数据格式，它只包含属性，没有方法。
2.JSON要求在字符串和属性名称周围使用`双引号`。 单引号无效。
3.甚至一个错位的逗号或分号就可以导致  JSON 文件出错。您应该小心的检查您想使用的数据(虽然计算机生成的 JSON 很少出错，只要生成程序正常工作)。您可以通过像 JSONLint 的应用程序来检验 JSON。
4.JSON 可以将任何标准合法的 JSON 数据格式化保存，不只是数组和对象。比如，一个单一的字符串或者数字可以是合法的 JSON 对象。虽然不是特别有用处……
5.与 JavaScript 代码中对象属性可以不加引号不同，JSON 中只有带引号的字符串可以用作属性。

为了载入 JSON 到页面中，我们将使用 一个名为XMLHTTPRequest的API（常称为XHR）。这是一个非常有用的 JavaScript 对象，使我们能够通过url来向服务器请求资源文件(如：图片，文本，JSON，甚至HTML片段)
var request = new XMLHttpRequest();
request.open('GET', requestURL);
我们设定 responseType 为 JSON，所以服务器将知道我们想要返回一个 JSON 对象，然后发送请求 :
request.responseType = 'json';
request.send();//发送请求
request.response返回获得的内容
request.onload = function() {} 请求资源加载完毕时调用函数
我们把代码包在事件处理函数中，当请求对象load事件触发时执行代码(见onload)，这是因为请求对象load事件只有在请求成功时触发；这种方式可以保证事件触发时 request.response 是绝对可以访问的。

`JSON.parse()`: 以文本字符串形式接受JSON格式字符串作为参数，并返回相应的对象。
`JSON.stringify()`: 接收一个对象作为参数，返回一个对应的JSON字符串。
