# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.

a hash table is a data structure that stores data as key/value pairs. it gets its name from the operation used to look up an item in the table. it stores the keys in a list (buckets) to locate an item, the key is hashed, which means that a calculation is performed on it that reduces the key to a number between 0 and the size of the list, and then that value is used as an index into the bucket list to find the item.

- What are some examples of when you would use a Hash Table?

used to look things up fast, like in databases

- How do you read a key's value in a Hash Table? What is its time complexity?

you can access the key directly using hashing,using .get() with a time complexity of O(1)

- How do you add a key/value into a Hash Table? What is its time complexity?

you can insert a key/value pair by accessing the key by hashing the key and storing the value, by using the set() method with a time complexity of O(1). you would use the map method

- How do you update a key's value in a Hash Table? What is its time complexity?

you can locate the key adn overwrite the value, u use the .set() method with a time complexity of O(1)

- How do you remove a key/value from a Hash Table? What is its time complexity?

Locate the key and delete the entry, using the .delete() method with a time complexity of O(1).

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
