const myLibrary = [];

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readStatus = function(){
    this.read = !this.read;
}

function addBook (title,author,pages,read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

addBook("Coraline","Tolkieb",310, false);
addBook("Lizzie Borden","Orwell",328,true);

const bookList
    
