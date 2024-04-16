//Given an array of names, use a for loop to print each name with an added greeting. For example, ["Alice", "Bob", "Charlie"] should print "Hello, Alice!", "Hello, Bob!", and "Hello, Charlie!
myArray = ["Alice", "Bob", "Charlie"];
myNewArray =[];
for ( let i = 0; i < myArray.length; i++){
    myNewArray = "Hello, " + myArray[i];
    console.log(myNewArray);
}