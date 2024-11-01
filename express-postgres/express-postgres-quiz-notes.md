# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

used to interact with PostgreSQL databases. It provides tools for connecting to a PostgreSQL server, executing SQL queries, and managing database operations efficiently.

- How do you tell `pg` which database to connect to?

you do pg.client

- How do you send SQL to PostgreSQL from your Express server?

You send SQL to PostgreSQL from your Express server using the pg package by executing queries through a Client or Pool instance, like pool.query('YOUR_SQL_QUERY').

- How do you access the rows that get returned from the SQL query?

You access the rows returned from an SQL query using the rows property of the result object, like this: const result = await pool.query('YOUR_SQL_QUERY'); console.log(result.rows);.

- What must you always remember to put around your asynchronous route handlers? Why?

You must always remember to put try-catch blocks around your asynchronous route handlers to catch and handle errors properly, ensuring they don't crash your server and that errors are passed to the next middleware for consistent error handling.

- What is a SQL Injection Attack and how do you avoid it in `pg`?

A SQL Injection Attack occurs when harmful SQL code is inserted into a query to exploit or manipulate the database, and you can prevent it in pg by using parameterized queries for user input and passing the input separately to ensure it is handled safely.

In summary, you insert the string $N (where N is an integer, e.g., $1, $2, etc.) into your SQL where you want to insert the values, and you provide an array of values to substitute as the second argument to db.query(). The values in the array must line up with the $N strings: $1 will be replaced by the first value in the array, $2 by the second, and so on.

💀 NEVER EVER just put user inputs directly into your query with string concatenation or template literals 💀.

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
