# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

We log things to our code because it allows us to see the progress and results of our code, as well as any errors that may occur

- What is the purpose of events and event handling?

events are interactive actions that happen in the browser. Evently handling is the code used to attach events to certain variables

- Are all possible parameters required to use a JavaScript method or function?

No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

the addEventListener Method

- What is a callback function?

A callback function is a function passed into another function as an argument. Used to respond to events triggered by user interactions or other asynchronous actions

- What object is passed into an event listener callback when the event fires?

event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The event target is referring to the element that is responsible for firing the event. If we need more information, we can just log the event.target and it will tell us

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

The first snippit, the second argument being passed is referencing a function handleClick that already exists, and the second snippet the second argument is calling a function within the addEventListener method.

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
