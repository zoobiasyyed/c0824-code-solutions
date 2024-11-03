# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Hooks are functions that are used for controlling states in React, allowing components to store data between re-renders. They allow components to have access and add state to a component, that will persist across components calls and can be used to schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

start witht he phase user and has to have a capital letter
can be called from a component or hook
must be called in the same order
You must call them at the top level in the body of a function component. They CAN NOT be used inside loops or conitionals, event handlers, try/catch blocks, etc.

- What is the purpose of state in React?

A state in react is the components memory, data that is saved to modify the output. it allows react to create components that have the ability to respond to user input and update what is being displayed to the DOM

- Why can't we just maintain state in a local variable?

because everytime the components rerender, the data stored in the local storage is removed, so no data is being saved

- What two actions happen when you call a `state setter` function?

the state updates with the new value, and the component re-renders to reflect the update

- When does the local `state variable` get updated with the new value?

it will be updated not after the setter function, but until the component is rerendered.

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
