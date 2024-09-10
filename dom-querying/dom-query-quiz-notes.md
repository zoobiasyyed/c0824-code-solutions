# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

It allows us to understand what is happening in our code

- What is a "model"?

A tree like representation of the code

- Which "document" is being referred to in the phrase Document Object Model?

The web page

- What is the word "object" referring to in the phrase Document Object Model?

It is referring to the object that exists of all the HTML elements all organized

- What is a DOM Tree?

It is referencing a tree like structure of HTML elements. Each element (like tags, attributes, text) are all nodes on the tree. Things like body, header and div, are all branches and leaves

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector(selector)
getElementbyID

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll(selector)

- Why might you want to assign the return value of a DOM query to a variable?

It allows reusing the elements easier, and also the DOM has to search through all of the HTML so it can find the elements were looking for

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

to ensure the DOM is fully ready before the script executes, preventing errors

- What does `document.querySelector()` take as its argument and what does it return?

takes a CSS selector as its argument and returns the first matching DOM element

- What does `document.querySelectorAll()` take as its argument and what does it return?

It takes in a CSS selector and returns a NodeList of all elements in the document

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
