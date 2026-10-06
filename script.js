const myLibrary = [];

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookList = document.getElementById("book-list");
const bookDialog = document.getElementById("book-dialog");
const addBookBtn = document.getElementById("add-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

addBookBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    bookDialog.showModal();
})

cancelBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    bookDialog.close();
});


function addBook (title,author,pages,read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooks();
}


function dispalyBooks (){
    const bookList = document.getElementById("book-list")
    bookList.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div")
        card.classList.add("book-card");

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "yes" : "no"}</p>
            <button onclick = "toggleRead(${index})>Toggle Read</button>
            <button onclick ="removeBook(${index})>Remove</button>
            
        `;

        bookList.appendChild(card);
    })
}
    
bookForm.addEventListener("sumit", (e) => {
    e.preventDefault();
    const bookDialog = document.getElementById("book-dialog")
    bookDialog.showModal();

    const title = title.value;
    const author = author.value;
    const pages = pages.value;
    const read = read.value;

    addBook(title,author.pages,read);
    bookForm.reset();

})

function toggleRead(id){
    const book = myLibrary.find((book) => book.id === id);
    if(book){
        book.read = !book.read;
        dispalyBooks();
    }
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

addBook("Coraline", "Tolkien", 310, false);
addBook("Lizzie", "0rwell", 328, true);