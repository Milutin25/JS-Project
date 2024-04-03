//write a JavaScript program to transform this array into an object of arrays categorized by age. 
//If the input array is: 
//[{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }]
//output
//{ '20': ['Amy'], '25': ['John', 'cam'] }

let myArray = [{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'Cam', age: 25 }];

let objectOfArray = {};

for ( let i = 0; i < myArray.length; i++){
      
   let personAge = myArray[i].age;
   let personName = myArray[i].name;

   if (objectOfArray[personAge] === undefined) {
      objectOfArray[personAge] = [];
   }

   objectOfArray[personAge].push(personName);
   
  
}
console.log(objectOfArray);
console.log(objectOfArray[20]);
console.log(objectOfArray[25])