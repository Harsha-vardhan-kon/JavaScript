let library = [
    {
        title: 'The Lord of The Rings',
        author: 'J.R.R. Tolkien',
        year: 1950
    },
    {
        title: 'The Broken Earth',
        author: 'N.K. Jemisin',
        year: 1970
    },
    {
        title: 'Solo Leveling',
        author: 'Chugong',
        year: 2020
    }
];

function me(){
    console.log(library.map(book=>book.author))
}
me();


function getAvailableBooks() {
    console.log(library.map(Books=>Books.title))
}
getAvailableBooks(); 

function searchBook(title){
    if(title==='Solo Leveling'){
        console.log(Object.entries(library[2])) 
    }
    else if(title==='The Lord of The Rings'){
        console.log(Object.entries(library[0]))
    }
    else if(title==='The Broken Earth'){
        console.log(Object.entries(library[1]))
    }
    else{
        console.log('book not found')
    }
}


searchBook('The Lord of The Rings')



