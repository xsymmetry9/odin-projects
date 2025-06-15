const myLibrary = [];

function Book(idBook, name, author, pages, read){
    this.id = idBook;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function getRanId(){
    return Math.floor(Math.random() * 100)
}
const book1 = new Book(getRanId(),"The Hobbit","J.R.R. Tolkien", 295);
const book2 = new Book(getRanId(), "Of Mice and Men","John Steinbeck", 107);
const book3 = new Book(getRanId(), "Black Mamba Mentality", "Kobe Bryan", 208);
myLibrary.push(book1);
myLibrary.push(book2);  
myLibrary.push(book3);

const plotMyBooks = document.querySelector('.myBooks');
//Adds book to the library
function plotBooks(){

    myLibrary.forEach((element, index)=>{

        //Creates the card
        let div = document.createElement('div');
        div.classList.add("card"); //Add idd
        div.setAttribute('id',`card-${element.id}`);
        plotMyBooks.appendChild(div);

        let getCardId = document.querySelector(`#card-${element.id}`);
        //Add text to title
        const h3 = document.createElement('h3');
        h3.classList.add("title-book");
        h3.setAttribute('id',`card-title-${element.id}`);
        h3.textContent = element.name;
        getCardId.appendChild(h3);

        //Adds text to author
        let author = document.createElement('p');
        author.setAttribute('id','author');        
        author.textContent = `Author: ${element.author}`;
        getCardId.appendChild(author);

        //Adds number of pagers
        let pages = document.createElement('p');
        pages.setAttribute('id','numOfPages');
        pages.textContent =`Pages: ${element.pages}` ;
        getCardId.appendChild(pages);

        //Adds if read or not
        let isRead = document.createElement('p');
        isRead.setAttribute('id', 'isRead');
        isRead.textContent = "unread";
        getCardId.appendChild(isRead);

        let createButton = document.createElement('button')
        createButton.classList.add("delete-button");
        createButton.setAttribute('id',`${element.id}`);
        createButton.setAttribute('value',`${element.name}`)
        createButton.textContent ="Del";
        getCardId.appendChild(createButton);

        let createReadBtn = document.createElement('button');
        createReadBtn.classList.add("read-button");
        createReadBtn.setAttribute('id',`${element.id}`);
        createReadBtn.textContent="unread";
        createReadBtn.setAttribute('value',`${element.name}`);
        getCardId.appendChild(createReadBtn);
    });
}
plotBooks();

//Button Functionality 

var getForm = document.querySelector(".create-form");
getForm.addEventListener(("click"),()=>{
    const add= document.getElementById("add");
    add.style.display ="block";
});

var deleteCards = document.querySelectorAll(".delete-button");

function getIndex(id){
    myLibrary.forEach((element, index) =>{
        if(id == element.id){
            return index;
        }
    })
}
function delBook(id){
    myLibrary.forEach((element, index) =>{
        if(id == element.id){
            myLibrary.splice(index,1);
        }
    });
}
deleteCards.forEach((button) =>{ 
    button.addEventListener(("click"),(e) =>{
        let getCard = document.getElementById(`card-${e.target.id}`);
        delBook(e.target.id);
        getCard.remove();

    });
});

var readBtns = document.querySelectorAll(".read-button");
readBtns.forEach((button) =>{
    button.addEventListener(("click"),(e)=>{
        let getBG = button.parentNode.querySelector('.card .read-button');
        let getCard = document.querySelector(`#card-${e.target.id} #isRead`);
    
        myLibrary.forEach((element, index) =>{
            if(e.target.id == element.id){
                myLibrary[index].isRead();

                if(myLibrary[index].read){
                    getBG.style.backgroundColor = "green";
                    getBG.innerHTML = "unread";
                    getCard.innerHTML = "Read";
                }
                else{
                    getBG.style.backgroundColor = "red";
                    getBG.innerHTML = "read";
                    getCard.innerHTML = "Not Read";
                }   

            }
        })

        
    })
})

// Book.prototype.getId = function(){
//     this.idBook = Math.floor(Math.random() * 100);
// }
Book.prototype.isRead = function(){
    if (this.read == null)
    {
        this.read = true;
    }
    else if(this.read){
        this.read= false;
    }
    else{
        this.read= true;
    }
}

// Book.prototype.info = function()
// {
//     if (this.finish){
//         console.log(`${this.name}, ${this.pages}, already read`);
//     } else{
//         console.log(`${this.name}, ${this.pages} pages, not read yet`);
//     }
// }

// function isRead(name,pages){
//     this.name = name,
//     this.pages = pages
//     this.finish = true
// }

// function notRead(name,pages){
//     this.name = name,
//     this.pages = pages
//     this.finish = false 
// }

// isRead.prototype = Object.create(Book.prototype);
// notRead.prototype = Object.create(Book.prototype);

// const theHobbit = new isRead("J.R.R. Tolkien", 295);
// const ofMiceAndMen = new notRead("John Steinbeck", 107);

