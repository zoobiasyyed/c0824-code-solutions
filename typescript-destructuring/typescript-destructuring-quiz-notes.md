# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?

Destructuring allows for more readable code, and allows you to extract multiple properties from objects and arrays and put them into variables

- What is the syntax for `Object` destructuring?

you create a const and after put curly braces, and inside the curly braces you put in the properties you want to pull, and assign it to that object

const { firstName, lastName } = person;

you can also assign different variable names, known as aliasing:

const { firstName: first, lastName: last } = person;

- What is the syntax for `Array` destructuring?

you would create a const, and then after set square brackets with the inside having the variables you want the specific indexes of the array to be, and then assign it to that array:

const [x, y, z] = numbers;

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

it is very similar in syntax, but the creation of object/array literal is creating a new data structure, while the object/array deconstruction is assigning values to a variable.

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
