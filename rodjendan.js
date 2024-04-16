/*Write a JavaScript function that takes your
 birthdate as input and returns the number of
days you've lived until today (assuming today is your birthday).
The function should accept a birthdate in the format "YYYY-MM-DD".
Calculate the difference between the current date
(assuming today is your birthday) and the birthdate.
Convert this difference from milliseconds to days
(considering 1 day = 24 hours, 1 hour = 60 minutes, 1 minute = 60 seconds, 1 second = 1000 milliseconds).
Return the total number of days.
const birthdate = "1984-04-07";
Total days lived: ${Days}
"Total days lived: 12345"*/

const birthdate = "1981-04-07";

function calculateDaysLived (birth) {

    let today = new Date ();
    let birthDate = new Date(birthdate);

    let daysLived = Math.ceil((today - birthDate)/(1000*60*60*24));

    return daysLived; 

}

console.log(calculateDaysLived(birthdate));