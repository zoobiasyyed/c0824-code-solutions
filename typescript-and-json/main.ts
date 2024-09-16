const books = [
  {
    isbn: '4',
    title: 'Harry Potter and the Half Blood Prince',
    author: 'J.K. Rowling',
  },
  {
    isbn: '6',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
  },
  {
    isbn: '7',
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
  },
];

console.log(books);
console.log(typeof books);

// making JSON string of books

const jsonBooks = JSON.stringify(books);
console.log(jsonBooks);
console.log(typeof jsonBooks);

// creating a string in JSON format

const stringStudent = '{"id" : 5437070, "name" : "Zoobia Syyed"}';
console.log(stringStudent);
console.log(typeof stringStudent);

// using parse

const jsonParse = JSON.parse(stringStudent);
console.log(jsonParse);
console.log(typeof jsonParse);
