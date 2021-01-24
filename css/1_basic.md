CSS 是用来指定文档如何展示给用户的一门语言——如网页的样式、布局、等等。<br/>
CSS是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则

语法由一个 选择器(selector)起头。 它 选择(selects) 了我们将要用来添加样式的 HTML 元素
接着输入一对大括号{ }。 在大括号内部定义一个或多个形式为 属性(property):值(value); 的 声明
(declarations)。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

有三种方式可以将css应用到html上<br/>
1.外部样式表for now, we will look at the most usual and useful way of doing so — 
linking CSS from the head of your document.
2.内部样式表是指不使用外部CSS文件，而是将CSS放在HTML文件<head>标签里的<style>标签之中。
3.内联样式表存在于HTML元素的style属性之中。其特点是每个CSS表只影响一个元素

To link styles.css to index.html add the following line somewhere inside the head> of the HTML document<br/>
`<link rel="stylesheet" href="styles.css">`<br/>

You can target multiple selectors at once, by separating the selectors with a comma

有时候我们只需要选中部分元素 The most common way to do this is to add a class to your HTML element and target that class.<br/>
使用 .class_value 来选中含有特定class的元素
p.hello 选中所有含有hello这个class值的p元素 
this syntax means target any p element that has a class of hello

To select only an <em> that is nested inside an <li> element I can use a selector called the descendant combinator, which takes the form of a space between two other selectors.<br/>

+加号可选择同一层级的元素，即兄弟节点 如h1 + p {font-size: 200%;}选择与h1同级的p元素并apply css
<br/>
Styling things based on state

/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }
/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }<br/>

CSS语言有规则来控制在发生矛盾时哪条规则将获胜--这些规则称为级联规则和专用规则。在下面的代码块中，我们为p选择器定义了两个规则，但是段落最后是蓝色的。这是因为将其设置为蓝色的声明将出现在样式表的后面，而稍后的样式将覆盖以前的样式。这就是起作用的级联。p { color: red;} p {color: blue;}
使用类选择器和元素选择器的块中，类将获胜--即使它出现在样式表的前面。一个类被描述为比元素选择器更具体，或者具有更多的特异性，所以它获胜了。这就是具体性

如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的CSS引擎完全忽略。

到目前为止，我们还没有遇到 @rules (pronounced "at-rules"). 这是一些特殊的规则，为 CSS提供了一些关于如何表现的指导。 有些@rules 规则很简单，有规则名和值。例如，要将额外的样式表导入主CSS样式表，可以使用@import

css选择器
元素、类和ID选择器 h1{}, .class{},  #id{}
标签属性选择器
这组选择器根据一个元素上的某个标签tag的属性property的存在以选择元素的不同方式：
a[title] {}
或者根据一个有特定值的标签属性是否存在来选择：
a[href="https://example.com"] { }

伪类与伪元素
这组选择器包含了伪类，用来样式化一个元素的特定状态。例如:hover伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素 a:hover {}

它还可以包含了伪元素，选择一个元素的某个部分而不是元素自己。例如，::first-line是会选择一个元素（下面的情况中是p>）中的第一行 p::first-line {}

选择器	示例	学习CSS的教程
类型选择器	h1 {  }	类型选择器
通配选择器	* {  }	通配选择器
类选择器	.box {  }	类选择器
ID选择器	#unique { }	ID选择器
标签属性选择器	a[title] {  }	标签属性选择器
伪类选择器	p:first-child { }	伪类
伪元素选择器	p::first-line { }	伪元素
后代选择器	article p	后代运算符
子代选择器	article > p	子代选择器
相邻兄弟选择器	h1 + p	相邻兄弟
通用兄弟选择器	h1 ~ p	通用兄弟