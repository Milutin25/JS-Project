function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 & flower2 % 2 != 0)
        return true;
    if (flower1 % 2 != 0 & flower2 % 2 === 0)
       return true;
    if (flower1 % 2 === 0 & flower2 % 2 === 0)
        return false;
    if (flower1 % 2 != 0 & flower2 % 2 != 0)
        return false;
    }
    console.log(lovefunc(4,5));

  