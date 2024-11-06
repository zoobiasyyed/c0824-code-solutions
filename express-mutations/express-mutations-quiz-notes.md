# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?

It specifies the type of action the client wants to perform on the server

- What is the significance of an HTTP response's status?

It indicates the result of the client's request, such as 200 for success or 404 for not found.

- What does the express.json() middleware do and when would you need it?

This is a built-in middleware function in Express. It parses incoming requests with JSON information. it allows us to handle json data in express

it looks at the headers, looking for application/json, need it to be that
then it grabs the body from the request, calls json.parse, gets an obj, and assigns it to req.body

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
