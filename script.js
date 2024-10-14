const arr = [];

function Book(title, author, noOfPages, status){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = status;

    this.info = () =>{
        return `${this.title}, ${this.author}, ${this.noOfPages}, ${this.status}`
    }

}

function addBooksToTheLibrary(book){
    arr.push(book);
}

const book1 = new Book("Fire and Blood", "George R Martin", 746, "read");
const book2 = new Book("Diary of Wimpy Kid", "Anne Hearth", 341, "notRead");

const table = document.querySelector("#bookTable tbody");