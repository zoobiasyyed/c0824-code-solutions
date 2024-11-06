# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

With async and await, the code is read sequentially. The await keyword is used when the JS runtime should wait until the asynchronous function completes.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

with promise.then or catch, carefully handling errors was still a challenge. async and await provide a more readable and synchronous-looking syntax for the same task. With .then() and .catch(), you must chain callbacks and handle errors at each stage, making it harder to manage complex asynchronous workflows.

- When do you use `async`?

Async is used when working with asynchronous promise-based code. Each time an async function is called, it returns a new promise which will be resolved or rejected

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

await expression make the promise returning await function behave like it is synchronous. it will stop execution until the promise is returned or rejected. it must be used inside the await function. you should not use await for synchronous functions because they don’t return promises, and it will block the code

- How do you handle errors with `await`?

To handle errors with await, you can wrap your asynchronous code in a try...catch block. If the promise is rejected, the control is transferred to the catch block where you can handle the error

- What do `try`, `catch` and `throw` do? When do you use them?

try: The try block lets you execute code that might throw an error. If an error occurs, control is passed to the catch block.
catch: The catch block is used to handle any error that occurs in the try block.
throw: The throw keyword is used to manually throw an error, which can be caught in a catch block.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

the promise will still be executed, but the function will return the unresolved promise itself rather than the resolved value. This means that errors might not get caught

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async and wait, bc its easier to read and makes more logical sense

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
