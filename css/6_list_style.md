When styling lists, you need to adjust their styles so they keep the same vertical spacing as their surrounding elements (such as paragraphs and images; sometimes called vertical rhythm), and the same horizontal spacing as each other

## List-specific styles
There are three properties you should know about to start with, which can be set on <ul> or <ol> elements:

`list-style-type`: Sets the type of bullets(列表符号) to use for the list, for example, square or circle bullets for an unordered list, or numbers, letters or roman numerals for an ordered list.
`list-style-position`: Sets whether the bullets appear inside the list items, or outside them before the start of each item.
`list-style-image`: Allows you to use a custom image for the bullet, rather than a simple square or circle.

list-style shorthand  `list-style`: square url(example.png) inside;  
set the type,image,position of the marker
The values can be listed `in any order`, and you can use one, two or all three (the default values used for the properties that are not included are disc, none, and outside).

## Controlling list counting
The `start` attribute allows you to start the list counting from a number other than 1
The `reversed` attribute will start the list counting down instead of up
The `value` attribute allows you to set your list items to specific numerical values
ol有start且 其中有li中有value时，没有遇到value的li都会按顺序用start的值（start不是数值则按默认编号）
遇到li中有value 且value为数字时之后都用value值
<ol start='4' reversed> 
<li value="hi"></li>
</ol>