'use strict'
let myBooks = [
    {
        title: 'Frankestein',
        author: 'Mary Shelley',
        alreadyRead: true,
    },
    {
        title: 'Yoldaki Isiklar',
        author: 'M.F Gulen',
        alreadyRead: true,
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        alreadyRead: true,
    }
]
for(let i = 0; i < myBooks.length; i++){
    console.log(myBooks[i].title + ' by ' + myBooks[i].author)
    if(myBooks[i].alreadyRead === true){
        console.log(`You already read "${myBooks[i].title}"`)
    }else{
        console.log(`You still need to read "${myBooks[i].title}"`)
    }
}