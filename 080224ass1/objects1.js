let library = [];

function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; // Initialize to false by default
}

function addBook(id, title, author) {
    const book = new Book(id, title, author);
    library.push(book);
}

function borrowBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        if (!book.isBorrowed) {
            book.isBorrowed = true;
            console.log("Book borrowed successfully!");
        } else {
            console.log("Book is not available.");
        }
    } else {
        console.log("Book not found.");
    }
}

function returnBook(id) {
    const book = library.find(book => book.id === id);
    if (book) {
        book.isBorrowed = false;
        console.log("Book returned successfully!");
    } else {
        console.log("Book not found.");
    }
}

function listAvailableBooks() {
    const availableBooks = library.filter(book => !book.isBorrowed);
    console.log("Available Books:");
    availableBooks.forEach(book => console.log(book.title));
}

function searchBook(title) {
    const foundBooks = library.filter(book => book.title === title);
    if (foundBooks.length > 0) {
        console.log("Book found at index:", library.indexOf(foundBooks[0]));
    } else {
        console.log("Book not found.");
    }
}

// Adding books
addBook(1111, "The Indian Story", "Bimal Jalan");
addBook(2222, "Business of Sports:The Winning Formula for success", "Vinit Karnik");
addBook(3333, "Rich Dad Poor Dad", "Robert Toru Kiyosaki");

// Example usage
borrowBook(2222); // Borrowing a book
listAvailableBooks(); // Listing available books
returnBook(2222); // Returning a book
listAvailableBooks(); // Listing available books
searchBook("Business of Sports:The Winning Formula for Success");  