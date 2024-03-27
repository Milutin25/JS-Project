let array = [4, 6, 18, 90, 35, 56, 25];
minNum = 0;
maxNum = 0;
minMaxObject = {};

for ( let i = 0; i < array.length; i++){
    
    minNum = Math.min(...array);
    maxNum = Math.max(...array);
}
minMaxObject.min = minNum;
minMaxObject.max = maxNum;
console.log(minMaxObject);
console.log(typeof minMaxObject);
