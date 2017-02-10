### Array

##### Array.prototype.forEach

`Array.forEach` Executes a provided function once per array element
```js
arr.forEach(callback(value, index, array), [thisArg])
```

##### Array.prototype.contains

`Array.contains` Does an array contain a needle?
```js
arr.contains(needle)
```

##### Array.prototype.find
`Array.find` Returns a value in the array that matches the provided test function
```js
arr.find(callback(value, index, array), [thisArg])
```

##### Array.prototype.findIndex
`Array.findIndex` Returns an index in the array that matches the provided test function
```js
arr.findIndex(callback(value, index, array), [thisArg])
```

##### Array.prototype.every
`Array.every` Tests if all elements in the array pass the test function and returns a boolean result
```js
arr.every(callback(value, index, array), [thisArg])
```

##### Array.prototype.pushUnique

`Array.pushUnique` Push a element only if it is unique in the array
```js
arr.pushUnique(element)
```

### String

##### String.prototype.startsWith

`String.startsWith` Does the string start with the neelde?
```js
str.startsWith(needle)
```

##### String.prototype.endsWith

`String.endsWith` Does the string end with the neelde?
```js
str.endsWith(needle)
```

##### String.prototype.includes

`String.includes` Determine is the stirng includes the needle
```js
str.includes(needle, [position])
```

##### String.prototype.toCamelCase

`String.toCamelCase` Converts a string to camel case
```js
str.toCamelCase()
```

### Element

##### Element.prototype.hide

`Element.hide` Hides a DOM element
```js
el.hide()
```

##### Element.prototype.show

`Element.show` Shows a hidden DOM element
```js
el.show()
```

##### Element.prototype.hasClass

`Element.hasClass` Does a DOM element have the CSS class?
```js
el.hasClass(className)
```

##### Element.prototype.addClass

`Element.addClass` Add a CSS class to the DOM element 
```js
el.addClass(className)
```

##### Element.prototype.removeClass

`Element.removeClass` Remove a CSS class from the DOM element 
```js
el.removeClass(className)
```

##### Element.prototype.toggleClass

`Element.toggleClass` Toggle a CSS class on the DOM element 
```js
el.toggleClass(className)
```

##### Element.prototype.clear

`Element.clear` Clears the DOM element of nodes
```js
el.clear()
```

##### Element.prototype.attr

`Element.attr` Gets the attribute value of the DOM element
```js
el.attr(attrName)
```

`Element.attr` Sets the attribute value of the DOM element
```js
el.attr(attrName, attrVal)
```

`Element.attr` Sets the attributes of the DOM element
```js
el.attr({attrName: attrVal})
```

##### Element.prototype.css

`Element.css` Gets the value of a DOM element's CSS declaration
```js
el.css(declaration)
```

`Element.css` Sets the CSS declaration value of the DOM element
```js
el.css(declaration, value)
```

`Element.css` Sets the CSS declarations of the DOM element
```js
el.css({declaration: value})
```

##### Element.prototype.val

`Element.val` Gets the value of DOM element
```js
el.val()
```

`Element.val` Sets the value of DOM element
```js
el.val(value)
```

### Shorthand

##### $

Shorthand for querySelector
```js
$(selector, [element])
```

##### $$

Shorthand for querySelectorAll
```js
$$(selector, [element])
```