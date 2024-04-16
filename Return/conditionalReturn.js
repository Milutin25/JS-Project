/*Write a function calledgradeTest
that takes a score out of 100 and 
returns "Pass" if the score is 50 or higher,
 and "Fail" if the score is less than 50.*/

 function calledGradeTest(score){
    if (score >= 50){
        return "Pass";
    }
    if (score < 50){
        return "Fail";
    }
 }
 console.log(calledGradeTest(68));