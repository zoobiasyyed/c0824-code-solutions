# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?

With controlled components, the controlled form sets each input value in the state, and sets the value of each input on each rerender. Every update on the state will be reflected on other input values.
Uncontrolled does not save the input values in the react state, but instead uses the form function in HTML. state is not used at all actually in this

- What are some advantages of using uncontrolled components?

there is much less boilerplate, especially with more complex forms. and when frequent rerenders are unnecessary

- What are some advantages of using controlled components?

the advantage of using uncontrolled is that it has a easier validation and input handling, and gives more options in the React logic. It also gives synchronized updated for the controlled components, because everytime you updated something it rerenders all components.

- Which style do you prefer?

I think right now the uncontrolled sounds much more simple to me

- What two props must you pass to an input for it to be "controlled"?

the value and onChange prop

- What are some popular npm packages for creating forms in React?

React Hook Form, Formik, and React Final Form are a few.

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
