const arr = [];

function Book(title, author, noOfPages, status) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;

    this.info = () => {
        return `${this.title}, ${this.author}, ${this.noOfPages}, ${this.status}`;
    };
}

function addBooksToTheLibrary(book) {
    arr.push(book);
}

function removeBooksFromTheLibrary(){
    arr.pop();
}

const book1 = new Book("Fire and Blood", "George R Martin", 746, "read");
const book2 = new Book("Diary of Wimpy Kid", "Anne Hearth", 341, "notRead");

addBooksToTheLibrary(book1);
addBooksToTheLibrary(book2);

function displayData() {
    const table = document.querySelector("#bookTable tbody");
    table.innerHTML = ""; // Clear the table before displaying new data

    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement("tr");

        const d1 = document.createElement("td");
        d1.innerText = arr[i].title;
        const d2 = document.createElement("td");
        d2.innerText = arr[i].author;
        const d3 = document.createElement("td");
        d3.innerText = arr[i].noOfPages;
        const d4 = document.createElement("td");
        d4.innerText = arr[i].status;

        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);

        table.appendChild(row);
    }
}

const button = document.querySelector("#printButton");
button.addEventListener("click", displayData);

const newBookButton = document.querySelector("#newbook");
newBookButton.addEventListener("click", function () {
    const formAccessor = document.querySelector("#formContainer");
    formAccessor.innerHTML = ""; // Clear the container before adding a new form

    const form = document.createElement("form");

    form.innerHTML = `
        <label>Title: <input type="text" id="titleInput" required></label><br>
        <label>Author: <input type="text" id="authorInput" required></label><br>
        <label>Number of Pages: <input type="number" id="pagesInput" required></label><br>
        <label>Status: 
            <select id="statusInput" required>
                <option value="read">Read</option>
                <option value="notRead">Not Read</option>
            </select>
        </label><br>
        <button type="submit">Submit</button>
    `;

    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const title = document.querySelector("#titleInput").value;
        const author = document.querySelector("#authorInput").value;
        const noOfPages = document.querySelector("#pagesInput").value;
        const status = document.querySelector("#statusInput").value;

        const newBook = new Book(title, author, noOfPages, status);
        addBooksToTheLibrary(newBook);

        // Clear the form
        form.reset();
        formAccessor.innerHTML = ""; // Remove the form after submission
    });

    formAccessor.appendChild(form); // Append the form to the container
});

const removeButton = document.querySelector("#remove");

removeButton.addEventListener("click", removeBooksFromTheLibrary);