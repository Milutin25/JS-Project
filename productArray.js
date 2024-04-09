/*Convert productData into an array where each element
 is an object with properties: id, name, price, totalSales, and totalRevenue.
Calculate totalSales (sum of monthlySales) and totalRevenue
 (totalSales * price) for each product.
Determine which product had the highest totalSales.
Expected Output:
Array of products with added totalSales and totalRevenue.
ID of the best-selling product.*/

const productData = {
    "p001": {
        name: "Product 1",
        price: 20,
        monthlySales: [30, 25, 40, 20, 10]
    },
    "p002": {
        name: "Product 2",
        price: 15,
        monthlySales: [35, 20, 45, 17, 33]
    },
    "p003": {
        name: "Product 3",
        price: 25,
        monthlySales: [10, 12, 10, 11, 12]
    }
};


let totalSales = 0; 
let totalRevenue = 0; 
let productArray = []; 
let bestSellingProduct = "";

for (key in productData) { 
    if (productData[key] !== undefined) { 
        let products = productData[key];

        for (let i = 0; i < products.monthlySales.length; i++) {
            totalSales += products.monthlySales[i]; 
        }

        totalRevenue = totalSales * products.price;

        productArray.push({
            id: key,
            name : products.name, 
            price : products.price, 
            totalSales : totalSales, 
            totalRevenue : totalRevenue
        })
    }
}
console.log(productArray[0]); 
console.log(productArray[1]); 
console.log(productArray[2]); 



for (key in productArray) {
    for (let i = 0; i < productArray[key].totalRevenue; i++) { 
        if (totalRevenue < productArray[key].totalRevenue) { 
            totalRevenue = productArray[key].totalRevenue;
        }
    }
}
console.log(totalRevenue);

