# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

fetch() can be used to make HTTP requests to a server in React.

- What two things need to be done to properly handle HTTP request errors? Why?

Check for the HTTP response status(response.ok will be true if its in the 200 range) and use a try catch block to handle network errors to ensure errors are properly detected and handled.

ALWAYS CHECK RESPONSE.OK!!!!!!!!!!!!!!!!!!!!!!!!!!

- How can `useEffect` be used to load data for a component?

useEffect is used with a data-fetching function to load data when a component is rendered.

- How do you use `useEffect` to load component data just once when the component mounts?

Pass an empty dependency array [] to useEffect to load data only when the component mounts.

- How do you use `useEffect` to load component data every time the data key changes?

Include the data key in the dependency array of useEffect to reload data whenever the key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

Use libraries like Redux, SWR, or React Query for efficient data fetching and caching in large-scale apps.

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
