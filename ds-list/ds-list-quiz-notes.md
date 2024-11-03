# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the List data structure.

a List is a data structure that holds its data in a block of memory, each element is the same size, and are accessibly by index, with the first element being zero.

- What are some examples of when you would use a List?

for situations requiring ordered collections with fast access by index, like managing a sequence of tasks or storing user data in a defined order.

- How do you read an element of a List given its index? What is its time complexity?

Accessing an element by index in a List is done using the index directly, with O(1) time complexity. bc its constant

- How do you add an element into a List at a given index? What is its time complexity?

Inserting an element at a specific index has O(n) time complexity, as it may require shifting other elements. bc its linear

- How do you update an element in a List at a given index? What is its time complexity?

Updating an element at a specific index takes O(1) time complexity since it only involves accessing and changing one value.

- How do you remove an element from a List at a given index? What is its time complexity?

Removing an element at a specified index has O(n) time complexity due to potential shifting of elements to maintain order.

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
