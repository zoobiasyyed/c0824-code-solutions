# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

Event.target refers to the element that is responsible for firing the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

Because of event bubbling, even if the event is on the descendent elements, it will trigger the document to go down the DOM tree to find where the event occurs, and then bubble its way back up

- What DOM element property tells you what type of element it is?

type assertion (saying 'as a HTML_Element')

- What does the `element.closest()` method take as its argument and what does it return?

It takes in a string of any valid CSS selector and returns the closest ancestor element or itself.

- How can you remove an element from the DOM?

by using the remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

by applying it to the parent

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
