let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == 'true'){
            return `Read`;
        } else {
            return `Not read`;
        }; 
    }
}

const thehobbit = new Book('the hobbit', 'J.R.R Tolkien', 297, true);
const rangerApprentice = new Book('Ranger Apprentice', 'Matt Hofman', 310, false)

const generateLibrary = () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement('div');

        // add close button
        let closeButton = document.createElement('button');
        closeButton.id = myLibrary[i].title;
        closeButton.textContent = 'X'
        bookCard.appendChild(closeButton);
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

// update the view if new book is added
const updateLibrary = (myLibrary) => {
    const container = document.querySelector('.container');
    const bookCard = document.createElement('div');
        // add close button
        let closeButton = document.createElement('button');
        closeButton.id = myLibrary[myLibrary.length-1].title;
        closeButton.textContent = 'X'
        bookCard.appendChild(closeButton);
        // add title
        let title = document.createElement('h2');
        title.textContent = myLibrary[myLibrary.length-1].title;
        bookCard.appendChild(title);

        // add author
        let author = document.createElement('h3');
        author.textContent = myLibrary[myLibrary.length-1].author;
        bookCard.appendChild(author);

        // add page count
        let pages = document.createElement('p');
        pages.textContent = myLibrary[myLibrary.length-1].pages;
        bookCard.appendChild(pages);

        // read or not
        let read = document.createElement('p');
        read.textContent = myLibrary[myLibrary.length-1].info();
        bookCard.appendChild(read);

        bookCard.id = myLibrary[myLibrary.length-1].title;
        container.appendChild(bookCard);
}

const submitForm = document.getElementById("submit");

// On click, read the values in the form field and add them to the array.
submitForm.addEventListener('click',(e) => {
    e.preventDefault();
    const titleField = document.getElementById('title');
    const authorField = document.getElementById('author');
    const pagesField = document.getElementById('pages');
    const readField = document.getElementsByName('read');
    let readValue;
    for (let i = 0; i < readField.length; i++){
        if(readField[i].checked){
            readValue = readField[i].value
        }
    }
    addBookToLibrary(titleField.value, authorField.value, pagesField.value, readValue);
    console.group(readValue)
})

const addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read));
    updateLibrary(myLibrary)
    console.log(myLibrary)
}

generateLibrary()


