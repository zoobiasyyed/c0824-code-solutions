# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.

It is a data structure that holds its data in a tree. the root is at the top, and the children beneath it. Each node can have at most two children. they must be orderable (compare them smallest to largest), and they are ordered in a wat that the left subtree of a node must be less that the current node, while every right subtree must be greater than

- What are some examples of when you would use a Binary Search Tree?

they allow binary search for fast lookup, addition, and removal of data items.

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?

by comparing values at each node until the element is found or a null reference is reached; time complexity is O(log n) for a balanced tree and O(n) for an unbalanced tree.

- How do you add an element into a Binary Search Tree? What is its time complexity?

insert the element by finding the appropriate position through comparison with each node, going left or right accordingly; time complexity is O(log n) for a balanced tree and O(n) for an unbalanced tree.

- How do you remove an element from a Binary Search Tree? What is its time complexity?

Locate the element, then restructure the tree as needed (by finding a successor or predecessor if necessary) to maintain the BST properties; time complexity is O(log n) for a balanced tree and O(n) for an unbalanced tree.

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
