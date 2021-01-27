 text inside an element is laid out inside the element's content box

 The CSS properties used to style text generally fall into two categories
### Font styles: 
Properties that affect the font that is applied to the text, affecting what font is applied, how big it is, whether it is bold, italic, etc.
### Text layout styles: 
Properties that affect the spacing and other layout features of the text, allowing manipulation of, for example, the space between lines and letters, and how the text is aligned within the content box.

## color
The color property sets the color of the foreground content of the selected elements (which is usually the text, but can also include a couple of other things, such as an underline or overline placed on text using the text-decoration property

## font-family
To set a different font on your text, you use the font-family property — this allows you to specify a font (or list of fonts) for the browser to apply to the selected elements. The browser will only apply a font if it is available on the machine the website is being accessed on

Specifies a `prioritized` list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.

Font names that have more than one word — like Trebuchet MS — need to be surrounded by quotes, for example "Trebuchet MS"

## Font-sie
The font-size of an element is `inherited` from that element's parent element. This all starts with the root element of the entire document — <html> — the font-size of which is set to `16px` as standard across browsers

`rems`: These work just like em, except that 1 rem is equal to the font size set on the root element of the document (i.e. <html> which has a font size of `16px`), not the parent element.
It is best to use rem where you can, to keep things simple, and avoid setting the font-size of container elements where possible.

When sizing your text, it is usually a good idea to set the base font-size of the document to 10 px, so that then the maths is a lot easier to work out — required (r)em values are then the pixel font size divided by 10

`font-weight`: Sets how bold the text is
such as -light, -normal, -bold, -extrabold, -black, etc.but realistically you'll rarely use any of them except for normal and bold

`text-transform`: Allows you to set your font to be transformed. Values include:
none: Prevents any transformation.
uppercase: Transforms ALL TEXT TO CAPITALS.
lowercase: Transforms all text to lower case.
capitalize: Transforms all words to Have The First Letter Capitalized.
full-width: Transforms all glyphs to be written inside a fixed-width square,

`text-decoration`: Sets/unsets text decorations on fonts (you'll mainly use this to unset the default underline on links when styling them.) Available values are:
none: Unsets any text decorations already present.
underline: Underlines the text.
overline: Gives the text an overline.
line-through: Puts a strike through（删除线） over the text.
You should note that text-decoration can accept `multiple` values at once

You can apply drop shadows to your text using the `text-shadow` property. This takes up to four values, which give the horizontal offset and vertical offsetof  the shadow from the original text, the blur(模糊) radius and the base color of the shadow.
You can apply multiple shadows to the same text by including multiple shadow values separated by commas（逗号）

The `text-align` property is used to control how text is aligned within its containing content box. The available values are as follows, and work in pretty much the same way as they do in a regular word processor application:
left: Left-justifies(向左对齐) the text.
right: Right-justifies the text.
center: Centers the text.

The `line-height` property sets the height of each line of text — this can take most length and size units, but can also take a unitless(无单位) value, which acts as a multiplier and is generally considered the best option — the font-size is `multiplied` to get the line-height

The `letter-spacing` and `word-spacing` properties allow you to set the spacing between letters and words in your text. You won't use these very often, but might find a use for them to get a certain look, or to improve the legibility of a particularly dense font

Many font properties can also be set through the `shorthand property font`. These are written in the following order:  font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family.
Among all those properties, only font-size and font-family are required when using the font shorthand property.
A forward slash(斜杠/) has to be put in between the font-size and line-height properties.