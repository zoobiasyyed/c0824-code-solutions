# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

For Create theres Post, for READ theres GET, Update is PUT, Delete is DELETE. It is not required by the server to implement the methods.

- What is Express middleware?

It is a function that fulfills the requested action. Think of it as an array of functions held by the express process

- What is Express middleware useful for?

Express middleware is useful for processing incoming requests, handling tasks like parsing data, authentication, and logging. It also helps manage errors and serve static files, making your app more efficient and organized.

- How do you mount a middleware with an Express application?

you use the app.use() method or the get method, which adds the function to the middleware array. When express gets an HTTP request, it passes it to each function in the array one at a time.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

An Express application passes the req (request) and res (response) objects to your middleware to manage the request/response lifecycle. Additionally, a third argument, next, is passed to signal that the next middleware should be executed.

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
