# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

fetch returns a promise. this promise is resolved eventually to the promise object, which represents the outcome of the request

- What is the default request method used by `fetch()`?

the default request method is GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

by passing a second argument, and object, with the method as the key and the request method as the value.

- How does `fetch` report errors?

fetch considers promises resolved even if there is an error, and it is only rejected if there is network failures. the way to handle errors is to use the response.ok method to check to see if the status code of the eroor is outside the 200-299(success) range.

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
