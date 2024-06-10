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


                                                                //pisem sta hocu da se prikaze u bookList
        bookList.innerHTML += `                                 
        <li> <img src="${book.image}"</li>                     
        <li> ${book.title}</li>
        <li> ${book.author}</li>
        <li> <button id="favoritesButton" onclick="addToFavorites(${book.id})">Add To Favorites</button>` // napravljeno dugme sa funkcijom(addTofavorites) koju cu posle definisati                                                       

        bookDiv.appendChild(bookList);                          // HTML division apenduje bookList 
    })

}

document.addEventListener("DOMContentLoaded", displayAllBooks);  //addEventListener dodeljen HTMl dokumentu - cim se ucita stranica realizuje se funkcija displayAllBooks


const favoriteBooksIds = new Set()                              // new array u koji ce da se stavljaju favorites knjige klikom na dugme



function addToFavorites(bookId){

  const favoriteBook = books.find((book)  => book.id === bookId)   //ovo stavljamo da se ne preklapaju knige u favoriteBooksIds 
  if (!favoriteBook || favoriteBooksIds.has(bookId)) return        // ako je vec knjiga ubacena izadji iz funkcije(nema preklapanja book.Id)

  const favDiv = document.getElementById("favorites");          //konstanta koja povezuje DIV iz HTML-a i funkciju u Java Script-u
  
  const favList = document.createElement("ul");                 // kreiramo novu konstantu(listu) u koju ce ici knjige klikom na dugme

  favList.setAttribute("id", "favlist");                        // dodajemo ID novom elementu

  favList.innerHTML +=`
        <li> <img src="${favoriteBook.image}"</li>                     
        <li> ${favoriteBook.title}</li>
        <li> ${favoriteBook.author}</li>
  `

  favDiv.appendChild(favList);
  favoriteBooksIds.add(bookId);
}

