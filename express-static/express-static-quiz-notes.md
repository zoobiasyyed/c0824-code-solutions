# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?

The purpose of the Express Static middleware is to serve static files (like HTML, CSS, images, and JavaScript) from a specified directory.

It simplifies the process of making these files accessible to the client, so when a user requests a file (like an image or a stylesheet), the middleware efficiently handles and delivers it without you needing to write custom code for each file.

- What does `express.static()` return?

returns a middleware function that serves static files, such as HTML, images, CSS, or JavaScript, from a specified directory.

ex: app.use(express.static('public'));

In this example, express.static('public') creates middleware that serves files from the public directory. If a request is made for /image.jpg, the middleware will look for image.jpg in the public folder and serve it if found.

- What are several examples of static files?

HTML, CSS, JS, Images, Fonts, etc

Static files are called "static" because they do not change based on user input or server-side logic; they remain the same until explicitly updated.

- What is a good way to serve application images using Express?

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
