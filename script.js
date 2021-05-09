let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == 'true'){
            return `read`;
        } else {
            return `not read`;
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

        // read or not\
        let readLabel = document.createElement('label')
        let readToggle = document.createElement('input');
        readToggle = document.createAttribute('type');
        readToggle.setAttribute('type', 'checkbox');
        let readSpan = document.createElement('span');
    
        bookCard.appendChild(readLabel);
        bookCard.appendChild(readToggle);
        bookCard.appendChild(readSpan);

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
        closeButton.id = myLibrary[myLibrary.length-1].title+'-btn';
        closeButton.setAttribute('onclick', 'deleteCard(this)')
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
        let readLabel = document.createElement('label')
        let readToggle = document.createElement('input');
        readToggle.setAttribute('type', 'checkbox');
        console.log(myLibrary[myLibrary.length-1].info());
        if (myLibrary[myLibrary.length-1].info() == 'read'){
            readToggle.checked = true;
        } else {
            readToggle.checked = false;
        }
        let readSpan = document.createElement('span');

        // add classes
        readLabel.classList.add('switch');
        readSpan.classList.add('slider');
        readLabel.appendChild(readToggle);
        readLabel.appendChild(readSpan);
        bookCard.appendChild(readLabel);
        
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
})

const addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read));
    updateLibrary(myLibrary)
}

// Delete a card
const deleteCard = (e) => {
    e.parentElement.remove();
}

generateLibrary()


