# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

It allows data to be manages by one component but easily shared w multiple components, rather than the parent having to pass it to each of the child components

- What values can be stored in context?

Any value state that needs to be accessible across multiple components without prop drilling

- How do you create context and make it available to the components?

To create and provide context in React, use createContext to define the context and wrap the parent component with a Context.Provider to make its values available.

- How do you access the context values?

by using useContext

- When would you use context? (in addition to the best answer: "rarely")

When u need to share data across many components without prop drilling, especially for global states that dont change frequently

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
