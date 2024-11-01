// creating an interface

interface Book {
  title: string;
  author: string;
  libraryId: number;
}

const book1: Book = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};

// const { firstName, lastName } = person;

const { title, author, libraryId } = book1;

console.log(
  'the title of the book is' +
    `${title}` +
    ', the author is ' +
    `${author}` +
    ', and the library id is ' +
    `${libraryId}`
);

const book2: Book = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};

const { title: title2, author: author2, libraryId: libraryId2 } = book2;

console.log(
  'the title of the book is' +
    `${title2}` +
    ', the author is ' +
    `${author2}` +
    ', and the library id is ' +
    `${libraryId2}`
);

// creating array of objects
const library: Book[] = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];

const [book3, book4, book5] = library;

// const { firstName, lastName } = person;

console.log(book3);

console.log(book4);

console.log(book5);

// destructure last object

const [, , , book6] = library;

console.log(book6);
