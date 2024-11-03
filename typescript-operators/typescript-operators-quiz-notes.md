# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& checks for truthy values and || checks for falsy values and they both can be used to compare values.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

short circuit evaluation means that if the result of one evaluation is false, the operator will stop and return the original value of the variable that had that falsy operand. for && and ||, if the short circuit eval happens the second expression after the operator will never happen

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

it is used when variables could be null or undefined, and is a way to set default values. the || operator will return the right hand side operand if the left has ANY falsy value, not just null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

it is an operator that takes three operands: a condition followed by a ?. then an expression that is executed if truthy followed by :, and then the expression to execute if the first expression is falsy.

ex:
function getFee(isMember) {
return isMember ? '$2.00' : '$10.00';
}

- What is the `?.` (optional chaining) operator? When would you use it?

the optional chaining operator is used to access an objects property or calls a function. If the object accessed OR the function called is undefined or null, it will return undefined instead of an error.

ex:
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

the spread syntax allows something iterable, like an array or string, to be expanded in places where 0 or more arguments are expected. the spread syntax establishes the number of propterties of an object, and adds the key-value pairs to the object being created

ex:
function sum(x, y, z) {
return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6

- What data types can be spread into an array? Into an object?

you can spread an array into an object, but not an object into another object

all primitve values can be spread, strings will enumerate its own properties.

- How does spread syntax differ from rest syntax?

it doesnt, but spread expands from an array or properties of an object, while rest collects properties into a single array or object: Spread is used for unpacking, and rest is used for packing.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
