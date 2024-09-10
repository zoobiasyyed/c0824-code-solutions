# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

it is a property of DOM elements that allows you to access the CSS classes applied to an element

- How do you update the CSS class attribute of an element using JavaScript?

setter functionality: $button.className = 'class1 class2 class3';

if you update the className property, any existing classes on the element will be removed

- What is the `textContent` property of element objects?

It represents the text content of an element, and all of its descendants.

- How do you update the text within an element using JavaScript?

you would use the setter functionality:
'$button.textContent = This is my new text content'

- Is the `event` parameter of an event listener callback always useful?'

not always

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

it would be more complicated

- Why is storing information about a program in variables better than only storing it in the DOM?

because it makes it easier to reference or reuse, especially if we are manipulating said variable

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
