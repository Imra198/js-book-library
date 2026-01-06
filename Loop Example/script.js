document.addEventListener("DOMContentLoaded", () => {// DOM is fully loaded before running the script
const library = [
    "Lord of the Rings",
    "Catcher in the Rye",
    "1984",
    "The Great Gatsby",
    "To kill a Mockingbird"
];

const bookList = document.getElementById("book-list");// Get the book list container

if (!bookList) return; // Exit if the container is not found

library.forEach(book => {
    const listItem = document.createElement("li");// Create a new list item
    listItem.textContent = book; // Set the text content to the book title
    bookList.appendChild(listItem);// Append the list item to the book list
});
});