CSS属性 如color : h1 { color: yellow}
CSS属性值 记为<color>， 上面的yellow即是一个<color>，又称为CSS数据类型
这与html中tag相似，但是完全不同的东西

CSS中各种数值数据类型
<integer>	<integer>是一个整数，比如1024或-55。
<number>	<number>表示一个小数——它可能有小数点后面的部分，也可能没有，例如0.255、128或-1.2。
<dimension>	<dimension>是一个<number>，它有一个附加的单位，例如45deg、5s或10px。<dimension>是一个伞形类别，包括<length>、<angle>、<time>和<resolution>类型。
<percentage>	<percentage>表示一些其他值的一部分，例如50%。百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。

长度
最常见的数字类型是<length>，例如10px(像素)或30em。CSS中有两种类型的长度——相对长度和绝对长度
绝对长度单位
以下都是绝对长度单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。

单位	名称	等价换算
cm	厘米	1cm = 96px/2.54
mm	毫米	1mm = 1/10th of 1cm
Q	四分之一毫米	1Q = 1/40th of 1cm
in	英寸	1in = 2.54cm = 96px
pc	十二点活字	1pc = 1/16th of 1in
pt	点	1pt = 1/72th of 1in
px	像素	1px = 1/96th of 1in
惟一一个您经常使用的值，估计就是px(像素)。

相对长度单位
相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小
单位	相对于
em	在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width
ex	字符“x”的高度
ch	数字“0”的宽度
rem	根元素的字体大小
lh	元素的line-height
vw	视窗宽度的1%
vh	视窗高度的1%
vmin	视窗较小尺寸的1%
vmax	视图大尺寸的1%

em和rem是您在从框到文本调整大小时最常遇到的两个相对长度
概括地说，在排版属性中 em 单位的意思是“父元素的字体大小”。带有ems类的每个元素从它们的父元素中获取大小。因此，每一个连续的嵌套级别 每一级 都会 逐渐 变大或缩小或不变

概括地说，rem单位的意思是“根元素的字体大小”。(“根em”的rem标准。)所有的子孙元素都从根据根元素字体大小变换 一次 （如果有rem属性的话）

十六进制RGB值
您可能遇到的下一种颜色值类型是十六进制代码。每个十六进制值由一个散列/磅符号(#)和六个十六进制数字组成，每个十六进制数字都可以取0到f(代表15)之间的16个值中的一个。每对值表示一个通道—红色、绿色和蓝色—并允许我们为每个通道指定256个可用值中的任意一个(16 x 16 = 256)。

RGB值是一个函数—RGB()/rgb() 它有三个参数，表示颜色的红色、绿色和蓝色通道值，与十六进制值的方法非常相似。RGB的不同之处在于，每个通道不是由两个十六进制数字表示的，而是由一个介于0到255之间的十进制数字表示
RGBA颜色——它们的工作方式与RGB颜色完全相同，因此您可以使用任何RGB值，但是有第四个值表示颜色的alpha通道，它控制不透明度 0-1
在颜色上设置alpha通道与使用我们前面看到的opacity属性有一个关键区别。当你使用不透明度opacity时，你让元素和它里面的所有东西都不透明，而使用RGBA颜色只让你指定的颜色不透明。

在某种程度上，现代浏览器得到了更新，从而让rgba() 和rgb() （以及 hsl()和 hsla();见下文）成为彼此的纯别名并作用完全相同

hsl() 函数接受色调、饱和度和亮度值作为参数，而不是红色、绿色和蓝色值
色调： 颜色的底色。这个值在0和360之间，表示色轮周围的角度。
饱和度： 颜色有多饱和？ 它的值为0 - 100%，其中0为无颜色(它将显示为灰色阴影)，100%为全色饱和度
亮度：颜色有多亮？ 它从0 - 100%中获取一个值，其中0表示没有光(它将完全显示为黑色)，100%表示完全亮(它将完全显示为白色)
hsla()可指定alpha通道，但其实hsl和hsla函数功能，参数完全相同，可以互换。

<image> 数据类型用于图像为有效值的任何地方。它可以是一个通过 url()函数指向的实际图像文件，也可以是一个渐变，如linear-gradient(90deg, rgba(119,0,255,1) 39%, rgba(0,212,255,1) 100%)

<position> 数据类型表示一组2D坐标，用于定位一个元素，如背景图像(通过 background-position)。它可以使用关键字(如 top, left, bottom, right, 以及center )将元素与2D框的特定边界对齐，以及表示框的顶部和左侧边缘偏移量的长度。

一个典型的位置值由两个值组成——第一个值水平地设置位置，第二个值垂直地设置位置。如果只指定一个轴的值，另一个轴将默认为 center，参数为一个长度数值的话，放在第一个参数表示距左边left的距离
第二个参数表示距top的距离