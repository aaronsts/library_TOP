let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == true){
            console.log(`${this.title} by ${this.author}, ${this.pages}, read.`)
            return `${this.title} by ${this.author}, ${this.pages}, read.`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages}, not read.`;
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
        let title = document.createElement('h2');
        bookCard.id = myLibrary[i].title;
        title.textContent = myLibrary[i].title;
        bookCard.appendChild(title);
        container.appendChild(bookCard);
    }
        
}
console.log(myLibrary)
generateLibrary();