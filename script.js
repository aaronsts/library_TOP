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

const Book1 = new Book('the hobbit', 'J.R.R Tolkien', 297, true);
Book1.info();