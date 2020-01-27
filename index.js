const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

//first create 4 li items (one for each book)

// creating a new array with the img, title, and inverted name of the author

let changedAuthor = books.map(book => {
  let bookAuthor = book.author.split(' '); 
  book.author = bookAuthor.reverse().join(",");
  // console.log(book);
  return book
});

// ordering alphabetically according to the last name of the author

let sortedBooks = changedAuthor.sort((a,b) => {
  if(a.author.charAt(0) > b.author.charAt(0)) {
    return 1
  } else {
    return -1
  }
});
// console.log(SortedBooks);

const ul = document.querySelector("ul");

sortedBooks.forEach(book => {
  const li = document.createElement("li");
  ul.appendChild(li);
  // name and last name of the author
  const h2 = document.createElement("h2");
  const title = book.title;
  h2.textContent = book.title
  li.appendChild(h2);
  
  
  

  // create img element and set the attibute
  const img = document.createElement("img");
  img.setAttribute("src", book.img);

  const h3 = document.createElement("h3");
  h3.textContent = book.author
  li.appendChild(h3);
  
  
  // name and last name put into one array separated 
 

  // text for read or to be read part
  const p = document.createElement("p");
  if (book.alreadyRead === true) {
    const readOrNotRead = document.createTextNode("Read")
    p.appendChild(readOrNotRead);
  } else {
    const readOrNotRead = document.createTextNode("To read")
    p.appendChild(readOrNotRead);
  }

  li.appendChild(img);
  li.appendChild(p);



});

//Display the book details on the page, such as author's name, book title and reading status. The authors' last names should appear first e.g. "Smith, John".
//The book cover should appear above the book details and the image should link to the URL of the book cover. 
//The styling of reading status should be updated depending on whether the book has been read
//Furthermore, the books should be displayed on the page in alphabetical order according to the authors'



