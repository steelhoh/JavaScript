function oldBooks(args){
    let bookSearched = args[0];
    let booksChecked = 0;
    let currentBook = args[booksChecked + 1];
    let bookFound = false;
    

    while (currentBook !== "No More Books") {
        if (bookSearched === currentBook) {
            bookFound = true;
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        } else {
        booksChecked += 1;
        }
        currentBook = args[booksChecked + 1]
    }
    if (!bookFound){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${booksChecked} books.`)
    }
}

oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    