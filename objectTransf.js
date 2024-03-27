let array = [{Milutin : "grade A"}, {Natasa : "grade B"}, {Marko : "grade C"}];
let object1 = {};
let object2 = {};
let object3 = {};

for ( let i = 0; i < array.length; i++){
    object1 = array[0];
    object2 = array[1];
    object3 = array[2];
}
const newObject = Object.assign(object1, object2, object3);

console.log(newObject);