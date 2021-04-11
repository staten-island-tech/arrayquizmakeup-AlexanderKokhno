const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//////////////////////////////////////////

const authors = [
  "Harper Lee wrote To Kill a Mockingbird in 1960",
  "F. Scott Fitzgerald wrote The Great Gatsby in 1925",
  "JRR Tolkien wrote The Hobbit in 1937",
  "JK Rowling wrote Harry Potter & the Deathly Hallows in 1997",
  "James Joyce wrote Ulysses in 1918",
  "Leo Tolstoy wrote War & Peace in 1867",
  "Jane Austen wrote Pride & Prejudice in 1813",
  "JD Salinger wrote The Catcher in the Rye in 1951",
  "Charles Dickens wrote Great Expectations in 1861",
  "Lousina May Alcott wrote Little Women in 1868",
];



const sortedDate = books.sort((c1, c2) => (c1.publishDate > c2.publishDate) ? 1 : (c1.publishDate < c2.publishDate) ? -1 : 0);
console.log(sortedDate);

let booksCopy = JSON.parse(JSON.stringify(books))
booksCopy.sort((a, b) => a.name.localeCompare(b.name));
console.log(booksCopy);
//and this took me like 2 hours to figure out. (how to get the second .sort() to stop overriding the 1st .sort()   lol.)

let wroteWP = books.find(books => books.name === "War and Peace");
console.log(wroteWP);

let before1900 = books.filter(books => books.publishDate < "1900");
//took me only like 3 hours of googling to write lol. This was the first thing I did. Why? IDK. 
console.log(before1900);

let within100 = books.some(books => books.publishDate >= 1921);
console.log(within100);

let every100 = books.every(books => books.publishDate >= 1921);
console.log(every100);


/////////////////////////////////////

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//sort books alphabetically

//Find who wrote War and Peace

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

//was every book published within the last 100 years?
