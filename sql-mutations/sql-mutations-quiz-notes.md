# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

Create Read, Update, Delete

- How do you add a row to a SQL table?

use Insert into statement with values

- How do you add multiple rows to a SQL table at once?

You would do the same method as before, but use commas to separate the tuples of values

- How do you update rows in a database table?

you use the update statement, if u wanna do multiple columns u can use the set statement

- How do you delete rows from a database table?

Delete statement

- Why is it important to include a `where` clause in your `update` and `delete` statements?

because it will update the values in every row

- How do you accidentally delete or update all rows in a table?

if u dont have a where clause

- How do you get back the modified row without a separate `select` statement?

by using returning statement with the \*

- Why did you get an error when trying to delete certain films?

it says : update or delete on table "films" violates foreign key constraint "film_actor_film_id_fkey" on table "castMembers"

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
