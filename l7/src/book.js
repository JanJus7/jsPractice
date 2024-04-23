class Book {
    title = '';

    author = '';

    year = 0;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printDetails() {
        console.log(`${this.title}, ${this.author}, ${this.year}`);
    }

    get isRecent() {
        return this.year > 2014 && this.year <= 2024;
    }

    isByAuthor(author) {
        return this.author === author;
    }
}

const book1 = new Book('Not A Book', 'That Author', 2024);

book1.printDetails();
console.log(book1.isRecent);
console.log(book1.isByAuthor("That Author"));