# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

It is used to create modal and non-modal dialog boxes, Modals interupt interaction, while nonmodal dialog boxes do not

- How do you show and hide a modal dialog?

you could use the show() and close() method

- How do you manipulate child components in React? Why will that not work for the `<dialog>` element?

to manipulate child components, u usually use props and state, but that doesnt work for dialog, because it has its own methods that control its behavior, so u have to use showModal and close methods with ref,

- How do you call the dialog element's functions in React?

use the useRef hook.

- How can you render nested components or JSX elements in React?

you would have to use the {children} prop

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
