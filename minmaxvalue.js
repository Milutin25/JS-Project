const array_1 = [3,5,7,25,55,100];
    let minValue = Infinity;
    let maxValue = -Infinity;
 
    for (let item of array_1) {
        if (item < minValue)
            minValue = item;
 
        if (item > maxValue)
            maxValue = item;
    }
    console.log(minValue);
    console.log(maxValue);