class Book {
    title: String;
    isRead: boolean;

    constructor(title: string, isRead: boolean){
        this.title = title;
        this.isRead = isRead;
    }
}

const isBookRead = (books: Book[], titleToSearch: string) => {
    const book: Book[] = books.filter(book => book.title === titleToSearch);
    return book[0]?.isRead || false;
}

var books: Book[] = [
    new Book("Harry Potter y la piedra filosofal", true),
    new Book("Canción de hielo y fuego", false ),
    new Book("Devastación", true ),
];

console.log('isBookRead:', isBookRead(books, "Devastación")); // true
console.log('isBookRead:', isBookRead(books, "Canción de hielo y fuego")); // false
console.log('isBookRead:', isBookRead(books, "Los Pilares de la Tierra")); // false