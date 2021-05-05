let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == true){
            return `Read`;
        } else {
            return `Not read`;
        }; 
    }
}

const thehobbit = new Book('the hobbit', 'J.R.R Tolkien', 297, true);
const rangerApprentice = new Book('Ranger Apprentice', 'Matt Hofman', 310, false)

const addBookToLibrary = (book) => {
    myLibrary.push(book);
}
addBookToLibrary(thehobbit);
addBookToLibrary(rangerApprentice)

const generateLibrary = () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement('div');
        // add title
        let title = document.createElement('h2');
        title.textContent = myLibrary[i].title;
        bookCard.appendChild(title);

        // add author
        let author = document.createElement('h3');
        author.textContent = myLibrary[i].author;
        bookCard.appendChild(author);

        // add page count
        let pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;
        bookCard.appendChild(pages);

        // read or not
        let read = document.createElement('p');
        read.textContent = myLibrary[i].info();
        bookCard.appendChild(read);

        bookCard.id = myLibrary[i].title;
        container.appendChild(bookCard);
    }
        
}

const formElem = document.querySelector('form');
formElem.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default behaviour from submitting a form
    // create new object
    new FormData(formElem);
    // create new book instance
    let test = new Book(formElem[0].value, formElem[1].value, formElem[2].value, formElem[3].value)
    addBookToLibrary(test);
})
console.log(myLibrary)
generateLibrary();