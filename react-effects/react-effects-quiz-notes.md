# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

when creatRoot is called, and then calling the render method with the component

- What is a React Effect?

A react Effect lets you specify "side effects", which change the programs state, that are caused by rendering itself, rather than an event.
example: sending a message in the chat is an event because it is directly caused by the user clicking a button, but setting up a server connevtion is an effect bc it should happen no matter which interaction caused the component to appear

- When should you use an Effect and when should you not use an Effect?

you should use effect when you want to synchronize the React components with an external system, like an API or network

- When do Effects run?

They run at the end of a commit, after the screen updates

- What function is used to declare an Effect?

the useEffect(() =>) function is put at the top level of the component. the code inside this function will run after every rerender.

in other words, it delays a piece of code from running until that render is reflected on the screen

- What are Effect dependencies and how do you declare them?

by default, Effect runs after every render, which is not what you want.
you can tell React to skip unnecessary re-renderings of the Effect, by specifying an array of dependencies,

anything that is declared outside your useEffect

ex: useEffect(() => {
// ...
}, []);

it would be done within the array

whatever the Effect is depending on, will go inside the array of dependencies
React will only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render.

- Why would you want to clean up from an Effect?

a cleanup function might be necessary to stop ur effect from mounting more than once.
use effect is interacting w operating system by allocating timer, in your clean up, ur getting rid of the memory

- How do you clean up from an Effect?

this goes after the code under useEffect()

return () => {
connection.disconnect();
};

- When does the cleanup function run?

React calls the cleanup function each time before the Effect runs again, and then one final time when the component unmounts.

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
