let text = "slavo, marko, milutin" ;
/* steps: 
1. String to array of names; 
2. Loop through the array of names;
3. make first letter in every name upper case;
4. Array of names back to string again; */

let arrayNames = text.split(", ");
console.log(arrayNames);

for (let i = 0; i < arrayNames.length; i++){
    arrayNames[i] = arrayNames[i].charAt(0).toUpperCase() + arrayNames[i].slice(1);
}
console.log(arrayNames.join(", "));
