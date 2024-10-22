# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?

scope is determined at the time the code is written, based on where variables and functions are declared

- What allows JavaScript functions to "remember" variables from their surroundings?

they remember variables from their surroundings due to closures

- What values does a closure contain?

contained the function along with variables from the outer scope

- When is a closure created?

it is created when a function is defined inside another function and references variables from the outer functions scope

- How can you tell if a function will be created with a closure?

if it accesses variables from an outer function

- In React, what is one important case where you need to know if a closure was created?

closures are important to consider in useEffect or event handlers to avoid causing infinite renders.

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
