let books = [
    {
      id: 1,
      image: "images/img1.webp",
      title: "Swan Song",
      author: "Elin Hilderbrand",
    },
    {
      id: 2,
      image: "images/img2.webp",
      title: "Onix Storm",
      author: "Rebecca Yarros",
    },
    {
      id: 3,
      image: "images/img3.webp",
      title: "Not in Love",
      author: "Ali Hazelwood",
    }
];



function displayAllBooks(){

    const bookDiv = document.getElementById("displayedbooks"); //konstanta koja povezuje DIV iz HTML-a i funkciju u Java Script-u

    bookDiv.innerHTML="";

    books.forEach((book) => {                                  // loopujemo kroz database books

        const bookList = document.createElement("ul");         // kreiramo novu konstantu(listu) koju cemo popuniti knjigama iz database  

        bookList.classList.add("booklist");                    // dodajemo klasu novom elementu da bi moglo da se manipulise njim u CSS-u

        bookList.setAttribute("id", "bookID");                 // dodajemo ID novom elementu

        bookList.innerHTML += `                                 
        <li> <img src="${book.image}"</li>                     
        <li> ${book.title}</li>
        <li> ${book.author}</li>
        `                                                       //pisem sta hocu da se prikaze u bookList

        bookDiv.appendChild(bookList);                          // HTML division apenduje bookList 
    })

}

document.addEventListener("DOMContentLoaded", displayAllBooks);  //addEventListener dodeljen HTMl dokumentu - cim se ucita stranica realizuje se funkcija displayAllBooks