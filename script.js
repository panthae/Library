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
    const bookList = document.getElementById("book-list")
    bookList.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div")
        card.setAttribute("data-id", book.id);
        card.classList.add("book-card");
        
        const title = document.createElement("h3");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const readStatus = document.createElement("p");
        readStatus.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        card.appendChild(readStatus);

        const btn = document.createElement("div");
    
        btn.classList.add("book-buttons");

        const removebtn = document.createElement("button");
        removebtn.textContent ="Remove";
        removebtn.addEventListener("click", () => {
            removeBook(book.id);
        });
        btn.appendChild(removebtn);

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = book.read ? "Mark as unread" : "Mark as read";
        toggleReadBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });
        btn.appendChild(toggleReadBtn);
        card.appendChild(btn)
        bookList.appendChild(card);
    })
}
    
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
   
    

    const titleki = Title.value;
    const authorki = Author.value;
    const pageski = Pages.value;
    const readki = Read.checked;

    addBook(titleki,authorki,pageski,readki);
    bookForm.reset();
    bookDialog.close();

})

function removeBook(id){
    const index = myLibrary.findIndex((book) => book.id === id);
    if(index !== -1){
       myLibrary.splice(index, 1);
        displayBooks();
    }
}

function changeStatus(id){
     myLibrary = myLibrary.filter((book) => book.id !== id)
    displayBooks();
    
}

    

addBook("Coraline", "Tolkien", 310, false);
addBook("Lizzie", "0rwell", 328, true);