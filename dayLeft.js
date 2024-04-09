/*Working with Dates
Objective: Write a function that calculates the
 number of days left until the next New Year. 
 The function should take no arguments and return the 
 number of days as an integer.*/


 let currentDay = new Date();

 let lastDay = new Date(currentDay.getFullYear()+1 , 0, 1);

msecLeft = lastDay - currentDay;
msecDay = 1000 * 60 *60 *24

daysLeft = Math.ceil((msecLeft/msecDay));

console.log(daysLeft);

