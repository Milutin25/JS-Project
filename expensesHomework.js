/* 
output
{
    totalIncome: 1440,
    totalExpense: 820,
    balance: 620
} */
const transactions = [
    { type: 'income', amount: 1200 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 150 },
    { type: 'expense', amount: 500 },
    { type: 'income', amount: 90 },
    { type: 'expense', amount: 120 }
]

let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;
let finalAmounts = {};

for (i in transactions){

    for(key in transactions[i]){

        if(transactions[i][key] === "income"){
            totalIncome += transactions[i].amount;
        }
        else if(transactions[i][key] === "expense"){
            totalExpenses += transactions[i].amount
        }
        balance = totalIncome - totalExpenses;
    }
}

finalAmounts.totalIncome = totalIncome;
finalAmounts.totalExpenses = totalExpenses;
finalAmounts.balance = balance;
console.log(finalAmounts);

