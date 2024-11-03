# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

A foreign key is a attribute in one table that links to the primary key in another table, which creates a relationship between the two tables

- How do you join two SQL tables? (Provide at least two syntaxes.)

you can do join/using if the primary key and foreign key are the same name, if not then u have to use join "table" on "products".primaryId = suppliers.primaryId

- How do you temporarily rename columns or tables in a SQL statement?

you could alias the column names, so u could do select product.name as product

- How do you create a one-to-many relationship between two tables?

you add the foreign key in the table on the many side that references the primary key of the table on one side.

- How do you create a many-to-many relationship between two tables?

you would need a join table that includes foreign keys referencing primary keys of each table.

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
