cascade
css规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则,覆盖前面

继承也需要在上下文中去理解 —— 一些设置在父元素上的css属性是可以被子元素继承的，有些则不能。
如果你设置一个元素的 color 和 font-family ，每个在里面的元素也都会有相同的属性，
除非你直接在元素上设置属性
如body{ color: blue;} 会将body中所有内容设为蓝色，除非它们有更具体的设置
一些属性是不能继承的,如 width 50% margins, padding, 和 borders
 哪些属性属于默认继承很大程度上是由常识决定的。<br/>

 CSS 为控制继承提供了四个特殊的通用属性值。每个css规则中属性都接收这些值。

inherit
设置该属性会使子元素属性和父元素相同。实际上，就是 "开启继承".
initial
设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 inherit 。
unset
将属性重置为自然值，也就是如果属性是自然继承那么就是 inherit，否则和 initial一样
注: 还有一个新的属性, revert， 只有很少的浏览器支持。

CSS 的属性 all 可以用于同时将这些继承值inherit, initial, unset, or revert中的一个应用于（几乎）所有属性。Shorthand that resets all properties except 'direction' and 'unicode-bidi'.
<br/>

一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：

千位： 声明在 style 的属性（内联样式）。这样的声明没有选择器，所以它得分总是1000。
百位： 选择器中包含ID选择器
十位： 选择器中包含类选择器、属性选择器或者伪类。
个位：选择器中包含元素、伪元素选择器

通用选择器 (*)，组合符 (+, >, ~, ' ')，和否定伪类 (:not) 不会影响优先级。

在进行计算时不允许进行进位 无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。