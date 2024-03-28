let userName = {
    firtsName: "slavo",
    lastName: "popovic",
    addresses: {
        mainAddress: {
             city: "Miami",
            zipCode: 33132
        },
        secAddress: {
            city: "NYC",
            zipCode: 11000
        }
    },
    age: 42, 
    hobbies: ["soccer","basketball"], 
    flag: true
};


console.log(typeof userName["hobbies"])
// Need to go over all the keys 
for (key in userName) {
    // za sve gde nije objekat print false
    if (typeof userName[key] !== "object") {
        console.log(key," : ", false);
    } else {
        console.log(key," : ",true);
        for (i in userName[key]) {
            if (typeof userName[key][i] !== "object") {
                console.log(userName[key][i]," : ", false);
            } else {
                console.log(userName[key][i], " : ", true )
            }
        }
    }
}