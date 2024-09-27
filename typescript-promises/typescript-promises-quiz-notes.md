# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

the event queue model is where the callback functions are in a waiting queue for when the operation completes. There is a loop in the runtime environment that checks this queue and processes these functions in the order they arrive in, which ensures that the code execution isnt stalling other scripts.

- What are the three states a Promise can be in?

pending, which is the initial state where the promise is neither resolved or rejected.
fulfilled, where the promise has been resolved , and the handlers have been called
rejected, where the promise has been rejected, and the catch handlers will be invoked

- How do you handle the fulfillment of a Promise?

the fulfillment of a promise is done by attaching a .then() method, which will take a callback function that will be called when the promise is resolved

- How do you handle the rejection of a Promise?

the rejection if a promise is handled by attaching a .catch() method, which is used to define a callback that will be executed if the promise is rejected.

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
