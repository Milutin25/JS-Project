function booleanToString(value) {
    switch(value){
        case true:
            return "Yes";
        case false:
            return "No";
        default:
            console.log("Error")
    }
  }
  
  console.log(booleanToString(true));  
  console.log(booleanToString(false)); 
  