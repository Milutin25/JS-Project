const bookGenres = {
    fiction: 45,
    nonfiction: 30,
    fantasy: 25
};

/* [
    { genre: "fiction", count: 45 },
    { genre: "nonfiction", count: 30 },
    { genre: "fantasy", count: 25 }
]*/

let arrOfObjects = [];

for (key in bookGenres){

    arrOfObjects.push ({genre : key, count :bookGenres[key]})

}console.log(arrOfObjects);

