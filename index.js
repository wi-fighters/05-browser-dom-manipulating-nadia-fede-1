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

const ul = document.querySelector("ul");

books.forEach(book => {
  const li = document.createElement("li");
  ul.appendChild(li);
  //reverse name and last name
  const author = book.author;
  console.log(author);
  const splitAuthor = author.split(' '); 
  console.log(splitAuthor.reverse());
  // console.log(arrayOfAuthors.reverse());

  // const author = [...book.author];
  // console.log(author.split(``));
  // console.log(Array.isArray(author))
  // console.log(author.reverse());
  

});

//Display the book details on the page, such as author's name, book title and reading status. The authors' last names should appear first e.g. "Smith, John".
//The book cover should appear above the book details and the image should link to the URL of the book cover. 
//The styling of reading status should be updated depending on whether the book has been read
//Furthermore, the books should be displayed on the page in alphabetical order according to the authors'



