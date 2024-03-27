let scores = [6, 58, 68, 91, 45,85];
studentScore =[];
for (i = 0; i < scores.length; i++){
    
    if (scores[i] >=90 )
        studentScore.push(scores[i] + " is grade A");

    else if (scores[i] < 90 && scores[i] >= 80)
        studentScore.push(scores[i] + " is grade B");

    else if (scores[i] < 80 && scores[i] >= 70)
        studentScore.push(scores[i] + " is grade C");

    else if (scores[i] < 70 && scores[i] >= 60)
        studentScore.push(scores[i] + " is grade D");
    
    else 
        studentScore.push(scores[i] + " is grade F");

}
console.log(studentScore);
