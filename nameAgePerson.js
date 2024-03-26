let person = {name: "Milutin", age: 85};

switch(true){
    case person.age >0 && person.age<12:
    console.log("Milutin is 13 years old.");
    break;
    case person.age >13 && person.age<19:
        person.age = person.age + 1;
    console.log("Milutin is " +person.age + " years old.");
    break;
    case person.age > 19:
    console.log("Milutin is 21 years old.")
    break;
    default:
        console.log("Milutin is not alive.");

}
    

