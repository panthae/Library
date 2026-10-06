let myLibrary = [];

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

const bookList = document.getElementById("book-list");
const bookDialog = document.getElementById("book-dialog");
const addBookBtn = document.getElementById("add-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const bookForm = document.getElementById("book-form");
const Title = document.getElementById("title");
const Author = document.getElementById("author");
const Pages = document.getElementById("pages");
const Read = document.getElementById("read");

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


function displayBooks (){
    bookList.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div")
        card.classList.add("book-card");

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "yes" : "no"}</p>
            <button onclick= "toggleRead('${book.id}')>Toggle Read</button>
            <button onclick="removeBook('${book.id}')>Remove</button>
            
        `;

        bookList.appendChild(card);
    })
}
    
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookDialog = document.getElementById("book-dialog")
    bookDialog.showModal();

    const titleki = Title.value;
    const authorki = Author.value;
    const pageski = Pages.value;
    const readki = Read.checked;

    addBook(titleki,authorki,pageski,readki);
    bookForm.reset();
    bookDialog.close();

})

function removeBook(id){
    myLibrary = myLibrary.filter((book) => book.id !== id)
    displayBooks();
    
}

function toggleRead(id){
    const book = myLibrary.find((book) => book.id === id);
    if(book){
        book.read = !book.read
        displayBooks();
    }
}

addBook("Coraline", "Tolkien", 310, false);
addBook("Lizzie", "0rwell", 328, true);